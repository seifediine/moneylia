import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  elevation: {
    elevation: 2,
    shadowColor: '#aaa',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 8,
  },
  paymentType: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12.5,
    textTransform: 'uppercase',
    lineHeight: 15,
    color: '#312e43',
  },
  paymentDetails: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: 'WorkaSans-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#a5a5aa',
  },
  amount: {
    fontFamily: 'WorkaSans-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#f83e5a',
  },
});
