import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 180,
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#aaa',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 16,
    color: '#3a3b7b',
    marginLeft: 10,
  },
  cardContent: {
    flexDirection: 'row',
  },
  statTitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#6f6d7b',
  },
  statValue: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    color: '#3a3b7b',
  },
});
