import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerNotShown } from "./settings";
import Menu from "../menu/Menu";
import Map from "../map/Map";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={headerNotShown}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;