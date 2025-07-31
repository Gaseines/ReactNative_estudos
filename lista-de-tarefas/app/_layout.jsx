import {
  Image,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  View,
  Pressable,
  FlatList,
} from "react-native";
import check from "../assets/images/check.png";
import { colors } from "../constant/colors";
import Task from "../components/Task";
import { useState } from "react";

const initialTasks = [
  { id: 1, completed: true, text: "Lavar a Louça" },
  { id: 2, completed: false, text: "Varrer a Casa" },
  { id: 3, completed: false, text: "Ir na Academia" },
];

export default function RootLayout() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

  const onAdd = () => {
    const newTask = { id: tasks.length + 1, completed: false, text };
    setTasks([...tasks, newTask]);
    setText("");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={check} style={styles.img} />
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput value={text} onChangeText={setText} style={styles.input} />
        <Pressable
          onPress={onAdd}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "lightblue" : colors.primary },
          ]}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={tasks}
          // keyExtractor={(item) => item.text} isso se usa caso o item não tenha o ID
          renderItem={({ item }) => (
            <Task text={item.text} initialCompleted={item.completed} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "bold",
    color: colors.primary,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  mainContainer: {
    margin: 20,
  },

  containerInput: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20,
  },

  button: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
