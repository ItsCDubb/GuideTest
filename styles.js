import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  dataContainer: {
    flex: 1,
    alignItems: "center",
    width: "79%",
    marginTop: 10,
    margin: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 15,
    backgroundColor: "#e0e0e0",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    width: "65%",
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: "#333",
  },
});

export default styles;
