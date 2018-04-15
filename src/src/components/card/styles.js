import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 6,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0.5, height: 0.5 },
    flexDirection: "row",
    paddingRight: 10,
    elevation: 2 // For android
  },
  viewBarraColorLeft: {
    width: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 6
  }
});
