import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const LoginStyle = StyleSheet.create({

  mainView: {backgroundColor: AppColor.whiteShade,flex: 10,justifyContent: 'center',alignItems: 'center'},
  headerCont: {flex: 1, justifyContent: 'center'},
  headerView: {color: AppColor.black,fontFamily: 'Poppins-Bold',fontSize: wp('5')},
  bodyCont: {flex: 9, paddingVertical: wp('10')},
  textStyle: {color: AppColor.black,fontFamily: 'Poppins-SemiBold',fontSize: wp('4.5'),width: wp('90')},
  labelTextStyle: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.red},
  forgotText: {textAlign: 'right',paddingRight: wp('5'),fontFamily: 'Poppins-Medium',color: AppColor.black},
  buttonCont: {alignItems: 'center'},
  loginText: {color: AppColor.white,fontFamily: 'Poppins-Bold',fontSize: wp('4')},
  signUpText: {fontFamily: 'Poppins-SemiBold', color: AppColor.black},
  footerCont: {flexDirection: 'row', alignSelf: 'center'},
  footerText: {fontFamily: 'Poppins-Light',color: AppColor.blackOpacity8},

});

export {LoginStyle};
