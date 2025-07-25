import { Button, Image, ScrollView, Text, TextInput, Alert } from "react-native";
import check from "../assets/images/check.png"

export default function RootLayout() {
  return (
    <ScrollView>
      <Image source={check} />
      <Text>Olá Mundo!</Text> 
      <TextInput />   
      <Button
      title="+"
      onPress={() => Alert.alert("Oie")}
      color={"blue"}
      />  
    </ScrollView>
  )
}
