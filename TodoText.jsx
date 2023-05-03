import React from "react";
import { Text, View } from "react-native";

const TodoText = ({ text }) => {
  return (
    <View style={{ backgroundColor: "green", padding: 15, marginBottom: 5 }}>
      <Text>{text}</Text>
    </View>
  );
};

export default TodoText;
