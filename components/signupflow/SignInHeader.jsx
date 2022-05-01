import { useTheme, Heading } from "@aws-amplify/ui-react";

const SignInHeader = () => {
  const { tokens } = useTheme();

  return (
    <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      <span className={"text-secondary"}> Sign in to your Account</span>
    </Heading>
  );
};

export default SignInHeader;
