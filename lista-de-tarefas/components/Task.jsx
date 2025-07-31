import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { colors } from "../constant/colors";
import { useState } from "react";

export default function Task({ text, initialCompleted }) {
  const [completed, setCompleted] = useState(initialCompleted);


  return (
    <View style={style.tasks}>
      <Pressable onPress={() => {setCompleted(!completed)}}>
        {completed ? (
          <Entypo name="check" size={24} color={"green"} />
        ) : (
          <Fontisto name="checkbox-passive" size={24} color={colors.primary} />
        )}
      </Pressable>

      <Text style={completed ? style.taskCompleted : style.textTask }>
        {text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  tasks: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  textTask: {
    fontSize: 18,
    fontWeight: "bold",
  },

  taskCompleted: {
    textDecorationLine: "line-through",
    fontSize: 18,
    fontWeight: "bold",
    color: "green"
  },
});

