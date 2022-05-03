import { useState, useEffect } from "react";
import Head from "next/head";
import { API, Auth } from "aws-amplify";
import { listUsers, getOphthalmologist, getUser } from "../src/graphql/queries";
import Button from "../components/buttons/Button";
import Link from "next/link";
import Card from "../components/card/Card";
import { data } from "autoprefixer";
import HeadDisplay from "../components/HeadDisplay";
import { useRouter } from "next/router";

const defaultAuthMode = "AMAZON_COGNITO_USER_POOLS";
let predictor = "/predictor/";

export default function Home() {
  const [userName, setUserName] = useState(null);
  const [users, setUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkOphthalamologist();
    getAllUsers();
    getAssignedUsers();
  }, []);

  // useEffect(() => {}, [user]);

  const checkOphthalamologist = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    console.log(userInfo.attributes.sub);
    try {
      const { data } = await API.graphql({
        query: getOphthalmologist,
        variables: {
          id: userInfo.attributes.sub,
        },
        authMode: defaultAuthMode,
      });

      if (data.getOphthalmologist === null) {
        setUser("P");
      } else {
        setUser("O");
        setUserName(data.getOphthalmologist.name);
        if (data.getOphthalmologist.name === "") {
          setUserName("NEW");
        } else {
          setUserName(data.getOphthalmologist.name);
        }
        return;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      const { data } = await API.graphql({
        query: getUser,
        variables: {
          id: userInfo.attributes.sub,
        },
        authMode: defaultAuthMode,
      });
      console.log("data = ", data);
      if (data.getUser === null) {
        setUserName("NEW");
      } else {
        setUserName(data.getUser.name);
        setUserId(userInfo.attributes.sub);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllUsers = async () => {
    try {
      const { data } = await API.graphql({
        query: listUsers,
        authMode: defaultAuthMode,
      });
      setUsers([
        ...data.listUsers.items.filter((user) => {
          return user.ophthalmologistID === null;
        }),
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const getAssignedUsers = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    try {
      const { data } = await API.graphql({
        query: listUsers,
        authMode: defaultAuthMode,
      });
      setAssignedUsers([
        ...data.listUsers.items.filter((user) => {
          return user.ophthalmologistID === currentUser.attributes.sub;
        }),
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  if (user === "P") {
    return (
      <div>
        <HeadDisplay>
          Welcome back &nbsp;
          {userName === "NEW" ? (
            <span>
              Seems like you are new to the System please create account from
              <Link href={"/profile"}> here</Link>
            </span>
          ) : (
            userName
          )}
          !
        </HeadDisplay>
        <div className="my-12"></div>
        <div className="flex justify-center">
          {userId && (
            <Button
              onClick={() => {
                router.push(predictor + userId);
              }}
            >
              Go For Prediction
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red flex flex-col">
      <Head>OculoGuard</Head>
      <main className="flex flex-col">
        <HeadDisplay>
          Welcome back &nbsp;
          {userName === "NEW" ? (
            <span>
              Seems like you are new to the System please create account from
              <Link href={"/profile"}> here</Link>
            </span>
          ) : (
            userName
          )}
          !
        </HeadDisplay>
        <div className="my-12"></div>
        <div className="flex items-baseline w-full">
          <div className="">
            <div className="flex justify-center my-4 text-red font-bold">
              Your Users
            </div>
            {assignedUsers.map((user) => {
              return (
                <Card
                  key={user.id}
                  id={user.id}
                  age={user.age}
                  records={user.Records.items.length}
                >
                  {user.name}
                </Card>
              );
            })}
          </div>
          <div className="flex mx-44"></div>
          <div className="">
            <div className="flex justify-center my-4 font-bold">
              Non Assigned Users
            </div>
            {users.map((user) => {
              return (
                <Card
                  key={user.id}
                  id={user.id}
                  age={user.age}
                  state="UNASSIGNED"
                  records={user.Records.items.length}
                >
                  {user.name}
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
