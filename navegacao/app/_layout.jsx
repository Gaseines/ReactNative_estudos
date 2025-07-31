import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {backgroundColor: "#303040"},
        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen name="index" options={{headerTitle: "Home"}} />
      <Stack.Screen name="settings" options={{headerTitle: "Configurações"}}/>
      <Stack.Screen name="user" options={{headerTitle: "Usuário"}}/>
    </Stack>
  );
}
