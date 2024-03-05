import { useNavigation } from "@react-navigation/native";
import { Button, Card, Icon, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

function Movies({navigation}) {
  const [movies, setmovies] = useState([]);
 

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6981d8c6279313baca5011208da2980c"
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.results);
        setmovies(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {movies.map((movie) => (
            <View key={movie.id} style={styles.container}>
              <Card>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={{ padding: 0 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                  }}
                />
                <View style={{padding:10}}>
                  <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
                </View>
                <Button
                  icon={
                    <Icon
                      name="code"
                      color="#ffffff"
                      iconStyle={{ marginRight: 10 }}
                    />
                  }
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  onPress={()=>{navigation.navigate('Details',{id:movie.id})
                  console.log(`from button : ${movie.id}`)  }
                }
                  title="Movie Details"
                />
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bceaf0",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 25,
  },
});
