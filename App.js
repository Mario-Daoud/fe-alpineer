import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/config/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
