import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

const CTA = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.ctaContainer}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Tabs', { screen: 'Dashboard' })}
      >
        <Text style={styles.textButton}>Join for free</Text>
      </Pressable>
      <Pressable style={styles.findMore}>
        <Text style={styles.textFindMore}>Don't have SPID or CIE? Find out more</Text>
      </Pressable>
    </View>
  );
};

export default CTA;
