import Navigation from "./Navigation";

const Layout = (props) => (
  <div className=" bg-purple-300 h-screen">
    <Navigation></Navigation>
    <main>{props.children}</main>
  </div>
);

export default Layout;
