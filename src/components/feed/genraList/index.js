//import liraries
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
const GenraList = ({genraList = [], overText}) => {
  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  };

  const renderItem = (item, index) => {
    return (
      <View>
        <Text style={styles.labelText(generateColor())}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.labelHeading}>Genres</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={genraList}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
      <View style={styles.lineContainer} />
      <Text style={styles.labelHeading}>Overview</Text>
      <Text style={styles.overViewText}>{overText}</Text>
    </View>
  );
};

export default React.memo(GenraList);
