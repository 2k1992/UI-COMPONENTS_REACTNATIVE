import React from "react";
import { View, Text } from "react-native";
import Button from "./Button"; // Import the reusable Button component

const comp_screen = () => {
  const handleLogout = () => {
    // Add the logic to handle the logout action
    console.log("Logging out...");
  };

  return (
    <View>
      <Text>Welcome to Profile Screen</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
};

export default comp_screen;
