import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Stories from "./Stories";
// const data = [
//   {
//     type: "text",
//     user: {
//       _id: 1,
//       name: "React Native",
//       avatar: "https://placeimg.com/140/140/any"
//     },
//     backgroundColor: "red"
//   },
//   {
//     type: "text",
//     user: {
//       _id: 2,
//       name: "React Native",
//       avatar: "https://placeimg.com/140/140/any"
//     },
//     backgroundColor: "green"
//   }
// ];

const users = [
  {
    _id: 1,
    name: "React Native",
    avatar: "https://placeimg.com/140/140/any",
    stories: [
      {
        type: "text",
        backgroundColor: "red",
        read: true,
        content: "Nulla nulla officia duis sit labore amet ea officia deserunt."
      },
      {
        type: "text",
        backgroundColor: "green",
        read: true,
        content: "Occaecat ipsum do laborum eiusmod anim."
      }
    ]
  },
  {
    _id: 2,
    name: "React",
    avatar: "https://placeimg.com/140/140/any",
    color: "blue",
    stories: [
      {
        type: "text",
        backgroundColor: "gray",
        fontSize: 30,
        read: false,
        content: "Nulla nulla officia duis sit labore amet ea officia deserunt."
      },
      {
        type: "text",
        read: false,
        content: "Occaecat ipsum do laborum eiusmod anim."
      }
    ]
  }
];

export default function App() {
  const [index, setindex] = useState();
  const [modalVisible, setmodalVisible] = useState(false);

  const onScrollEnd = (direction) => {
    if (direction == "next") {
      setindex(index < users.length - 1 ? index + 1 : null);
    } else {
      setindex(index > 0 ? index - 1 : null);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "cyan"
        // position: "absolute",
        // ...StyleSheet.absoluteFill
        // justifyContent: "center",
        // alignItems: "center"
      }}
    >
      <Header data={users} onPress={(user, index) => setindex(index)} />
      {typeof index == "number" && (
        <Stories
          item={users[index]}
          onScrollEnd={onScrollEnd}
          onCancel={() => setindex(null)}
        />
      )}
      {/* {typeof index == "number" && <Text>{JSON.stringify(users[index])}</Text>} */}
      {/* <Text>{index}</Text> */}
    </View>
  );
}
