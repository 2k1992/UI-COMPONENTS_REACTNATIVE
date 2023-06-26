import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerScreen from "./screens/imagePicker";
import DropDown from "./screens/dropDown";
import LinearProgressBar from "./screens/ProgressBar/linearProgressBar";
import CircularProgressbar from "./screens/ProgressBar/circularProgressBar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImagePickerScreen /> */}
      {/* <DropDown /> */}
      {/* <LinearProgressBar /> */}
      <CircularProgressbar />
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
