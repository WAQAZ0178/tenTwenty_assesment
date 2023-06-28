import {Platform, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../globals/utilities';
const styles = StyleSheet.create({
  bottomTabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
    height:
      Platform.OS === 'android' ? responsiveHeight(7) : responsiveHeight(6),
  },
  icon: (size = 5.5) => ({
    width: responsiveWidth(size),
    height: responsiveWidth(size),
    resizeMode: 'cover',
  }),

  tab: height => ({
    alignItems: 'center',
    height: height,
    justifyContent: 'center',
    width: responsiveWidth(20),
  }),
  titleText: {
    fontSize: responsiveFontSize(1.3),
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
    paddingTop: responsiveHeight(1),
  },
  addButton: {
    position: 'absolute',
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(13 / 2),
    top: responsiveHeight(-3),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addButtonText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    paddingTop: responsiveHeight(4.5),
  },
});
export default styles;
