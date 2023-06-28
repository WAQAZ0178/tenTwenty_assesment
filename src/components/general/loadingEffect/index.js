import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {colors} from '../../../globals/utilities';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
const LoadingEffect = () => {
  // ?===================================== here we display products =====================================
  const renderItem = (item, index) => {
    return (
      <ShimmerPlaceHolder
        shimmerStyle={styles.movieCard}
        visible={false}
        shimmerColors={[colors.cloud, colors.placeHolderLight, colors.cloud]}
        LinearGradient={LinearGradient}></ShimmerPlaceHolder>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{marginTop: responsiveHeight(2)}}
        data={[1, 1, 1, 1, 1, 1, 1]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};

export default LoadingEffect;
