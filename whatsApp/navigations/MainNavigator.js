import ChatSettings from "../screens/ChatSettings";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatListScreen from "../screens/ChatListScreen";
import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="chatbubble-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="settings-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="ChatSettings" component={ChatSettings} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
