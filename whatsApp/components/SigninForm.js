import { Feather } from "@expo/vector-icons";
import Button from "./Button";
import Input from "./Input";

const SigninForm = () => {
  const handleSignin = () => {};
  return (
    <>
      <Input label="Email" iconPack={Feather} name="mail" size={24} />
      <Input label="Password" iconPack={Feather} name="lock" size={24} />
      <Button onPress={handleSignin} title="Sign In" style={{ marginTop: 3 }} />
    </>
  );
};

export default SigninForm;
