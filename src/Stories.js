import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Pressable,
  BackHandler,
  Animated
} from "react-native";
import ProgressView from "./ProgressView";
import StoryItem from "./StoryItem";
import { useProps } from "./Context";

export default function Stories({ item, onScrollEnd, onCancel }) {
  const { stories: data, ...user } = item;
  const [index, setindex] = useState(0);
  // const [index, setindex] = useState(data.findIndex((s) => !s.read) || 0);
  const scroll = useRef();
  const { width: size } = useWindowDimensions();
  const progressAnim = useRef(new Animated.Value(0)).current;
  const { renderStoryItem, activeProgressColor, inactiveProgressColor } =
    useProps();

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(index);
  //     scroll.current.scrollTo({ x: index * size });
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     onCancel();
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  const onScroll = (event) => {
    const i = event.nativeEvent.contentOffset.x / size;
    setindex(Math.round(i));
  };

  const next = (event) => {
    const i = event
      ? event.nativeEvent.locationX > size / 2
        ? index + 1
        : index - 1
      : index + 1;
    if (i < data.length && i >= 0) {
      setindex(i);
      scroll.current.scrollTo({ x: i * size });
    } else {
      setindex(0);
      onScrollEnd(i < 0 ? "previous" : "next");
    }
  };

  return (
    <Modal visible animationType={"slide"}>
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
        {data.map((story, index) =>
          renderStoryItem ? (
            renderStoryItem({ story, user, next }, index)
          ) : (
            <StoryItem
              key={index}
              story={story}
              user={user}
              width={size}
              onPress={next}
            />
          )
        )}
      </ScrollView>

      <SafeAreaView style={{ position: "absolute", width: size }}>
        <View style={{ flexDirection: "row" }}>
          {data.map((item, i) => (
            <View
              key={i}
              style={{
                flex: 1,
                height: 5,
                backgroundColor:
                  i < index ? activeProgressColor : inactiveProgressColor,
                margin: 4
              }}
            >
              {i == index && (
                <ProgressView
                  color={activeProgressColor}
                  onAnimationCompleted={() => next()}
                />
              )}
            </View>
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
