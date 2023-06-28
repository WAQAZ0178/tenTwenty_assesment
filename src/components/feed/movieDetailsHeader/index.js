//import liraries
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {AuthHeader} from '../../general/authHeader';
import {Icon} from 'react-native-elements';
import {colors} from '../../../globals/utilities';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const MovieDetailsHeader = ({data, onPressBack}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image}
        source={{uri: data?.thumbnail}}>
        <AuthHeader
          title={'Watch'}
          onPressLeftButton={onPressBack}
          marginTop={5}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.ticketText}>In theaters december 22, 2021</Text>
          <TouchableOpacity style={styles.button(false)}>
            <Text style={styles.buttonText}>Get Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button(true)}>
            <Icon
              name="controller-play"
              type="entypo"
              size={responsiveFontSize(2)}
              color={colors.white}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MovieDetailsHeader;
