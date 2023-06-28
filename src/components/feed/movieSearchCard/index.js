//import liraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {colors} from '../../../globals/utilities';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const MovieSearchCard = ({onPress, onPressDot, category, name, image}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.nameText}>
            {name}
          </Text>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDot}>
        <Icon
          name="dots-three-horizontal"
          type="entypo"
          size={responsiveFontSize(3)}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MovieSearchCard);
