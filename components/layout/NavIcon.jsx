import Amplify, { Auth } from "aws-amplify";
import { useRouter } from "next/router";

const NavIcon = (props) => {
  const { url, children, icon } = props;
  const router = useRouter();

  const handleRoute = async (e) => {
    e.preventDefault();
    if (children === "LogOut") {
      await Auth.signOut();
    }
    router.push(url);
  };

  return (
    <li className="nav-icon group">
      <a href={"#"} onClick={handleRoute}>
        <div>{icon}</div>
        <span className="nav-tooltip group-hover:scale-100">{children}</span>
      </a>
    </li>
  );
};

export default NavIcon;
