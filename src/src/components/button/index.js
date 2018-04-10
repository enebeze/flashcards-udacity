import React, { Component } from "react";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";

type size = "small" | "medium" | "big";

type ButtonProps = {
  loading: boolean,
  text: string,
  color: string,
  colorText: string,
  marginLeft: boolean,
  marginRight: boolean,
  disabled: boolean,
  size: size,
  onPress: () => void
};

const sizeValue = {
  small: 20,
  medium: 30,
  big: 40
}

class Button extends Component<ButtonProps> {
  static defaultProps = {
    loading: false,
    text: "",
    color: "#e3e7eb",
    colorText: "#9642a8",
    marginLeft: false,
    marginRight: false,
    size: "medium"
  };

  render() {
    const { loading, text, color, colorText, marginLeft, marginRight, onPress, size } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          paddingVertical: sizeValue[size],
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
          marginRight: marginRight ? 8 : 0,
          marginLeft: marginLeft ? 8 : 0,
          borderRadius: 5
        }}
      >
        {loading && <ActivityIndicator size="small" color={colorText} />}

        {!loading && (
          <Text style={{ color: colorText, fontWeight: "900", fontSize: size === "big" ? 20 : 14 }}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Button;
