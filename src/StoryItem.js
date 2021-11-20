import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import UserCard from "./UserCard";

export default function StoryItem({ story, user, width, onPress }) {
  const {
    type,
    backgroundColor = user.color,
    read,
    content,
    fontSize = 22
  } = story;
  return (
    <Pressable onPress={onPress}>
      <SafeAreaView
        style={[
          {
            backgroundColor,
            width,
            flex: 1
          }
        ]}
      >
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize }}>{content}</Text>
        </View>

        <View style={{ padding: 10, alignSelf: "center" }}>
          <UserCard user={user} size={60} />
        </View>
      </SafeAreaView>
    </Pressable>
  );
}
