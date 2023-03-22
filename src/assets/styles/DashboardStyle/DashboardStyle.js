import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DashboardStyle = StyleSheet.create({

    mainView: {flex: 10,backgroundColor: AppColor.whiteShade,alignItems: 'center',justifyContent: 'center'},

    headCont: {width: wp('90'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 0.8},
    scrollView: {alignItems: 'center',flexGrow: 9.2,justifyContent: 'center', width: wp('100')},
    
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContMenuCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('0'), justifyContent: 'center'},
    textCont : {position: 'absolute', right: 0},
    textStyle: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6},

    doctorInfoCard : {width: wp('90'), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingVertical: wp('3')},
    nameCont: {width: wp('60')},
    professionCont: {flexDirection: 'row',justifyContent: 'space-between',width: wp('45')},
    ratingCont: {flexDirection: 'row'},
    
    certificateButton : {alignItems: 'flex-end', paddingVertical: wp('1')},
    noDataCont: {width: wp('80'),height: wp('20'),backgroundColor: AppColor.whiteShade,shadowRadius: 4,borderRadius: wp('5'),marginHorizontal: wp('10'),marginVertical: wp('5'),alignItems: 'center',justifyContent: 'center'},
    noDataText: {fontFamily: 'Poppins-Bold',color: AppColor.red,fontSize: wp('4')},
    doctorInfoInnerCont : {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},


    doctorProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14')},
    doctorProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

    doctorNameContView: {width: wp('60'), position: 'absolute', left: wp('18')},
    doctorNameCont : {marginTop: wp('-6')},
    doctorNameTextStyle: {fontFamily: 'Poppins-Bold', fontSize:wp('4.5'), color: AppColor.black},

    doctorCertificatesView: {marginTop:wp('-1')},
    doctorCertificatesTextStyle: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: AppColor.blackOpacity4},

    doctorSpecialistView: {marginTop:wp('-0.6'), flex: 1, flexDirection: 'row', width: wp('43.5')},
    doctorSpecialistTextStyle: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: AppColor.blackOpacity4,},
    ratingView: {position: 'absolute', right:0},
    doctorLowerFlexViewInnerView: {display: 'flex' , flex: 1, flexDirection: "row"},
    doctorLowerFlexTextOne: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: AppColor.black,},

    headContLastCont: {position: 'absolute', right: wp('2.5'), top: wp('6')},
    notificationButton: {width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},
    
    warningCard: {width: wp('90'), height: hp('20'), alignSelf: 'center'},
    neoCard: {width: wp('90'), height: hp('20'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, margin: wp('5')},
    dashCard: {width: wp("90"), height: hp('20'), borderRadius: wp('8'), padding: wp('5')},

    warningParaCont : { flexDirection: 'row'},
    warningParaText : {fontFamily: "Poppins-Medium", fontSize: wp('3.5'), color: AppColor.white, width: wp('65'), textAlign: 'center'},
    warningTextCont : {width: wp('70'), position: 'absolute', left: wp('15')},

    certificatesButtonView : {display: 'flex', flex: 1, flexDirection: 'row', width: wp('85'), top: wp('3')},
    neoCertificatesButton : {width: wp('35'), marginVertical: wp('2'), height: wp('8'), borderRadius: wp('5'), shadowRadius: 2, backgroundColor: AppColor.primaryOpacity1, justifyContent: 'center', alignItems: 'center'},
    certificatesButtonText : {fontFamily: "Poppins-Bold", fontSize: wp('3'), color: AppColor.white},

    appCard : {width: wp('90'), height: hp('18'), alignSelf: 'center', marginTop: wp('3'),  marginLeft: wp('5'), marginBottom: wp('5'), marginRight: wp('5')},
    neoCard2: {width: wp('90'), height: hp('18'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},
    patientProfileImageCont : {width: wp('15'), height: wp('15'), borderRadius: wp('14'), position: 'absolute', left:wp('0')},
    patientProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},

});

export {DashboardStyle};
