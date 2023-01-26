import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const DoctorInfoStyle = StyleSheet.create({
  flexView: {display: 'flex', flex: 10},
  imageStyle: {flex: 3.5, width: wp('90'), height: wp('90'), alignSelf: 'center'},

  dropDownView: {marginTop: wp('-4'), flex:5, backgroundColor: AppColor.whiteShade, borderTopLeftRadius: wp('15'), borderTopRightRadius: wp('15')},

  infoView: {width: wp('90'), alignSelf: 'center', marginTop: wp('10')},
  nameText: {fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.black},
  deptText: {fontFamily: 'Poppins-Light', fontSize: wp('4'), color: AppColor.blackOpacity7},
  addressView: {display: 'flex', flexDirection: 'row', marginTop: wp('2')},
  addressText: {marginLeft: 5, fontFamily: 'Poppins-Light', fontSize: wp('4')},

  recordView: {display: 'flex', width: wp('90'), alignSelf: 'center',  flexDirection: 'row', marginTop: wp('3')},
  patientView: {alignItems: 'center', justifyContent: 'center', width: wp('27'), height: wp('20'), borderRadius: wp('8'), marginRight: wp('4.5')},
  patientText1: {fontFamily: 'Poppins-Light', fontSize: wp('3.7'), color: AppColor.black},
  patientText2: {fontFamily: 'Poppins-Light', fontSize: wp('3.5')},
  ratingView: {display: 'flex', flexDirection: 'row'},
  ratingNumericText: {fontFamily: 'Poppins-Light', fontSize: wp('3.5'), marginLeft: wp('1')},

  biographyView: {width: wp('90'), alignSelf: 'center', marginTop: wp('3')},
  biographyHeaderText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black},
  biographyParaText: {textAlignVertical: 'center', fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: AppColor.blackOpacity6},

  locationView: {width: wp('90'), alignSelf: 'center', marginTop: wp('3')},
  locationText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black},

  mapView: {width: wp('90'), height: hp('30') , alignSelf: 'center', marginTop: wp('3'), borderRadius: wp('7'), overflow: 'hidden', marginBottom: wp('7')},
  
  buttonView: {alignSelf: 'center', marginBottom: wp('10')},
  buttonText: {fontFamily: "Poppins-Bold", fontSize: wp('4.3'), color: AppColor.white},

  container: {...StyleSheet.absoluteFillObject, height: 400, width: 400, justifyContent: 'flex-end', alignItems: 'center'},
  map: {...StyleSheet.absoluteFillObject},

});

export {DoctorInfoStyle};
