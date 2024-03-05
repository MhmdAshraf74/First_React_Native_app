import { Badge, Button, Icon, LinearProgress } from "@rneui/themed";
import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native-web";

function Portfolio() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.Imagestyle}
            source={{
              uri: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Badge
            badgeStyle="white"
            status="success"
            containerStyle={{ position: "absolute", top: 80, left: 82 }}
          />
        </View>
        <Text style={styles.font1}>Mohamed Ashraf</Text>
        <Text>Front-end developer</Text>
        <View style={styles.social}>
          <Icon name="sc-facebook" type="evilicon" color="warning" size={30} />
          <Icon name="sc-linkedin" type="evilicon" color="warning" size={30} />
          <Icon name="sc-twitter" type="evilicon" color="warning" size={30} />
          <Icon name="sc-github" type="evilicon" color="warning" size={30} />
        </View>
        <Text numberOfLines={2}>
          ______________________________________________________________
        </Text>

        <view style={styles.personal}>
          <View style={styles.personlTitle}>
            <text style={styles.colorDiv}>Age</text>
            <text>25</text>
          </View>
          <View style={styles.personlTitle}>
            <text style={styles.colorDiv}>Language</text>
            <text>English</text>
          </View>
          <View style={styles.personlTitle}>
            <text style={styles.colorDiv}>Freelancer</text>
            <text>Available</text>
          </View>
          <View style={styles.personlTitle}>
            <text style={styles.colorDiv}>Address</text>
            <text>25 mokatam cairo</text>
          </View>
        </view>
        <Text numberOfLines={2}>
          ______________________________________________________________
        </Text>
        {/* , CSS, JavaScript, React, Redux, Node.js */}
        <View>
          <View>
            <text style={styles.font1}>Skills</text>
            <text>HTML</text>
            <LinearProgress
              value={0.8}
              variant="determinate"
              color="#ff5722"
              style={{ marginVertical: 10, height: 15, borderRadius: 10 }}
            />
            <text>CSS</text>
            <LinearProgress
              value={0.4}
              variant="determinate"
              color="#ff5722"
              style={{ marginVertical: 10, height: 15, borderRadius: 10 }}
            />
            <text>JavaScript</text>
            <LinearProgress
              value={0.6}
              variant="determinate"
              color="#ff5722"
              style={{ marginVertical: 10, height: 15, borderRadius: 10 }}
            />
            <text>React</text>
            <LinearProgress
              value={0.75}
              variant="determinate"
              color="#ff5722"
              style={{ marginVertical: 10, height: 15, borderRadius: 10 }}
            />
          </View>
          <View style={styles.personlTitle}>
            <text style={styles.colorDiv}>Experience</text>
            <text>2 years of experience</text>
          </View>
        </View>
        <Text numberOfLines={2}>
          ______________________________________________________________
        </Text>
        <Button color="warning" style={{ marginVertical: 15, width: "100%" }}>
          Download PDF
        </Button>
      </View>
    </ScrollView>
  );
}

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  Imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  font1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  personal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    lineHeight: "2",
  },
  colorDiv: {
    color: "#ffffff",
    backgroundColor: "#ff9800",
  },

  personlTitle: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent: "space-between",
  },
});
