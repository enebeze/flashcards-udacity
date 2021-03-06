import React, { Component } from "react";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";

import styles from "./styles";
import colors from "../../styles/colors";

type size = "smaller" | "small" | "medium" | "big";

type ButtonProps = {
  loading: boolean,
  text: string,
  color: string,
  colorText: string,
  marginLeft: boolean,
  marginRight: boolean,
  size: size,
  onPress: () => void
};

const sizeValue = {
  smaller: 10,
  small: 20,
  medium: 30,
  big: 40
};

class Button extends Component<ButtonProps> {
  static defaultProps = {
    loading: false,
    text: "",
    color: colors.secondaryColor ,
    colorText: colors.primaryColor,
    marginLeft: false,
    marginRight: false,
    size: "medium"
  };

  render() {
    const {
      loading,
      text,
      color,
      colorText,
      marginLeft,
      marginRight,
      onPress,
      size
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: color,
            paddingVertical: sizeValue[size],
            marginRight: marginRight ? 8 : 0,
            marginLeft: marginLeft ? 8 : 0
          }
        ]}
      >
        {loading && <ActivityIndicator size="small" color={colorText} />}

        {!loading && (
          <Text
            style={{
              color: colorText,
              fontWeight: "900",
              fontSize: size === "big" ? 20 : 12
            }}
          >
            {text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Button;
