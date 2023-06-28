//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

// create a component
const EmptyCard = ({height = 0}) => {
  return (
    <View
      style={{...styles.container, height: responsiveHeight(height)}}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: responsiveHeight(5),
  },
});

export default EmptyCard;
