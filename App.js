import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerScreen from "./screens/imagePicker";
import DropDown from "./screens/dropDown";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImagePickerScreen /> */}
      <DropDown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
