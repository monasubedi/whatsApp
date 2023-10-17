import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";


const PageContainer = (props) => {
  return (
    <View style={{ ...styles.props, ...styles.container }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});

export default PageContainer;
