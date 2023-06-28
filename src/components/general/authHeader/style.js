import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {textColor, fontFamily, colors} from '../../../globals/utilities/index';
const styles = StyleSheet.create({
  topContainer: marginTop => ({
    width: responsiveWidth(100),
    marginTop: responsiveHeight(marginTop),
    paddingVertical: responsiveHeight(1),
  }),
  container: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: responsiveWidth(3),
  },
  headingText: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    paddingLeft: responsiveWidth(2),
  },
});
export default styles;
