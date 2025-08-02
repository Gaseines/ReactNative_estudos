import { Text, View } from "react-native";
import { styles } from "./../styles/styles";
import { Link } from "expo-router";

export default function NotFound() {
  return (
    <View style={[styles.container, { backgroundColor: "red" }]}>
      <Text>Página não encontrada</Text>
      <Link style={styles.btn} replace href="/"> Voltar para Home</Link>
    </View>
  );
}
