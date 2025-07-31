import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function Products() {
  return (
    <View style={[styles.container, {backgroundColor: "#FFD1D1"}]}>
      <Text>Produtos</Text>
    </View>
  );
}
