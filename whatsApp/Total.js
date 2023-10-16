import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Total = ({ getTotal }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("calculating");
    setTotal(getTotal());
  }, [getTotal]);
  return (
    <View>
      <Text>Total: {total}</Text>
    </View>
  );
};

export default Total;
