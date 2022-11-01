import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { PagoPA } from '../../../../assets/images';
import { ChevronRight } from '../../../../assets/icons';
import { styles } from './Card.module';
import { useNavigation } from '@react-navigation/native';

type Props = {
  causal: string;
  expiryDate: string;
  amount: string;
  creditor: string;
  creditorCode: string;
  noticeCode: string;
};

const Card = ({ causal, expiryDate, amount, creditor, creditorCode, noticeCode }: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('PaymentDetails', {
          causal: causal,
          expiryDate: expiryDate,
          amount: amount,
          creditor: creditor,
          creditorCode: creditorCode,
          noticeCode: noticeCode,
        })
      }
      style={[styles.card, styles.elevation]}
    >
      <PagoPA />
      <View style={styles.cardContent}>
        <Text style={styles.paymentType}>{causal}</Text>
        <View style={styles.paymentDetails}>
          <Text style={styles.date}>{expiryDate}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
      <ChevronRight />
    </Pressable>
  );
};

export default Card;
