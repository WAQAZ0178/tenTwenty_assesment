import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppColor, colors, fontFamily} from '../../../globals/utilities';

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(1),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  imageContainer: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: responsiveHeight(15),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(3),
  },
  infoContainer: {
    marginLeft: responsiveWidth(5),
  },
  nameText: {
    color: colors.black,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    maxWidth: responsiveWidth(30),
  },
  categoryText: {
    color: colors.gray400,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
