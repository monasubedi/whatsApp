import { Feather, FontAwesome } from "@expo/vector-icons";
import Input from "./Input";
import Button from "./Button";

const SignupForm = () => {
  const handleSignup = () => {};
  return (
    <>
      <Input
        label="First Name"
        iconPack={FontAwesome}
        name="user-o"
        size={24}
      />
      <Input label="Last Name" iconPack={FontAwesome} name="user-o" size={24} />
      <Input label="Email" iconPack={Feather} name="mail" size={24} />
      <Input label="Password" iconPack={Feather} name="lock" size={24} />
      <Button onPress={handleSignup} title="Sign Up" style={{ marginTop: 3 }} />
    </>
  );
};

export default SignupForm;
