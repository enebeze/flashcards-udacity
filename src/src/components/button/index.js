import React, { Component } from "react";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";

type ButtonProps = {
  loading: boolean,
  text: string,
  color: string,
  colorText: string,
  marginLeft: boolean,
  marginRight: boolean,
  disabled: boolean,
  onPress: () => void
};

class Button extends Component<ButtonProps> {
  static defaultProps = {
    loading: false,
    text: "",
    color: "#e3e7eb",
    colorText: "#9642a8",
    marginLeft: false,
    marginRight: false
  };

  render() {
    const { loading, text, color, colorText, marginLeft, marginRight, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          paddingVertical: 30,
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
          <Text style={{ color: colorText, fontWeight: "900" }}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Button;
