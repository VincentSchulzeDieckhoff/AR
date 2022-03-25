import customColors from "../constants/customColors";
import { Dimensions, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 280
  },
  homeItem: {
    padding: 15,
    marginVertical: 20,
    backgroundColor: customColors.mainColor,
    //borderWidth: 5,
    //borderRadius: 10,
    //borderColor: customColors.mainColor,
    fontSize: 50,
    justifyContent: "space-around",
  },
  homeItemText: {
    fontSize: 22,
    fontWeight: "bold",
    width: "100%",
    color: "white"
  },
  listHeadingContainer: {
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderColor: customColors.mainColor,
    margin: 20,
    width: "90%",
  },
  listHeadingText: {
    marginVertical: 10,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 10,
  },
  list: {
    width: "100%",
  },
  button: {
    borderRadius: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: customColors.mainColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navButton: {
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  buttonExtraText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  slideScrollView: {
    flexDirection: "row",
    width: "100%",
  },
  impressionContainer: {
    //borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignItems: "center",
    // margin: 10,
    borderColor: customColors.thirdColor,
  },
  impressionImages: {
    width: "100%",
    height: 333,
    margin: 10,
    borderRadius: 20,
    width: 300,
  },
  item: {
    padding: 10,
    justifyContent: "center",
  },
  tourview: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: 333,
    margin: 10,
    borderRadius: 20,
    borderColor: customColors.accentColor,
    //borderWidth: 5,
  },
  infoView: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
  },
  infotext: {
    width: Dimensions.get("window").width,
    fontSize: 16,
    textAlign: "center",
    //borderRadius: 5,
    backgroundColor: customColors.mainColor,
    //borderWidth: 3,
    //borderColor: customColors.accentColor,
    //margin: 10,
    padding: 10,
    color: "white"
  },
  body: {
    marginVertical: 20,
    marginHorizontal: 70,
  },
  listItemContainer: {
    flexDirection: "row",
    width: "120%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionTextBox: {
    margin: 10,
    textAlign: "center",
  }, 
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    //borderRadius: 5,
    backgroundColor: customColors.mainColor,
    //borderWidth: 3,
    //borderColor: customColors.accentColor,
    //margin: 10,
    padding: 10,
    paddingHorizontal: 20,
    color: "white",
  },
});
