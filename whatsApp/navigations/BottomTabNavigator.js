import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatListScreen from "../screens/ChatListScreen";
import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";

const BottomTabNavigator = () => {
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

export default BottomTabNavigator;
