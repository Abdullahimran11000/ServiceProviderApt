import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DashboardStyle = StyleSheet.create({

    headCont: {width: wp('90'), height: hp('6'), marginTop: wp('4.5'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContMenuCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('0'), justifyContent: 'center'},
    textCont : {position: 'absolute', right: 0},
    textStyle: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6},

    doctorInfoCard : {width: wp('90'), height: hp('15'), marginTop: wp('0'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    doctorInfoInnerCont : {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},

    doctorProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14'), position: 'absolute', left:wp('0')},
    doctorProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

    doctorNameContView: {width: wp('60'), position: 'absolute', left: wp('18')},
    doctorNameCont : {marginTop: wp('-6')},
    doctorNameTextStyle: {fontFamily: 'Poppins-Bold', fontSize:wp('4.5'), color: AppColor.black},

    doctorCertificatesView: {marginTop:wp('-1')},
    doctorCertificatesTextStyle: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: 'rgba(0, 0, 0, 0.4)'},

    doctorSpecialistView: {marginTop:wp('-0.6'), flex: 1, flexDirection: 'row', width: wp('43.5')},
    doctorSpecialistTextStyle: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: 'rgba(0, 0, 0, 0.4)', position: 'absolute', left: 0},
    ratingView: {position: 'absolute', right:0},
    doctorLowerFlexViewInnerView: {display: 'flex' , flex: 1, flexDirection: "row"},
    doctorLowerFlexTextOne: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: AppColor.black, marginLeft: wp('1')},

    headContLastCont: {position: 'absolute', right: wp('2.5'), top: wp('6')},
    notificationButton: {width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},
    
    warningCard: {width: wp('90'), height: hp('20'), alignSelf: 'center'},
    neoCard: {width: wp('90'), height: hp('20'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade},
    dashCard: {width: wp("90"), height: hp('20'), borderRadius: wp('8'), alignSelf: 'center'},

    warningParaCont : {display: 'flex', flex: 1, flexDirection: 'row', width: wp('85'), alignSelf: 'center', marginTop: wp('6')},
    warningTextCont : {width: wp('70'), position: 'absolute', left: wp('15')},
    warningParaText : {fontFamily: "Poppins-Medium", fontSize: wp('3.5'), color: AppColor.white, textAlign: 'left'},

    certificatesButtonView : {display: 'flex', flex: 1, flexDirection: 'row', width: wp('85'), top: wp('3')},
    neoCertificatesButton : {width: wp('35'), height: wp('8'), borderRadius: wp('5'), shadowRadius: 2, backgroundColor: '#de8c8c', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0},
    certificatesButtonText : {fontFamily: "Poppins-Bold", fontSize: wp('3'), color: AppColor.white},

    appCard : {width: wp('90'), height: hp('18'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
    neoCard2: {width: wp('90'), height: hp('18'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},
    patientProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14'), position: 'absolute', left:wp('0')},
    patientProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

});

export {DashboardStyle};
