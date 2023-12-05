import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const ForgotPasswordStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, flex: 10},
  headerCont: {flex: 1},
  bodyCont: {flex: 9},
  scrollView: {alignItems: 'center',flexGrow: 9,justifyContent: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraText: {color: AppColor.black,fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center', width: wp('90'), marginVertical: wp('3')},
  alertText: {fontFamily: 'Poppins-Light',fontSize: wp('3.2'),color: AppColor.red,width: wp('90')},
  labelView: {width:wp('90')},
  labelText: {color: AppColor.black, fontFamily: 'Poppins-SemiBold',fontSize: wp('4.5'), width: wp('90')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Medium" , fontSize: wp('3.8'), marginVertical: wp('3'), alignSelf: 'center'},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold"}
});

export {ForgotPasswordStyle};
