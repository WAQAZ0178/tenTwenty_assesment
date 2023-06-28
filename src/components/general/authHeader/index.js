import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../../../globals/utilities';
export const AuthHeader = ({onPressLeftButton, title, marginTop = 2}) => {
  return (
    <View style={styles.topContainer(marginTop)}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeftButton}>
          <Icon
            name={'keyboard-arrow-left'}
            type={'materialicon'}
            size={responsiveFontSize(4)}
            color={colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>{title}</Text>
      </View>
    </View>
  );
};
