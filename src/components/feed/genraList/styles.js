//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {AppColor, colors, fontFamily} from '../../../globals/utilities';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
  },
  listContainer: {
    height: responsiveHeight(5),
  },
  labelHeading: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },

  lineContainer: {
    width: responsiveWidth(90),
    backgroundColor: AppColor.halfWhite,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2.5),
    height: 2,
    alignSelf: 'center',
  },
  labelText: backColor => ({
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.5),
    color: colors.white,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(2),
    backgroundColor: backColor,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(0.5),
  }),

  overViewText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    color: colors.black,
    paddingRight: responsiveWidth(5),
  },
});

export default styles;
