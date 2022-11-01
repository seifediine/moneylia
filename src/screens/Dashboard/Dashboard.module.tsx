import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    backgroundColor: '#F8F4FF',
  },
  headerTitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 32,
    color: '#fff',
  },
  headerText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 14,
    color: '#fff',
  },
  container: {
    width: '100%',
    position: 'absolute',
    top: 100,
    left: 0,
    paddingHorizontal: 16,
  },
  cards: {
    marginTop: 24,
  },
  contributions: {
    fontFamily: 'Rubik-Medium',
    fontSize: 22,
    color: '#3a3b7b',
  },
  cardsContainer: {
    marginTop: 16,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
