import "../styles/globals.css";
import awsExports from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import Header from "../components/signupflow/Header";
import SignInHeader from "../components/signupflow/SignInHeader";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp, {
  components: {
    Header,
    // SignIn: {
    //   Header: SignInHeader,
    // },
  },
});
