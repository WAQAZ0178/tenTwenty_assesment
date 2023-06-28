import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import {Icon} from 'react-native-elements';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../../../globals/utilities';
const AppHeader = ({
  search,
  setSearch,
  onChange,
  showSearch,
  setShowSearch,
  title = 'Watch',
}) => {
  return (
    <View style={styles.container}>
      {showSearch ? (
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            type="feather"
            size={responsiveFontSize(2.5)}
            color={colors.placeHolderLight}
          />

          <TextInput
            value={search}
            onChange={({nativeEvent: {eventCount, target, text}}) =>
              onChange(text)
            }
            placeholder={'TV shows, movies and more'}
            placeholderTextColor={colors.placeHolderLight}
            style={styles.textInput}
            numberOfLines={1}
          />
          <TouchableOpacity onPress={() => setShowSearch(false)}>
            <Icon
              name="close"
              type="antdesign"
              size={responsiveFontSize(2.5)}
              color={colors.placeHolderLight}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.hidenContainer}>
          <Text style={styles.watchText}>{title}</Text>
          <TouchableOpacity onPress={() => setShowSearch(true)}>
            <Icon
              name={'search'}
              type={'feather'}
              size={responsiveFontSize(2.5)}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default React.memo(AppHeader);
