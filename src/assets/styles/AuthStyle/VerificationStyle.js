import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const VerificationStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, flex: 10},
  headerCont: {flex:1},
  bodyCont: {flex:9},
  scrollView: {alignItems: 'center',flexGrow: 9,justifyContent: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black, paddingVertical: wp('4')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center', paddingHorizontal: wp('5')},
  textStyle:{color: AppColor.black , fontFamily: "Poppins-Regular" , fontSize: wp('3.5'), paddingVertical: wp('2')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Regular" , fontSize: wp('3.5')},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold"},
  textInputView: {flexDirection: 'row' , width: wp('90'), justifyContent: 'space-evenly', paddingVertical: wp('5')},
  newInputs: {width: wp("16") , height: wp('16') , borderRadius: wp('5') , backgroundColor: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('7') , padding: wp('1') , textAlign: 'center', color: AppColor.black},
  textOne: {fontFamily: 'Poppins-Light',fontSize: wp('3.5'),color: AppColor.red},
  buttonStyle: {paddingVertical: wp('3')}
});

export {VerificationStyle};
