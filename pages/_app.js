import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import awsExports from "../src/aws-exports";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  const SignIn = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
  };

  const SignOut = async () => {};

  return (
    // <Authenticator>
    <Layout>
      <button onClick={SignIn}>Sign IN</button>
      <div></div>
      <button onClick={SignOut}>Sign Out</button>
      <Component {...pageProps} />
    </Layout>
    //  </Authenticator> */
  );
}

export default MyApp;
