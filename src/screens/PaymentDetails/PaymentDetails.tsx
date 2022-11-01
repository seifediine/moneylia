import React from 'react';
import { View, Text } from 'react-native';
import { PagoPA } from '../../../assets/images';
import Section from './components/Section';
import PaySection from './components/PaySection';
import { styles } from './PaymentDetails.module';

const PaymentDetails = ({ route }: { route: any }) => {
  const { causal, expiryDate, amount, creditor, creditorCode, noticeCode } = route.params;
  console.log(route.params);
  return (
    <View style={styles.screen}>
      <View style={styles.mainSection}>
        <View style={styles.header}>
          <Text style={styles.heading}>Payment Notice</Text>
          <PagoPA />
        </View>
        <View>
          <Section title="Creditor" value={creditor} />
          <Section title="Causal" value={causal} />
          <Section title="Expiry Date" value={expiryDate} />
          <Section title="Creditor Tax Code" value={creditorCode} />
          <Section title="Notice Code" value={noticeCode} />
        </View>
      </View>
      <PaySection value={amount} />
    </View>
  );
};

export default PaymentDetails;
