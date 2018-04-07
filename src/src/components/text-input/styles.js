import { StyleSheet, Platform } from "react-native";

const isIPhone = Platform.OS === "ios";

export default StyleSheet.create({
  container: {
    marginLeft: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 12,
    color: '#7c8a98',
    paddingBottom: isIPhone ? 5 : 0,
    marginBottom: 0,
    fontWeight: "600"
  },
  field: {
    fontWeight: isIPhone ? "500" : "400",
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecee',
    fontSize: 14,
    paddingBottom: 5,
    paddingTop: 0,
    paddingLeft: 0,
    color: '#004282'
  }
});
