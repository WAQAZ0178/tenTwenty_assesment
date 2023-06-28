//import liraries
import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
const CategoryCard = ({onPress, name, image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <View style={styles.movieNameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CategoryCard);
