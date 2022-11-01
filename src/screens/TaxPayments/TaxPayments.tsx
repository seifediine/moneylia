import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListHeader from './components/ListHeader';
import Card from './components/Card';
import { payments } from '../../../assets/data/payments';
import { styles } from './TaxPayments.module';

const TaxPayments = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.screen}>
      <ListHeader />
      <ScrollView style={styles.scroll}>
        {payments.map((item) => (
          <Card key={item.id} {...item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TaxPayments;
