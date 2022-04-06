import "../styles/globals.css";
import awsExports from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import Header from "../components/signupflow/Header";
import Footer from "../components/signupflow/Footer";
import SignInHeader from "../components/signupflow/SignInHeader";
import SignInFooter from "../components/signupflow/SignInFooter";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter,
    },
    Footer,
  },
});
