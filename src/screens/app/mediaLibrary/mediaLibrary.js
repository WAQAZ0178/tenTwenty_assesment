//import liraries
import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import AppHeader from '../../../components/general/appHeader';
import {appFBS} from '../../../services/firebaseServices/firebaseServices';
import CategoryCard from '../../../components/feed/categoryCard';
const MediaLibrary = ({navigation}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getMoviesList();
  }, []);

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
  const renderMovieCategoryItem = (item, index) => {
    return <CategoryCard name={'nothing'} image={item?.thumbnail} />;
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
        title="Media Library"
        onChange={text => onSearch(text)}
      />

      <FlatList
        data={filterMovies.length > 0 ? filterMovies : moviesList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => renderMovieCategoryItem(item, index)}
        horizontal={false}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={true}
        shouldItemUpdate={(props, nextProps) => props.item !== nextProps.item}
      />
    </SafeAreaView>
  );
};

export default MediaLibrary;
