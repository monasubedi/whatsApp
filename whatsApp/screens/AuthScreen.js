import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PageContainer from "../components/PageContainer";
import SignupForm from "../components/SignupForm";
import { useState } from "react";
import SigninForm from "../components/SigninForm";
import colors from "../constants/colors";
import logo from "../assets/images/logo.png";

const AuthScreen = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            behavior={Platform.OS === "ios" ? "height" : undefined}
            style={styles.keyboardAvoidingView}
          >
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>
            {isSignup ? <SignupForm /> : <SigninForm />}
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={handleSwitch}
            >
              <Text style={styles.link}>
                {`Switch to ${isSignup ? "sign in" : "sign up"} `}{" "}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AuthScreen;
