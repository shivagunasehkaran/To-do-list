import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColoursStyles';
import { FontFamily } from '../../assets/fonts/Fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  textContainer: {
    height: 50,
    backgroundColor: ColourPalette.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: ColourPalette.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: ColourPalette.black,
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 15,
  },
  titleText: {
    margin: 15,
    fontSize: 20,
    fontFamily: FontFamily.AVENIR_MEDIUM,
    color: ColourPalette.black,
  },
  submitText: {
    margin: 10,
    fontSize: 20,
    fontFamily: FontFamily.AVENIR_MEDIUM,
    color: ColourPalette.white,
  },
  button: {
    backgroundColor: ColourPalette.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
