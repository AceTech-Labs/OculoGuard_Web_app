import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className=" flex  justify-between items-center color-red bg-blue-500 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/records"}>Records</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
