import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../globals/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: responsiveHeight(55),
    width: responsiveWidth(100),
    resizeMode: 'cover',
  },

  //?===========style for button and tailer are define below
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(20),
    width: responsiveWidth(100),
  },
  button: showWidth => ({
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: showWidth ? 'transparent' : colors.button,
    borderWidth: showWidth ? 1 : 0,
    borderColor: colors.button,
  }),
  ticketText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.white,
  },
  buttonText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.white,
  },
  icon: {
    paddingRight: responsiveWidth(1),
  },
});

export default styles;
