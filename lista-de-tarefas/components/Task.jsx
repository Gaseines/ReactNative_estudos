import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { colors } from "../constant/colors";
import { useState } from "react";
import { Directions, FlingGestureHandler, State } from "react-native-gesture-handler";

export default function Task({ text, initialCompleted, deleteTask }) {
  const [completed, setCompleted] = useState(initialCompleted);
  const swipe = new Animated.Value(0)

  const handleFling = (e) =>{
    if(e.nativeEvent.state === State.END){
      Animated.timing(swipe, {
        toValue: 500,
        duration: 300
      }).start(() => deleteTask())
      
    }
  }

  return (
    <FlingGestureHandler 
    direction={Directions.RIGHT}
    onHandlerStateChange={handleFling}
    >
      <Animated.View key={text} style={[style.tasks, {transform: [{translateX: swipe}]}]}>
        <Pressable
          onPress={() => {
            setCompleted(!completed);
          }}
        >
          {completed ? (
            <Entypo name="check" size={24} color={"gray"} />
          ) : (
            <Fontisto
              name="checkbox-passive"
              size={24}
              color={colors.primary}
            />
          )}
        </Pressable>

        <Text
          onPress={deleteTask}
          style={completed ? style.taskCompleted : style.textTask}
        >
          {text}
        </Text>
      </Animated.View>
    </FlingGestureHandler>
  );
}

const style = StyleSheet.create({
  tasks: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    elevation: 3,
    padding: 10,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    backgroundColor: "#ffff"
  },
  textTask: {
    fontSize: 18,
    fontWeight: "bold",
  },

  taskCompleted: {
    textDecorationLine: "line-through",
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});
