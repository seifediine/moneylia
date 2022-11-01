import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Card.module';

const Card = ({ icon, title, value }) => {
  return (
    <View style={[styles.card, styles.elevation]}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color: value === 'Unavailable' ? '#F83E5A' : '#3A3B7B' }]}>
        {value}
      </Text>
    </View>
  );
};

export default Card;
