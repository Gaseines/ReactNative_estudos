import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function ProductDetail() {
  return (
    <View style={[styles.container, {backgroundColor: "#FBF5C5"}]}>
      <Text>Detalhes dos produtos</Text>
    </View>
  );
}
