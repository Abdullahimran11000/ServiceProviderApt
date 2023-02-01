import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const AppointmentStyle = StyleSheet.create({

  opcaityView: {flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 10,marginVertical: wp('10')},
  opacityButton: {borderRadius: 20,width: wp(28),height: hp(5),backgroundColor:"white",shadowRadius: 4},
  opacityTouchableButton: {borderRadius: 20,width: wp(28),height: hp(5),alignItems: 'center',justifyContent: 'center'},
  buttonText: {fontSize: wp('3.5'),fontFamily: 'Poppins-Medium',color: 'black'},

  appCard : {width: wp('90'), height: hp('18'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
  neoCard2: {width: wp('90'), height: hp('18'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},
  patientCard: {display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', marginTop: wp('3')},
  patientProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14'), position: 'absolute', left:wp('0')},
  patientProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

  patientInfoView: {position: 'absolute', left: wp('18'), top: wp('1.5'), display: 'flex', flexDirection: 'column'},
  patientNameText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black},
  patientGenderText: {fontFamily: 'Poppins-Medium', fontSize: wp('3'), color: AppColor.blackOpacity6, marginTop: wp("-1.5")},

  lottieView: {position: 'absolute', right: wp('-15'), top: wp('-15')},
  lottieStyle: {width: wp("30"), height: wp("30")},

  lottieViewUpcoming: {position: 'absolute', right: wp('-20'), top: wp('-20')},
  lottieStyleUpcoming: {width: wp("40"), height: wp("40")},

  detailView: {display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', top: hp('11.5')},
  dateStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('5')},
  timeIconStyle: {left: wp('36'), position: 'absolute', color: AppColor.black},
  timeStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('41')},
  callIconStyle: {position: 'absolute', left: wp('63'), color: AppColor.black},
  destinationStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('66')},

  appCardUpcoming : {width: wp('90'), height: hp('28'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
  neoCard2Upcoming: {width: wp('90'), height: hp('28'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},

  buttonView: {width: wp('90'), display: 'flex', flexDirection: 'row', marginTop: wp('27'), justifyContent: 'space-evenly'},
  buttonTouchStyle: {justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')},
  buttonTextStyle: {fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black},


});

export {AppointmentStyle};
