import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <props.iconPack name={props.name} size={props.size} />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{props.errorText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer:{
    backgroundColor:colors.nearlyWhite,
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:5,
    width:"100%",
    flexDirection:"row",
    alignItems:"center"
  },
  input:{
    paddingLeft:10,
    flex:1,
    color:colors.textColor,
    fontFamily:"regular",
    letterSpacing:0.3
  },
  label:{
    fontFamily:"bold",
    color:colors.textColor,
    marginBottom:5
  },
  icon:{
    color:colors.lightGrey
  },
  errorContainer:{
    marginVertical:3
  },
  errorText:{
    color:'red'
  }
});

export default Input;
