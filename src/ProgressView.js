import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

import { useProps } from "./Context";

export default function AnimatedView({
  color: backgroundColor,
  onAnimationCompleted
}) {
  const { storyDuration: duration = 1000 } = useProps();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false
    }).start((a) => {
      if (a.finished && onAnimationCompleted) {
        onAnimationCompleted();
      }
    });
  }, []);

  return (
    <Animated.View
      style={{
        backgroundColor,
        flex: 1,
        width: progress.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "100%"]
        })
      }}
    ></Animated.View>
  );
}
