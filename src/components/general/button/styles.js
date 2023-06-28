import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {AppColor, colors, textColor} from '../../../globals/utilities';
import {fontFamily} from '../../../globals/utilities';

export const styles = {
  container: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(6.5),
    justifyContent: 'center',
    width: responsiveWidth(90),
    height: responsiveHeight(5.5),
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextBold,
  },
};
