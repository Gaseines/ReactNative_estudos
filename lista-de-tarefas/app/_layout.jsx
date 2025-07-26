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
} from "react-native";
import check from "../assets/images/check.png";
import { colors } from "../constant/colors";

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
