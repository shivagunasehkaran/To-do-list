import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColoursStyles';
import { FontFamily } from '../../assets/fonts/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text: {
    fontSize: 20,
    fontFamily: FontFamily.AVENIR_MEDIUM,
    color: ColourPalette.white,
  },
});
