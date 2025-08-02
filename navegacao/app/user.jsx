import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { Link } from "expo-router";

export default function User() {
  return (
    <View style={[styles.container, {backgroundColor: "#BCF5E2"}]}>
      <Text>Usuário</Text>
      <Link style={styles.btn} push href="/settings">Ir para Configurações</Link>
    </View>
  );
}
