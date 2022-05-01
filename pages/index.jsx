import { useState, useEffect } from "react";
import Head from "next/head";
import { API, Auth } from "aws-amplify";
import { listUsers, getOphthalmologist } from "../src/graphql/queries";
import Button from "../components/buttons/Button";
import Link from "next/link";

const defaultAuthMode = "AMAZON_COGNITO_USER_POOLS";

export default function Home() {
  const [ophthalamologist, setOphthalamologist] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    checkOphthalamologist();
    getAllUsers();
  }, []);

  const signOut = async () => {
    await Auth.signOut();
  };

  const checkOphthalamologist = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    try {
      const { data } = await API.graphql({
        query: getOphthalmologist,
        variables: {
          id: userInfo.attributes.sub,
        },
        authMode: defaultAuthMode,
      });
      if (data.getOphthalmologist === null) {
        setOphthalamologist("NEW");
      } else {
        setOphthalamologist(data.getOphthalmologist.name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getAllUsers = async () => {
    const { data } = await API.graphql({
      query: listUsers,
      authMode: defaultAuthMode,
    });
    console.log(data);
    setUsers([...data.listUsers.items]);
  };

  return (
    <div className="bg-red flex flex-col">
      <Head>OculoGuard</Head>
      <main>say my name</main>

      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
      <main>
        <p className="bg-red text-center">
          User name{" "}
          {ophthalamologist === "NEW" ? (
            <span>
              Seems like you are new to the System please create account from{" "}
              <Link href={"/profile"}>here</Link>
            </span>
          ) : (
            ophthalamologist
          )}
        </p>
        <div>
          {users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
        <div className="flex justify-center py-7">
          say my name
          <div></div>
          <div>
            <Button onClick={getAllUsers}>List Users</Button>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}
