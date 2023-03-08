import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const ForgotPasswordStyle = StyleSheet.create({
  safeView: {backgroundColor: AppColor.whiteShade, display: 'flex', flex: 1},
  headingView:{alignItems:'center',justifyContent:"center"},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraView: {alignItems: 'center', padding: wp('3')},
  paraText: {color: AppColor.black,fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center'},
  inputView: {marginTop: wp('6'), alignItems: "center"},
  labelView: {width:wp('90')},
  labelText: {color: AppColor.black, fontFamily: 'Poppins-SemiBold',fontSize: wp('4.5')},
  inputStyle: {marginTop:5 , width:wp('90') , height: hp('7'), borderRadius:wp('3') , backgroundColor: AppColor.white , padding:wp('3'), fontFamily: 'Poppins-Light'},
  touchableView:{position: 'relative' , alignItems: "center" , marginTop: wp('6')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Medium" , fontSize: wp('3.8'), marginTop: wp('3'), marginBottom: wp('2')},
  touchableStyle: {marginTop: wp('10'), width: wp("90") , height: hp('7'), borderRadius: wp('10'), shadowRadius: 4, backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center', marginBottom: wp('10') },
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4')}
});

export {ForgotPasswordStyle};
