import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 32,
    color: colors.secondaryTextColor,
    fontWeight: "900",
    marginBottom: 20
  },
  description: {
    color: colors.primaryTextColor,
    fontWeight: "900",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 28
  },
  smallTitle: {
    color: colors.secondaryTextColor,
    fontWeight: "900",
    fontSize: 18,
    paddingBottom: 10
  },
  smallDescription: {
    color: colors.primaryTextColor,
    fontWeight: "900",
    paddingBottom: 10
  }
});
