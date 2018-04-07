import React, { Component } from "react";
import { Animated, StyleSheet, Dimensions, View, Text } from "react-native";
import ButtomHeader from "../button-header";

class Header extends Component {
  state = {
    titleWidth: 0
  };

  render() {
    const { title, scrollOffset, offset, actionHeaderRight } = this.props;
    const screenWidth = Dimensions.get("window").width;

    return (
      <View>
        <View style={{
            backgroundColor: "#40a5f5",
            alignItems: "flex-end"
        }} >
            <ButtonHeader
                styles={{ marginTop: 30 }}
                iconName="ios-add"
                right
                onPress={actionHeaderRight}
            />
        </View>
        <Animated.View
          style={[
            styles.header,
            {
              paddingHorizontal: screenWidth * 0.05,
              width: screenWidth,
              height: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [60, 20],
                extrapolate: "clamp"
              })
            }
          ]}
        >
          <Animated.Text
            onLayout={e => {
              if (offset === 0 && this.state.titleWidth === 0) {
                const titleWidth = e.nativeEvent.layout.width;
                this.setState({ titleWidth });
              }
            }}
            style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [26, 20],
                extrapolate: "clamp"
              })
            }}
          >
            Flash Cards Udacity
          </Animated.Text>
          <Animated.View
            style={{
              width: scrollOffset.interpolate({
                inputRange: [0, 200],
                outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                extrapolate: "clamp"
              })
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#40a5f5",
    borderBottomWidth: 1,
    borderColor: "gainsboro",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 8
  }
});
