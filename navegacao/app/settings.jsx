import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";

export default function Settings() {

  const goToHome = () =>{
    router.navigate("/")
  }

  return (
    <View style={[styles.container, {backgroundColor: "#E3D2F4"}]}>
      <Text>Configurações</Text>
      <Pressable onPress={goToHome}>
        <Text>Voltar para Home</Text>
      </Pressable>
    </View>
  );
}
