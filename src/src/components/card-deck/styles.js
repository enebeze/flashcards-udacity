import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "900",
    fontSize: 22,
    color: colors.secondaryTextColor
  },

  card: {
    fontWeight: "900",
    fontSize: 18,
    color: colors.primaryTextColor
  }
});
