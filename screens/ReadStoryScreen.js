import * as React from "react";
import { Header } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,

        }}
      >
        <Header
          backgroundColor={"#FFB6C1"}
          centerComponent={{
            text: "Story Hub",
            style: { fontSize: 28, color: "#fff" },
          }}
        />
        <Text>Read Story</Text>
      </View>
    );
  }
}