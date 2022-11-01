import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import GetStarted from './src/screens/GetStarted/GetStarted';
import Tabs from './src/components/Tabs';
import { PaymentDetailsHeaderOptions } from './assets/data/screensOptions';
import PaymentDetails from './src/screens/PaymentDetails/PaymentDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetails}
          options={PaymentDetailsHeaderOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
