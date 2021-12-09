/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import SimpleStoriesView from 'react-native-simple-stories-view';

const users = [
  {
    _id: 1,
    name: 'React Native',
    avatar: 'https://placeimg.com/140/140/any',
    stories: [
      {
        type: 'text',
        backgroundColor: 'red',
        read: true,
        content:
          'Nulla nulla officia duis sit labore amet ea officia deserunt.',
      },
      {
        type: 'text',
        backgroundColor: 'green',
        read: true,
        content: 'Occaecat ipsum do laborum eiusmod anim.',
      },
    ],
  },
  {
    _id: 2,
    name: 'React',
    avatar: 'https://placeimg.com/140/140/any',
    color: 'blue',
    stories: [
      {
        type: 'text',
        backgroundColor: 'gray',
        fontSize: 30,
        read: true,
        content:
          'Nulla nulla officia duis sit labore amet ea officia deserunt.',
      },
      {
        type: 'text',
        read: false,
        content: 'Occaecat ipsum do laborum eiusmod anim.',
      },
    ],
  },
];

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SimpleStoriesView
          data={users}
          storyDuration={2000}
          activeProgressColor={'blue'}
          inactiveProgressColor={'gray'}
          renderStoryItem={({story, user, next}, index) => (
            <Pressable onPress={next}>
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Text>{JSON.stringify(story)}</Text>
                <View style={{height: 20}} />
                <Text>{JSON.stringify(user)}</Text>
              </View>
            </Pressable>
          )}
          renderHeaderItem={({user,read, show}, index) => (
            <Pressable
              style={{padding: 3, alignItems: 'center'}}
              onPress={show}>
              <Image
                source={{uri: user.avatar}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  margin: 2,
                  backgroundColor: user.color || 'gray',
                  borderWidth: 2,
                  borderColor: read ? 'gray' : 'blue',
                }}
              />
              {/* <Text>{user.name}</Text> */}
            </Pressable>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
