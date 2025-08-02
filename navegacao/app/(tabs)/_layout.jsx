import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import {DrawerToggleButton} from "@react-navigation/drawer"

export default function TabsLayout() {
  return (
    <Tabs
    
      screenOptions={{
        headerStyle: { backgroundColor: "#303040" },
        headerTintColor: "#fff",
        // headerShown: false
        tabBarActiveTintColor: "#303040",
        headerLeft: () => <DrawerToggleButton tintColor="#ffff" />
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
