import { View, Text, Button } from "react-native";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Hello in Home Page</Text>
      <Button
        title="Go to Page 1"
        onPress={() => {
          navigation.navigate("Page1");
        }}
      />

      <Button
        title="Open Camera Component"
        onPress={() => {
          navigation.navigate("MyCamera");
        }}
      />

      <Button
        title="Open img PICker"
        onPress={() => {
          navigation.navigate("img");
        }}
      />
    </View>
  );
};
