import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

import UserCard from "./UserCard";
import { useProps } from "./Context";

export default function Header({ data, onPress }) {
  const { renderHeaderItem } = useProps();
  const renderItem = ({ item: user, index }) => {
    const read = !user.stories.find((s) => !s.read);
    return renderHeaderItem ? (
      renderHeaderItem({ user, read, show: onPress })
    ) : (
      <UserCard user={user} read={read} index={index} onPress={onPress} />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <FlatList
        horizontal
        style={{ padding: 5 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}
