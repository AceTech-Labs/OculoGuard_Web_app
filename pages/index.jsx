import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import { API, Auth } from "aws-amplify";
import { listUsers, listOphthalmologists } from "../src/graphql/queries";
import { createOphthalmologist } from "../src/graphql/mutations";

export default function Home() {
  const [ophthalamologist, setOphthalamologist] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getOphthalamologists().then((list) => {
      console.log(list);
      setUsers([...list]);
      setOphthalamologist(list[0].name);
    });
  }, []);

  const signOut = async () => {
    await Auth.signOut();
  };

  const getOphthalamologists = async () => {
    const userData = await API.graphql({
      query: listOphthalmologists,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    return userData.data.listOphthalmologists.items;
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
          <p>
            User name {ophthalamologist == null ? "null" : ophthalamologist}
          </p>
          <p>
            users ={" "}
            {users == null
              ? "null"
              : users.map((userHere) => {
                  <h1>{userHere.name}</h1>;
                })}
          </p>
          <div></div>
        </main>
      </div>
    </Layout>
  );
}
