import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  value: string;
};

const PaySection = ({ value }: Props) => {
  return (
    <View style={[styles.btnSection, styles.elevation]}>
      <View style={styles.btnSectionHeader}>
        <Text style={styles.totalDue}>Total Due</Text>
        <Text style={styles.paymentAmount}>{value}</Text>
      </View>
      <Pressable style={styles.payButton}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </Pressable>
    </View>
  );
};

export default PaySection;

const styles = StyleSheet.create({
  btnSection: {
    width: '100%',
    height: 130,
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'space-between',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#aaa',
  },
  btnSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  totalDue: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: '#312e43',
  },
  paymentAmount: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 20,
    lineHeight: 24,
    color: '#f83e5a',
  },
  payButton: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#bf7ee6',
  },
  buttonText: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 18,
    lineHeight: 18,
    color: '#fff',
  },
});
