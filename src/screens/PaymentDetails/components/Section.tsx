import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Section.module';

type Props = {
  title: string;
  value: string;
};

const Section = ({ title, value }: Props) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Section;
