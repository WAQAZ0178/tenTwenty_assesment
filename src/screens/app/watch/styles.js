import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppColor, colors} from '../../../globals/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.halfWhite,
  },
  listContainer: {
    // paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(10),
    // flex: 1,
  },
});

export default styles;
