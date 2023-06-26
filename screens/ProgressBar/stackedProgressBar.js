import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

const StackedProgressBar = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const handlePress1 = () => {
    if (progress1 === 1) {
      return; // Already at 100%, do nothing
    }
    setProgress1((prevProgress) => {
      const newProgress = prevProgress + 0.1;
      return newProgress > 1 ? 1 : newProgress; // Limit progress to 100%
    });
  };

  const handlePress2 = () => {
    if (progress2 === 1) {
      return; // Already at 100%, do nothing
    }
    setProgress2((prevProgress) => {
      const newProgress = prevProgress + 0.1;
      return newProgress > 1 ? 1 : newProgress; // Limit progress to 100%
    });
  };

  return (
    <View>
      <ProgressCircle
        style={{ height: 200 }}
        progress={progress1}
        progressColor={"rgb(134, 65, 244)"}
      />
      <ProgressCircle
        style={{ height: 200, marginTop: -200, opacity: 0.5 }}
        progress={progress2}
        progressColor={"rgb(244, 180, 65)"}
      />
      <Button onPress={handlePress1} title="Increase progress 1" />
      <Button onPress={handlePress2} title="Increase progress 2" />
      <Text>Progress 1: {(progress1 * 100).toFixed(0)}%</Text>
      <Text>Progress 2: {(progress2 * 100).toFixed(0)}%</Text>
    </View>
  );
};

export default StackedProgressBar;
