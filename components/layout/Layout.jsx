import Navigation from "./Navigation";

const Layout = (props) => (
  <div className="flex flex-row">
    <Navigation />
    <div>{props.children}</div>
  </div>
);

export default Layout;
