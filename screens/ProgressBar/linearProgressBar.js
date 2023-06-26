import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";

const LinearProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handlePress = () => {
    if (progress === 1) {
      return; // Already at 100%, do nothing
    }
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 0.1;
      return newProgress > 1 ? 1 : newProgress; // Limit progress to 100%
    });
  };

  return (
    <View>
      <ProgressBar progress={progress} width={200} height={20} />
      <Button onPress={handlePress} title="Increase progress" />
      <Text>Progress: {(progress * 100).toFixed(0)}%</Text>
    </View>
  );
};

export default LinearProgressBar;
