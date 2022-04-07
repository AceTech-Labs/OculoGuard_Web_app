import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { API, Auth } from "aws-amplify";
import { listUsers, getOphthalmologist } from "../src/graphql/queries";
import { createOphthalmologist } from "../src/graphql/mutations";
import Button from "../components/buttons/Button";

const defaultAuthMode = "AMAZON_COGNITO_USER_POOLS";

export default function Home() {
  const [ophthalamologist, setOphthalamologist] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    checkOphthalamologist();
  }, []);

  const signOut = async () => {
    await Auth.signOut();
  };

  const checkOphthalamologist = async (id) => {
    const userInfo = await Auth.currentUserInfo();
    console.log(userInfo);
    const results = await API.graphql({
      query: getOphthalmologist,
      variables: {
        id: userInfo.id,
      },
      authMode: defaultAuthMode,
    });
    if (results.data.getOphthalmologist === null) {
      setOphthalamologist("New Optha");
    } else {
      setOphthalamologist(results.data.getOphthalmologist.name);
    }
  };

  const addOphthalamologist = async () => {
    const userInfo = await Auth.currentUserInfo();
    await API.graphql({
      query: createOphthalmologist,
      variables: {
        input: {
          id: userInfo.id,
          name: "Demo_Account_Optho_",
        },
      },
      authMode: defaultAuthMode,
    });
  };

  const getAllUsers = async () => {
    const results = await API.graphql({
      query: listUsers,
      authMode: defaultAuthMode,
    });
    console.log(results);
    // setUsers([...results]);
  };

  return (
    <Layout>
      <div className="bg-red flex flex-col">
        <Head>OculoGuard</Head>
        <main>say my name</main>
        <div>
          <button onClick={signOut}>Sign Out</button>
        </div>
        <main>
          <p className="bg-red text-center">
            User name {ophthalamologist == null ? "null" : ophthalamologist}
          </p>
          <div>
            {users.map((user) => {
              return <div key={user.id}>{user.name}</div>;
            })}
          </div>
          <div className="flex justify-center py-7">
            say my name
            <div>
              <Button onClick={addOphthalamologist}>
                Add Ophthalamologist
              </Button>
            </div>
            <div>
              <Button onClick={getAllUsers}>List Users</Button>
            </div>
          </div>
          <div></div>
        </main>
      </div>
    </Layout>
  );
}
