import Link from "next/link";
import { useRouter } from "next/router";

const NavIcon = (props) => {
  const { url, children } = props;
  const router = useRouter();

  const handleRoute = (e) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <li>
      <a href={url} onClick={handleRoute}>
        {children}
      </a>
    </li>
  );
};

export default NavIcon;
