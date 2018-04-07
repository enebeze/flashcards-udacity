import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';

const Button = ({ loading, onPress, text, color }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: "30%",
      backgroundColor: color,
      alignItems: "center",
      paddingVertical: 12,
      borderRadius: 5,
      marginTop: 16
    }}
  >
    {loading && (
      <ActivityIndicator size="small" color="#479484" />
    )}

    {!loading && <Text style={{ color: "#fff", fontWeight: "bold" }}>{text}</Text>}
  </TouchableOpacity>
);

export default Button;