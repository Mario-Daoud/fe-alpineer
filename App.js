import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/components/config/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
