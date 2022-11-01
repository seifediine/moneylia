import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  main_view: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  header: {},
  image: {
    width: 335,
    height: 335,
  },
  heading: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 32,
    lineHeight: 38,
    color: '#3a3b7b',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#6f6d7b',
    textAlign: 'center',
    // letterSpacing: -0.5,
  },
  ctaContainer: {
    marginTop: 60,
  },
  button: {
    backgroundColor: '#7476ED',
    borderRadius: 4,
    paddingHorizontal: 75,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  findMore: {
    marginTop: 24,
  },
  textFindMore: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    color: '#3a3b7b',
    textDecorationLine: 'underline',
  },
});
