import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 125,
    width: 165,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#aaa',
  },
  title: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#83828e',
  },
  value: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
  },
});
