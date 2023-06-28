import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../globals/utilities';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
  },
  imageContainer: {
    width: responsiveWidth(46),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    height: responsiveHeight(19.2),
    width: responsiveWidth(46),
    borderRadius: responsiveWidth(3),
  },
  movieNameContainer: {
    position: 'absolute',
    left: responsiveWidth(2),
    bottom: responsiveHeight(1),
    zIndex: 5,
  },
  nameText: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),

    // width: responsiveWidth(40),
    // paddingLeft: responsiveWidth(2),
    // marginTop: responsiveHeight(2),
  },
});

export default styles;
