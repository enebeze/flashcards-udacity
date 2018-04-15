import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 8,
    paddingVertical: 6,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0.5, height: 0.5 },
    elevation: 5
  },
  textTitle: {
    marginRight: 4,
    fontWeight: "900",
    color: "#2d3e4b"
  },
  containerQ: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 12
  },
  containerA: {
    flexDirection: "row",
    paddingHorizontal: 8
  }
});
