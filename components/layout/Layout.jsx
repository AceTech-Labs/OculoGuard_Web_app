import Navigation from "./Navigation";

const Layout = (props) => (
  <div className="flex flex-row">
    <Navigation />
    <div className="flex w-40"></div>
    <div>{props.children}</div>
  </div>
);

export default Layout;
