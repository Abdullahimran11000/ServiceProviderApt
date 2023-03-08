import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const RecoverPasswordStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, display: 'flex', flex: 1},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black , textAlign:'center'},
  paraView: {alignItems: 'center', width: wp('80'), alignSelf: 'center', marginTop: wp('5'), marginBottom: wp('15')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center'},
  inputView: {marginBottom: wp('3')},
  labelView: {width: wp('90'), marginBottom: wp('0')},
  labelText1: {color: AppColor.black, fontFamily: 'Poppins-SemiBold',fontSize: wp('4'),width:wp(80),alignSelf:'center'},
  labelText2: {color: AppColor.black, fontFamily: 'Poppins-Bold',fontSize: wp('3.9'),width:wp(80),alignSelf:'center'},
  inputStyleView: {flex: 1, flexDirection: 'row' , marginBottom: wp('3'), width:wp('90'), height: hp('6.5'), borderRadius:wp('3'), backgroundColor: AppColor.white, alignItems: 'center',alignSelf:'center'},
  iconTouchableStyle: {width: wp('10'), height: hp('7'), marginLeft: wp('6'), justifyContent: 'center', alignItems: 'center', position: 'absolute', right: wp('3')},
  touchableView:{position: 'relative' , alignItems: "center" , marginTop: wp('10')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Light" , fontSize: wp('3.5')},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center'},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4'), textAlign: 'center'},
  buttonView: {alignItems: 'center', marginTop: wp('10'), marginBottom: wp('2')}
});

export {RecoverPasswordStyle};
