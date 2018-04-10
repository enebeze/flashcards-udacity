import { StyleSheet } from "react-native";

export default StyleSheet.create({
  labelDeckTitle: {
    borderWidth: 2,
    borderRadius: 18,
    padding: 8,
    fontWeight: "900",
    borderColor: "#b5a1bd",
    color: "#8846a7"
  },
  labelCount: {
    fontWeight: "900",
    color: "#8846a7",
    padding: 8
  },
  labelTextAnswerOrQuestion: {
    marginBottom: 40,
    marginTop: 30,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "900",
    color: "#2d3c47"
  },
  textBtnShowAnswerOrQuestion: {
    textAlign: "center",
    fontWeight: "900",
    color: "#8846a7",
    fontSize: 18
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: 20
  }
});
