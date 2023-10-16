import { StyleSheet, Text, View } from "react-native";

const ChatSettings = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatSettings;
