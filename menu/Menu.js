import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          blurRadius={10}
          source={require("../assets/images/europe.jpg")}
        />
        <Text style={styles.headerText}>GeoExplora</Text>
      </View>
      <View style={styles.menuOptionsContainer}>
        <View style={styles.mapOption}>
          <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => { navigation.navigate("Map")}}>
            <Image
              style={styles.mapImage}
              blurRadius={10}
              source={require("../assets/images/map.jpg")}
            />
            <Text style={styles.mapImageText}>World Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: "30%",
  },
  headerImage: {
    flex: 1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    zIndex: 10,
    left: 25,
    bottom: 10,
    color: "white",
  },
  menuOptionsContainer: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
  },
  mapOption: {
    width: "100%",
    height: "20%",
  },
  mapImage: {
    flex: 1,
    borderRadius: 30,
  },
  mapImageText: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    left: 5,
    bottom: 10,
  },
});

export default Menu;
