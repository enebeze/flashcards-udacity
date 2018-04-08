import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { StyleObj as Style } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type ButtonHeaderProps = {
  iconName: string,
  left: boolean,
  right: boolean,
  styles?: Style,
  onPress: () => void
}

class ButtonHeader extends Component<ButtonHeaderProps> {
  static defaultProps = {
    iconName: "ios-arrow-back",
    left: false,
    right: false,
  }
  render() {
    const { iconName, left, right, styles, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles} >
        <Ionicons
          size={28}
          name={iconName}
          style={left ? { marginLeft: 12 } : { marginRight: 12 }}
          color="#fff"
        />
      </TouchableOpacity>
    )
  }
}

export default ButtonHeader;