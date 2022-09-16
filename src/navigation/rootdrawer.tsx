import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./bottomTab";
import Profile from "../screens/Profile/Profile";
import ChangePassword from "../screens/changePassword/ChangePassword";
import CustomSidebarMenu from "./CustomSidebarMenu";


const Drawer = createDrawerNavigator();

const Rootdrawer = () =>{
    return(
        <Drawer.Navigator  drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen name="Dashboard" component={MyTabs} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Change PassWord" component={ChangePassword} />  
        </Drawer.Navigator>
    );
}

export default Rootdrawer;