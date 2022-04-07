import { Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import acetech from "./acetechfb.png";
const Footer = () => {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={tokens.space.small}>
      <Text>
        Made with ♥️ by Team
        <Image
          className="bg-red rounded-full"
          alt={"acetech labs"}
          src={acetech}
          width={45}
          height={45}
        />
      </Text>
    </Flex>
  );
};

export default Footer;
