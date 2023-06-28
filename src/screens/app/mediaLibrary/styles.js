import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppColor} from '../../../globals/utilities';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.halfWhite,
  },
  listContainer: {
    paddingBottom: responsiveHeight(20),
  },
});

export default styles;
