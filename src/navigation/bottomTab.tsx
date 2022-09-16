import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Support from "../screens/Support/Support";


const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="users" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <Icon name="bell" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
 export default MyTabs; 