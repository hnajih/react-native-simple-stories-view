# react-native-simple-stories-view

## Getting started

`$ npm install react-native-simple-stories-view --save`

### Mostly automatic installation

`$ react-native link react-native-simple-stories-view`

## Demo

![Demo](https://s10.gifyu.com/images/ezgif-7-a8789811cb.gif)

## Usage

```javascript
import SimpleStoriesView from "react-native-simple-stories-view";

const users = [
  {
    _id: 1,
    name: "React Native",
    avatar: "https://placeimg.com/140/140/any",
    stories: [
      {
        type: "text",
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
    color: "aquamarine",
    stories: [
      {
        type: "text",
        fontSize: 30,
        read: true,
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

<SimpleStoriesView
  data={users}
  storyDuration={2000}
  activeProgressColor={"blue"}
  inactiveProgressColor={"gray"}
  renderAvatar={"top"}
  storyBackground={"cyan"}
  storyTextStyle={{ color: "red" }}
/>;
```

## Available Props

| name                  | default |                            description |
| --------------------- | :-----: | -------------------------------------: |
| data                  |   []    |       list of users with their stories |
| storyDuration         |  1000   |         story duration in milliseconds |
| activeProgressColor   | 'black' |       color of the active progress bar |
| inactiveProgressColor | 'gray ' |     color of the inactive progress bar |
| renderAvatar          |  'top'  |                   'top','bottom',false |
| storyBackground       | 'white' |                 story background color |
| storyTextStyle        |         | a style to apply the text of the story |
| renderStoryItem       |         |           render a custom story layout |
| renderHeaderItem      |         |            render a custom user layout |

## Custom rendering

```javascript
<SimpleStoriesView
  data={users}
  renderStoryItem={({ story, user, next }, index) => (
    <Pressable onPress={next}>
      <View
        key={index}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        <Text>{JSON.stringify(story)}</Text>
        <View style={{ height: 20 }} />
        <Text>{JSON.stringify(user)}</Text>
      </View>
    </Pressable>
  )}
  renderHeaderItem={({ user, read, show }, index) => (
    <Pressable style={{ padding: 3, alignItems: "center" }} onPress={show}>
      <Image
        source={{ uri: user.avatar }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          margin: 2,
          backgroundColor: user.color || "gray",
          borderWidth: 2,
          borderColor: read ? "gray" : "blue"
        }}
      />
      <Text>{user.name}</Text>
    </Pressable>
  )}
/>
```
