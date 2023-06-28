import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../globals/utilities';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  movieCard: {
    width: responsiveWidth(90),
    height: responsiveWidth(50),
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    alignSelf: 'center',
  },
});

export default styles;
