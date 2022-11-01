import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    position: 'relative',
    height: '100%',
  },
  mainSection: {
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: '#3a3b7b',
  },
});
