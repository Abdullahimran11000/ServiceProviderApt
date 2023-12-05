import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const MyProfileStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade,flex: 10,alignItems: 'center',justifyContent: 'center'},
  headerCont: {flex: 1},
  bodyCont: {flex: 9},
  scrollView: {alignItems: 'center',flexGrow: 9.2,justifyContent: 'center', width: wp('100')},
  imageView: {borderRadius: wp('15'),height: wp('25'),width: wp('25'),backgroundColor: AppColor.whiteShade,overflow: 'hidden'},
  innerProfileView: {width: wp('25'),height: wp('25'),borderRadius: wp('25'),backgroundColor: AppColor.white,alignContent: 'center',justifyContent: 'center',alignItems: 'center',marginVertical: wp('5')},
  imageStyle: {width: wp('25'), height: wp('25')},
  inputFeildsView: {width: wp('89'), alignSelf: 'center'},
  iconTouchableStyle: {position: 'absolute',right: -3,bottom: 0,width: wp('8'),height: wp('8'),borderRadius: wp('6'),backgroundColor: AppColor.white,alignItems: 'center',justifyContent: 'center'},
  menuCont: {width: wp('90'),height: hp('7.5'),backgroundColor: AppColor.whiteShade,shadowRadius: 4,borderRadius: wp('3'),marginTop: wp('2'),justifyContent: 'center'},
  menuText: {fontFamily: 'Poppins-Light',paddingLeft: wp('3'),fontSize: wp('4')},
  menuPopup: {borderRadius: wp('4'),width: wp('40'),backgroundColor: AppColor.whiteShade,elevation: 2,position: 'absolute',right: wp('11'),top: wp('2')},
  menuPopupText: {fontFamily: 'Poppins-Light',color: AppColor.black,paddingLeft: wp('2')},
  textStyle: {fontFamily: 'Poppins-SemiBold',color: AppColor.black,fontSize: wp('4'),width: wp('90')},
  alertText: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.red,width: wp('90')},
  buttonView: {marginVertical: wp('5'),},
  buttonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4.5'),color: AppColor.white},
});

export {MyProfileStyle};
