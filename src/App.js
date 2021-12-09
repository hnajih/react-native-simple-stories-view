import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Stories from "./Stories";
import { useProps } from "./Context";

export default function App() {
  const [index, setindex] = useState();
  const [modalVisible, setmodalVisible] = useState(false);

  const { data = [] } = useProps();

  const onScrollEnd = (direction) => {
    if (direction == "next") {
      setindex(index < data.length - 1 ? index + 1 : null);
    } else {
      setindex(index > 0 ? index - 1 : null);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "cyan"
      }}
    >
      <Header data={data} onPress={(user, index) => setindex(index)} />
      {typeof index == "number" && (
        <Stories
          item={data[index]}
          onScrollEnd={onScrollEnd}
          onCancel={() => setindex(null)}
        />
      )}
      {/* {typeof index == "number" && <Text>{JSON.stringify(users[index])}</Text>} */}
      {/* <Text>{index}</Text> */}
    </View>
  );
}
