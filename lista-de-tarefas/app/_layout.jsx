import {
  Button,
  Image,
  ScrollView,
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

const tasks = [
  { id: 1, completed: true, text: "Lavar a Louça" },
  { id: 2, completed: false, text: "Varrer a Casa" },
  { id: 3, completed: false, text: "Ir na Academia" },
];

export default function RootLayout() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={check} style={styles.img} />
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} />
        <Pressable
          onPress={() => {
            Alert.alert("tchau");
          }}
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
          renderItem={({ item }) => <Task text={item.text}/>}
        />
      </View>
    </ScrollView>
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
