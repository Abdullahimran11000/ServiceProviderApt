import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const AppIntroStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.primary , display: 'flex', flex: 1},
  sliderView: {height: hp('80')},
  animationStyle: {width: wp('90'), height: hp('50'), alignSelf: 'center'},
  headingText: {color: AppColor.white, fontFamily: 'Poppins-Bold', fontSize: wp('5'), alignSelf: 'center'},
  paraText: {color: AppColor.white, fontFamily: 'Poppins-Light',fontSize: wp('4'), width: wp('90'), textAlign: 'center', alignSelf: 'center', paddingTop: wp('5')},
});

export {AppIntroStyle};

