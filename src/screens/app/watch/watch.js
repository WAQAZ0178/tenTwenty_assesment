import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import styles from './styles';
import MovieFullCard from '../../../components/feed/movieFullCard';
import LoadingEffect from '../../../components/general/loadingEffect';
import AppHeader from '../../../components/general/appHeader';
import {appFBS} from '../../../services/firebaseServices/firebaseServices';
import MovieSearchCard from '../../../components/feed/movieSearchCard';
import API from '../../../services/apiServices';
const Watch = ({navigation}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getMoviesList();
    getApiData();
  }, []);

  const getApiData = async () => {
    let res = await API.getDataWithAccessToken('lists?language=en-US&page=1');
  };
  // !===================================== here we get data from fb and manipulate it with adds =====================================
  const getMoviesList = async () => {
    setloading(true);
    let res = await appFBS.getData('products');
    setMoviesList(res);
    setloading(false);
  };

  const onSearch = text => {
    setsearch(text);
    let copy = [...moviesList];
    text = text.toLowerCase();
    copy = copy.filter((e, i) => {
      return e?.title?.toLowerCase().includes(text);
    });
    setfilterMovies(copy);
  };

  // ?===================================== here we display movie card  =====================================
  const renderItem = (item, index) => {
    return (
      <MovieFullCard
        onPressMovie={() => onClickMovie(item)}
        image={item?.thumbnail}
        movieName={item?.title}
      />
    );
  };

  // ?===================================== here we display movie card  =====================================
  const renderMovieSearchItem = (item, index) => {
    return (
      <MovieSearchCard
        name={item?.title}
        image={item?.thumbnail}
        category={'Sci-Fi'}
        onPressDot={() => {}}
        onPress={() => onClickMovie(item)}
      />
    );
  };

  //?======================= on click of movie card nav user to movie details screeen =========================
  const onClickMovie = item => {
    navigation.navigate('MovieDetails', {data: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        search={search}
        onChange={text => onSearch(text)}
        // setSearch={e => onSearch(e)}
      />

      {loading ? (
        <LoadingEffect />
      ) : (
        <View>
          {showSearch ? (
            <FlatList
              data={filterMovies.length > 0 ? filterMovies : moviesList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => renderMovieSearchItem(item, index)}
              horizontal={false}
              contentContainerStyle={styles.listContainer}
              removeClippedSubviews={true}
              shouldItemUpdate={(props, nextProps) =>
                props.item !== nextProps.item
              }
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.listContainer}
              data={moviesList}
              renderItem={({item, index}) => renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
              initialNumToRender={15}
              maxToRenderPerBatch={15}
              removeClippedSubviews={true}
              shouldItemUpdate={(props, nextProps) =>
                props.item !== nextProps.item
              }
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Watch;
