import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/config/AppNavigator";
import { AppProvider } from "./AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
