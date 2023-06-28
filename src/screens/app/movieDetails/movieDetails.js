//import liraries
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import MovieDetailsHeader from '../../../components/feed/movieDetailsHeader';
import GenraList from '../../../components/feed/genraList';
const MovieDetails = props => {
  const data = props?.route?.params?.data;
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <MovieDetailsHeader onPressBack={() => navigation.goBack()} data={data} />
      <GenraList
        genraList={['Action', 'funny', 'Thriller', 'Science', 'fiction']}
        overText="As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons."
      />
    </SafeAreaView>
  );
};

export default MovieDetails;
