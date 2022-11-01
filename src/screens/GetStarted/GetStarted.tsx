import React from 'react';
import { View, Text } from 'react-native';
import { Woman } from '../../../assets/images';
import CTA from './components/CTA';
import { styles } from './styles';

const GetStarted = () => {
  return (
    <View style={styles.main_view}>
      <View style={styles.header}>
        <Woman />
        <View>
          <Text style={styles.heading}>Save your money</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis erat a sit.
          </Text>
        </View>
      </View>
      <CTA />
    </View>
  );
};

export default GetStarted;
