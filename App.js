import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppPro from './AppPro'; // Your Profile Screen
import HomeDashboard from './HomeDashboard'; // New Home Screen

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeDashboard} />
        <Drawer.Screen name="Profile" component={AppPro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
