import { StyleSheet, Platform } from "react-native";

const isIPhone = Platform.OS === "ios";

export default StyleSheet.create({
  container: {
    marginLeft: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 12,
    color:  '#7c8a98',
    paddingBottom: isIPhone ? 5 : 0,
    marginBottom: 0,
    fontWeight: "800"
  },
  field: {
    fontWeight: isIPhone ? "500" : "400",
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecee',
    fontSize: 15,
    fontWeight: "600",
    paddingBottom: 6,
    paddingTop: 0,
    paddingLeft: 0,
    color: '#2d3e4b'
  }
});
