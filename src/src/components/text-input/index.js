import React, { Component } from "react";
import { View, Text, TextInput, KeyboardType } from "react-native";

import styles from "./styles";

type TextInputProps = {
  title: String,
  value: String,
  flex: Boolean,
  noEdit: Boolean,
  maxLength?: Number,
  keyboardType?: KeyboardType,
  autoCapitalize?: "none" | "sentences" | "words" | "characters",
  onChangeText: Function,
  secureTextEntry?: boolean
};

export default class MyTextInput extends Component<TextInputProps> {
  static defaultProps = {
    maxLength: 400,
    secureTextEntry: false
  };

  render() {
    const {
      title,
      value,
      flex,
      noEdit,
      onChangeText,
      maxLength,
      keyboardType,
      autoCapitalize,
      secureTextEntry
    } = this.props;

    return (
      <View style={[styles.container, { flex: flex ? 1 : 0 }]}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          maxLength={maxLength}
          underlineColorAndroid="#fff"
          editable={!noEdit}
          style={styles.field}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}
