import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {styles} from './styles';
import {colors} from '../../../globals/utilities';
const AppButton = ({
  onPress,
  title,
  disabled,
  loading = false,
  marginTop,
  backgroundColor = colors.primary,
  titleColor = colors.white,
  showBorder = false,
  borderColor = colors.primary,
  loaderColor = 'white',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        marginTop: marginTop ? responsiveHeight(marginTop) : null,
        borderWidth: showBorder ? responsiveWidth(0.5) : 0,
        borderColor: borderColor,
      }}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Text style={{...styles.title, color: titleColor}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
