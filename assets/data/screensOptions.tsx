import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Logo } from '../images';
import { Chat, Back } from '../icons';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Logo width="28" height="28" />
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const DashboardHeaderOptions = {
  headerStyle: {
    backgroundColor: '#7476ed',
  },
  headerTitle: () => <NavBar />,
  headerShadowVisible: false,
};

export const TaxPaymentsHeaderOptions = {
  headerStyle: {
    backgroundColor: '#BF7EE6',
  },
  headerTitle: () => <NavBar />,
  headerShadowVisible: false,
};

export const PaymentDetailsHeaderOptions = {
  title: 'Payment Details',
  headerTitleStyle: {
    fontFamily: 'WorkSans-Regular',
    color: '#fff',
  },
  headerStyle: {
    backgroundColor: '#BF7EE6',
    alignItems: 'center',
  },
  headerBackImage: <Back />,
  headerShadowVisible: false,
};

export const ProfileHeaderOptions = {
  headerStyle: {
    backgroundColor: '#3A3B7B',
  },
  headerTitle: () => <NavBar />,
  headerShadowVisible: false,
};

export const ExtractHeaderOptions = {
  headerStyle: {
    backgroundColor: '#64C2DB',
  },
  headerTitle: () => <NavBar />,
  headerShadowVisible: false,
};
