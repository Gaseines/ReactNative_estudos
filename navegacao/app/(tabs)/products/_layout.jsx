import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#303040" },
        headerTintColor: "#fff",
        headerLeft: () => <DrawerToggleButton tintColor="#ffff" />
      }}
    >
      <Stack.Screen name="index" options={{title: "Produtos"}}/>
      <Stack.Screen name="products/[id]" />
    </Stack>
  );
}
