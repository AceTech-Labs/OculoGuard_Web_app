import Link from "next/link";
import NavIcon from "./NavIcon";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillFileEarmarkMedicalFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Navigation = () => {
  const navPannel = [
    { href: "/", name: "DashBoard" },
    { href: "/records", name: "Records" },
    { href: "/profile", name: "Profile" },
    { href: "/about", name: "About" },
    // ["/", "SignOut"]
  ];

  return (
    <nav>
      <ul
        className="fixed top-0 left-0 h-screen w-24 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
      >
        {/* {navPannel.map((nav, index) => {
          return (
            <div key={index}>
              <NavIcon key={index} url={nav.href}>
                {nav.name}
              </NavIcon>
              <Divider></Divider>
            </div>
          );
        })} */}
        <NavIcon url={navPannel[0].href} icon={<AiFillHome></AiFillHome>}>
          {navPannel[0].name}
        </NavIcon>

        <NavIcon
          url={navPannel[1].href}
          icon={<BsFillFileEarmarkMedicalFill></BsFillFileEarmarkMedicalFill>}
        >
          {navPannel[1].name}
        </NavIcon>

        <NavIcon url={navPannel[2].href} icon={<CgProfile></CgProfile>}>
          {navPannel[2].name}
        </NavIcon>

        <NavIcon url={navPannel[3].href} icon={<BsFillInfoCircleFill />}>
          {navPannel[3].name}
        </NavIcon>

        <NavIcon url={"#"} icon={<RiLogoutBoxRFill></RiLogoutBoxRFill>}>
          {"LogOut"}
        </NavIcon>
      </ul>
    </nav>
  );
};

export default Navigation;

const Divider = () => <hr className="nav-hr" />;
