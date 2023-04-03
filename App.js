import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useMemo, useState } from "react";
import styles from "./styles";

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useMemo(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=50", {
      method: "GET",
      headers: {
        "app-id": "642aeec4b7c1602dfffa029f",
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
        data={response ? response.data : []}
        renderItem={({ item }) => (
          <>
            <View style={styles.dataContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.picture }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  {item.firstName} {item.lastName}
                </Text>
              </View>
            </View>
          </>
        )}
        pagingEnabled
        numColumns={2}
        showsVerticalScrollIndicator={false}
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
