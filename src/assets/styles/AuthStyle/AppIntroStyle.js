import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import App from '../../../../App';
import { AppColor } from '../../colors/AppColors';

const AppIntroStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.primary , height: hp('100')},
  sliderView: {height: hp('80')},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('48')},
  headingView: {justifyContent: 'center', alignItems: 'center'},
  headingText: {color: AppColor.white, fontFamily: 'Poppins-Bold', fontSize: wp('5')},
  paraView: {justifyContent: 'space-evenly', alignItems: 'center', padding: wp('4')},
  paraText: {color: AppColor.white, fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center'},
});

export {AppIntroStyle};

