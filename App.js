// State
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
// Components
import TodoText from "./TodoText.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("kjfs");
  }, []);
  const handleSave = () => {
    data.push(text);
    setData(data);
    setText("");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.title}>
            <Text style={style.title_text}>To-Do Application</Text>
          </View>
          <View style={style.inputContainer}>
            <TextInput
              value={text}
              style={style.input}
              onChangeText={(e) => setText(e)}
            />
            <TouchableOpacity onPress={handleSave} style={style.button}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
          {data.map((item, index) => {
            return <TodoText key={index} text={item} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
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
  container: { flex: 1, paddingTop: 30 },
  inputContainer: {
    backgroundColor: "#ccc",
    padding: 10,
    flexDirection: "row",
  },
});
