import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import TodoText from "./TodoText.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSave = () => {
    data.push(text);
    setData(data);
    setText("");
  };
  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View style={style.title}>
        <Text style={style.title_text}>To-Do Application</Text>
      </View>
      <View
        style={{ backgroundColor: "#ccc", padding: 10, flexDirection: "row" }}
      >
        <TextInput
          value={text}
          style={style.input}
          onChangeText={(e) => setText(e)}
        />
        <TouchableOpacity onPress={handleSave} style={style.button}>
          <Text>Ekle </Text>
        </TouchableOpacity>
      </View>
      {data.map((item, index) => {
        return <TodoText key={index} text={item} />;
      })}
    </View>
  );
}

const style = StyleSheet.create({
  title: { backgroundColor: "blue", padding: 10 },
  title_text: { color: "#fff", textAlign: "center", fontWeight: 700 },
  input: { backgroundColor: "#fff", flex: 1 },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

const styles = StyleSheet.create({});
