import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import backgroundImg from "../assets/images/droplet.jpeg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";
import { useCallback, useState } from "react";

const ChatScreen = () => {
  const [message, setMessage] = useState("");

  const handleMsgChange = (text) => {
    setMessage(text);
  };
  const handleSendMsg = useCallback(() => {
    setMessage("");
  }, [message]);
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
        style={{ flex: 1 }}
      >
        <ImageBackground
          style={styles.bgImg}
          source={backgroundImg}
        ></ImageBackground>
        <View style={styles.btmContainer}>
          <TouchableOpacity style={styles.btn}>
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            value={message}
            onSubmitEditing={handleSendMsg}
            onChangeText={handleMsgChange}
          />
          {message === "" ? (
            <TouchableOpacity style={styles.btn}>
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleSendMsg}
              style={{ ...styles.btn, ...styles.sendBtn }}
            >
              <Feather name="send" size={20} color={colors.white} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
  },
  btmContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 55,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderColor: colors.lightGrey,
  },
  btn: {
    width: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtn: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 40,
  },
});

export default ChatScreen;
