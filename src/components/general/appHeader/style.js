import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontFamily, colors} from '../../../globals/utilities/index';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: responsiveWidth(100),

    height: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  //? if search is hhidden style defined here ========
  hidenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
  },
  watchText: {
    color: colors.black,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2),
  },

  //? below styles for search bar
  searchContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(6),
    backgroundColor: colors.halfWhite,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-between',
    elevation: 5,
    paddingHorizontal: responsiveWidth(2.5),
  },

  textInput: {
    width: responsiveWidth(70),
    height: responsiveHeight(6.5),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
