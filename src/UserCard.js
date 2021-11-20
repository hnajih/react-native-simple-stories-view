import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

export default function UserCard({ user, index, size = 80, onPress }) {
  const unread = user.stories ? user.stories.find((s) => !s.read) : false;
  return (
    <TouchableOpacity
      style={{ padding: 3, alignItems: "center" }}
      onPress={() => onPress(user, index)}
    >
      <Image
        source={{ uri: user.avatar }}
        style={{
          width: size,
          height: size,
          borderRadius: 100,
          margin: 2,
          backgroundColor: user.color || "gray",
          borderWidth: 2,
          borderColor: unread ? "blue" : "gray"
        }}
      />
      <Text>{user.name}</Text>
    </TouchableOpacity>
  );
}
