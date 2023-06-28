import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {AppColor, colors, fontFamily} from '../../../globals/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.halfWhite,
  },
  listContainer: {
    paddingBottom: responsiveHeight(10),
  },
});

export default styles;
