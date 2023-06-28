//import liraries
import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

const MovieFullCard = ({image, movieName, onPressMovie}) => {
  return (
    <TouchableOpacity onPress={onPressMovie} style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image}
        source={{uri: image}}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{movieName}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default React.memo(MovieFullCard);
