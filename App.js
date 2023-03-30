import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=50", {
      method: "GET",
      headers: {
        "app-id": "625ecee6e7479da9b1114e8c",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" />;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    console.log(response);
    return (
      <FlatList
        data={response}
        renderItem={(item) => (
          <>
            <Image source={{ uri: picture }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{firstName}</Text>
              <Text style={styles.text}>{lastName}</Text>
            </View>
          </>
        )}
        pagingEnabled
        numColumns={2}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {getContent()}
    </View>
  );
}
