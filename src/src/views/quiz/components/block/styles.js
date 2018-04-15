import { StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.primaryTextColor,
    fontWeight: "900",
    fontSize: 12,
    paddingBottom: 6
  },
  value: {
    color: colors.primaryDarkColor,
    fontWeight: "900"
  }
});
