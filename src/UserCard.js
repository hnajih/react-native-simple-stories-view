import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { useProps } from "./Context";

export default function UserCard({
  user,
  index,
  size = 80,
  read = false,
  pressable = false,
  onPress
}) {
  const { activeProgressColor, inactiveProgressColor } = useProps();

  const avatar = (
    <View style={{ alignItems: "center", padding: 3 }}>
      <Image
        source={{ uri: user.avatar }}
        style={{
          width: size,
          height: size,
          borderRadius: 100,
          margin: 2,
          backgroundColor: user.color || "gray",
          borderWidth: pressable ? 2 : 0,
          borderColor: read ? inactiveProgressColor : activeProgressColor
        }}
      />
      <Text>{user.name}</Text>
    </View>
  );
  return pressable ? (
    <TouchableOpacity onPress={() => onPress(user, index)}>
      {avatar}
    </TouchableOpacity>
  ) : (
    avatar
  );
}
