import "../styles/globals.css";
import awsExports from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import Header from "../components/signupflow/Header";
import Footer from "../components/signupflow/Footer";
import SignInHeader from "../components/signupflow/SignInHeader";
import SignInFooter from "../components/signupflow/SignInFooter";
import { Router } from "next/router";
// import nprogress from "nprogress";
// import "nprogress/nprogress.css";

// Router.events.on("routeChangeStart", () => nprogress.start);
// Router.events.on("routeChangeComplete", () => nprogress.done);
// Router.events.on("routeChangeError", () => nprogress.done);

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Layout from "../components/layout/Layout";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
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
