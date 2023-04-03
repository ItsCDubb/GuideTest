import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    margin: 5,
    paddingTop: 3,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    backgroundColor: "lightgrey",
  },
  image: {
    aspectRatio: 1,
    width: 100,
    padding: 1,
    width: "50%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "black",
  },
});

export default styles;
