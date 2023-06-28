import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontFamily, colors} from '../../../globals/utilities';
export default StyleSheet.create({
  container: {
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: colors.frost,
    borderRadius: responsiveWidth(2),
  },

  image: {
    alignSelf: 'center',
    height: responsiveHeight(25),
    width: responsiveWidth(93),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameContainer: {
    maxWidth: responsiveWidth(85),
    position: 'absolute',
    bottom: responsiveHeight(2),
    left: responsiveWidth(5),
  },
  nameText: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2),
    color: colors.white,
  },
});
