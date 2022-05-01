import Link from "next/link";
import NavIcon from "./NavIcon";

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
        className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
      >
        {navPannel.map((nav, index) => {
          return (
            <NavIcon className={"nav-icon"} key={index} url={nav.href}>
              {nav.name}
            </NavIcon>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
