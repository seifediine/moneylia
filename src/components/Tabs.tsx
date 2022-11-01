import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard/Dashboard';
import TaxPayments from '../screens/TaxPayments/TaxPayments';
import Extract from '../screens/Extract/Extract';
import Profile from '../screens/Profile/Profile';

import {
  DashboardHeaderOptions,
  TaxPaymentsHeaderOptions,
  ProfileHeaderOptions,
  ExtractHeaderOptions,
} from '../../assets/data/screensOptions';

import {
  TabHome,
  TabHomeFocused,
  TabPago,
  TabPagoFocused,
  TabExtract,
  TabExtractFocused,
  TabUser,
  TabUserFocused,
} from '../../assets/icons';

const Tab = createBottomTabNavigator();

const ActiveIconContainer = ({ children }: any) => {
  return <View style={styles.iconContainer}>{children}</View>;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Dashboard') {
            return focused ? (
              <ActiveIconContainer>
                <TabHomeFocused />
              </ActiveIconContainer>
            ) : (
              <TabHome />
            );
          } else if (route.name === 'PagoPA') {
            return focused ? (
              <ActiveIconContainer>
                <TabPagoFocused />
              </ActiveIconContainer>
            ) : (
              <TabPago />
            );
          } else if (route.name === 'Extract') {
            return focused ? (
              <ActiveIconContainer>
                <TabExtractFocused />
              </ActiveIconContainer>
            ) : (
              <TabExtract />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <ActiveIconContainer>
                <TabUserFocused />
              </ActiveIconContainer>
            ) : (
              <TabUser />
            );
          }
        },
        tabBarActiveTintColor: '#7476ed',
        tabBarLabelStyle: {
          fontFamily: 'Rubik-Regular',
          fontSize: 11,
        },
        tabBarStyle: {
          height: 50,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={DashboardHeaderOptions} />
      <Tab.Screen name="Extract" component={Extract} options={ExtractHeaderOptions} />
      <Tab.Screen name="PagoPA" component={TaxPayments} options={TaxPaymentsHeaderOptions} />
      <Tab.Screen name="Profile" component={Profile} options={ProfileHeaderOptions} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  iconContainer: {
    height: '100%',
    width: '60%',
    paddingVertical: 4,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#7476ed',
  },
});
