import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Pressable
} from "react-native";

import StoryItem from "./StoryItem";

export default function Stories({ item, onScrollEnd, onCancel }) {
  const { stories: data, ...user } = item;
  const [index, setindex] = useState(0);
  const scroll = useRef();
  const { width: size } = useWindowDimensions();

  const onScroll = (event) => {
    const i = event.nativeEvent.contentOffset.x / size;
    setindex(i);
  };

  const next = (event) => {
    const i = event.nativeEvent.locationX > size / 2 ? index + 1 : index - 1;
    if (i < data.length && i >= 0) {
      setindex(i);
      scroll.current.scrollTo({ x: i * size });
    } else {
      setindex(0);
      onScrollEnd(i < 0 ? "previous" : "next");
    }
  };

  return (
    <Modal
      visible
      animationType={"slide"}
      // transparent={true}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        this.setModalVisible(!modalVisible);
      }}
    >
      <ScrollView
        ref={scroll}
        horizontal
        scrollEnabled={false}
        decelerationRate={"fast"}
        disableIntervalMomentum
        snapToInterval={size}
        scrollEventThrottle={500}
        showsHorizontalScrollIndicator={false}
        indicatorStyle={"black"}
        onScroll={onScroll}
      >
        {data.map((story, index) => (
          <StoryItem
            key={index}
            story={story}
            user={user}
            width={size}
            onPress={next}
          />
        ))}
      </ScrollView>

      <SafeAreaView style={{ position: "absolute", width: size }}>
        <View style={{ flexDirection: "row" }}>
          {data.map((item, i) => (
            <View
              key={i}
              style={{
                flex: 1,
                height: 5,
                backgroundColor: `#${i == index ? "000" : "fff"}7`,
                margin: 4
              }}
            />
          ))}
        </View>
        <Pressable
          style={{
            alignSelf: "flex-end"
          }}
          onPress={onCancel}
        >
          <Text style={{ fontSize: 30, padding: 10, fontFamily: "Arial" }}>
            X
          </Text>
        </Pressable>
      </SafeAreaView>

      {/* <Text>{JSON.stringify(data)}</Text> */}
    </Modal>
  );
}
