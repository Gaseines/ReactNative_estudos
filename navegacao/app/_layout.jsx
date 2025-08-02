import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

export default function RootLayout() {
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView>
        <DrawerItem
          icon={({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />}
          label={"Usuário"}
          onPress={() => router.push("/user")}
        />
      </DrawerContentScrollView>
    );
  };

  return (
    <>
      <StatusBar barStyle="ligth" backgroundColor={"#303040"} />
      <Drawer
        drawerContent={() => <CustomDrawerContent />}
        screenOptions={{
          headerStyle: { backgroundColor: "#303040" },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen name="(tabs)" options={{headerShown: false}} />
        <Drawer.Screen name="+not-found" options={{ headerTitle: "Erro" }} />
      </Drawer>
    </>
  );
}
