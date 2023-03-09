import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const AppointmentStyle = StyleSheet.create({

  opcaityView: {flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 10,marginVertical: wp('10')},
  opacityButton: {borderRadius: 20,width: wp(28),height: hp(5),backgroundColor:AppColor.white,shadowRadius: 4},
  opacityTouchableButton: {borderRadius: 20,width: wp(28),height: hp(5),alignItems: 'center',justifyContent: 'center'},
  buttonText: {fontSize: wp('3.5'),fontFamily: 'Poppins-Medium',color: AppColor.black},

  appCard : {width: wp('90'), height: hp('18'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
  neoCard2: {width: wp('90'), height: hp('18'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},
  patientCard: {flexDirection: 'row', paddingHorizontal: wp('5'), paddingTop: wp('4'), justifyContent: 'space-between'},
  patientProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14'), position: 'absolute', left:wp('0')},
  patientProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

  patientInfoView: {position: 'absolute', left: wp('18'), top: wp('1.5'), display: 'flex', flexDirection: 'column'},
  patientNameText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black},
  patientGenderText: {fontFamily: 'Poppins-Medium', fontSize: wp('3'), color: AppColor.blackOpacity6},

  lottieView: {position: 'absolute', right: wp('-17'), top: wp('-17')},
  lottieStyle: {width: wp("30"), height: wp("30")},

  lottieViewUpcoming: {position: 'absolute', right: wp('-22'), top: wp('-22')},
  lottieStyleUpcoming: {width: wp("10"), height: wp("10")},

  detailView: {flexDirection: 'row', paddingHorizontal: wp('5'), paddingTop: wp('5'), justifyContent: 'space-between'},
  dateStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},
  timeIconStyle: {color: AppColor.black},
  timeStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},
  callIconStyle: { color: AppColor.black},
  destinationStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},

  appCardUpcoming : {width: wp('90'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
  neoCard2Upcoming: {width: wp('90'), borderRadius: wp('8'), shadowRadius: 4, margin: wp('5'), backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},

  buttonView: { flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: wp('7')},
  buttonTouchStyle: {justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')},
  buttonTextStyle: {fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black},


});

export {AppointmentStyle};
