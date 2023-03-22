import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const RecoverPasswordStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, flex: 10, alignItems: 'center', justifyContent: 'center'},
  headerCont: {flex:0.8},
  bodyCont: {flex:9.2},
  scrollView: {alignItems: 'center',flexGrow: 9.2,justifyContent: 'center', width: wp('100')},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black , textAlign:'center'},
  paraView: {alignItems: 'center', width: wp('80'), alignSelf: 'center', marginTop: wp('5'), marginBottom: wp('15')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'), width: wp('90'), textAlign: 'center', marginVertical: wp('5')},
  alertText: {fontFamily: 'Poppins-Light',fontSize: wp('3.5'),color: AppColor.red,width: wp('90')},
  buttonCont: { marginVertical: wp('5')},
  labelText1: {color: AppColor.black, fontFamily: 'Poppins-SemiBold',fontSize: wp('4'), width: wp('90')},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , textAlign: 'center'},
});

export {RecoverPasswordStyle};
