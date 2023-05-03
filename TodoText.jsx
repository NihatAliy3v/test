import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const TodoText = ({ text }) => {
  return (
    <View
      style={{
        backgroundColor: "green",
        padding: 15,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>{text}</Text>
      <TouchableOpacity style={{ backgroundColor: "red", padding: 5 }}>
        <Text style={{ color: "white" }}>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoText;
