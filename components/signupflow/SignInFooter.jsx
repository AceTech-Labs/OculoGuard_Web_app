import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

const SignInFooter = () => {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toResetPassword}>Reset your password</Link>
    </Flex>
  );
};

export default SignInFooter;
