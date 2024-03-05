import { Button, Card, Icon, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

function MovieDetail({ navigation, route }) {
  const movieID = route.params.id;
  const [movie, setmovie] = useState({});
  // alert((movieID));

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=6981d8c6279313baca5011208da2980c`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setmovie(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movie]);

  return (
    <>
      <View style={styles.container}>
        <Card>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Divider />
          <View style={styles.div2}>
            <Card.Image
              style={styles.imgDiv}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
              }}
            />
            <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
          </View>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Add to Favourit"
            icon={
              <Icon
                name="heart"
                type="evilicon"
                color="#fb1b0a"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
        </Card>
      </View>
    </>
  );
}

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bceaf0",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 25,
  },
  imgDiv: {
    width: 200,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  div2: {
    flexDirection: "row",
    padding: 10,
    textAlign: "center",
  },
});
