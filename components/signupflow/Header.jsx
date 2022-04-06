import { Heading } from "@aws-amplify/ui-react";
import Image from "next/image";

import OcculoGuard from "./OcculoGuard2.png";

const Header = () => {
  return (
    <Image
      src={OcculoGuard}
      alt={"OculoGuard"}
      height={300}
      width={500}
      className={"rounded-lg"}
    />
  );
};

export default Header;
