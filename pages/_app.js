import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import awsExports from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <Authenticator>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authenticator>
  );
}

export default MyApp;
