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

export default function Header({ data, onPress }) {
  const renderItem = ({ item, index }) => (
    <UserCard user={item} index={index} onPress={onPress} />
  );

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
