import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/config/AppNavigator";
import { AppProvider } from "./src/contexts/AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
