import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import UserCard from "./UserCard";
import { useProps } from "./Context";

export default function StoryItem({ story, user, width, onPress }) {
  const {
    type,
    backgroundColor = user.color,
    read,
    content,
  } = story;

  const { renderAvatar, storyBackground, storyTextStyle } = useProps();

  const avatar = (
    <View style={{ padding: 20, alignSelf: "center" }}>
      <UserCard user={user} size={60} />
    </View>
  );
  return (
    <Pressable onPress={onPress}>
      <SafeAreaView
        style={[
          {
            backgroundColor: backgroundColor || storyBackground,
            width,
            flex: 1
          }
        ]}
      >
        {renderAvatar == "top" && avatar}
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={[{ fontSize: 25 }, storyTextStyle]}>{content}</Text>
        </View>

        {renderAvatar == "bottom" && avatar}
      </SafeAreaView>
    </Pressable>
  );
}
