import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

const Button = ({ disabled, color, onPress, style, title }) => {
  const enabledBgColor = color || colors.primary;
  const disabledColor = colors.lightGrey;
  const bgColor = disabled ? disabledColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={{ ...styles.btn, ...style, ...{ backgroundColor: bgColor } }}
    >
      <Text style={{ color: disabled ? "grey" : colors.white }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
