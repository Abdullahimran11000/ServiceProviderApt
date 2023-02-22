import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const VerificationStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, display: 'flex', flex: 1},
  headingView:{alignItems:'center'},
  animationView: {alignItems: 'center' , marginTop: wp("6")},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagView: {alignItems: "center" , marginTop: wp('8')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraView: {alignItems: 'center', padding: wp('4')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center'},
  touchableView:{alignItems: "center", marginTop: wp('0')},
  textStyle:{color: AppColor.black , fontFamily: "Poppins-Light" , fontSize: wp('3.5'), marginTop: wp('8')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Light" , fontSize: wp('3.5'), marginTop: wp('2')},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center'},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4.2'), textAlign: "center"},
  textView: {flex: 1 , flexDirection: 'row' , justifyContent: 'space-evenly' , padding: wp('3')},
  buttonView:{alignItems:'center' , marginTop: wp('6'), marginBottom: wp('5')},
  newInputs: {width: wp("16") , height: wp('16') , borderRadius: wp('5') , backgroundColor: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('7') , padding: wp('1') , textAlign: 'center'},
});

export {VerificationStyle};
