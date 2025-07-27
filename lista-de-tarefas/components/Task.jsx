import { Pressable, StyleSheet, Text, View } from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { colors } from "../constant/colors";

const Task = ({ text }) => {
  return (
    <View style={style.tasks}>
      <Pressable>
        <Fontisto name="checkbox-passive" size={24} color={colors.primary} />
      </Pressable>

      <Text style={style.textTask}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  tasks: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20
  },
  textTask: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Task;
