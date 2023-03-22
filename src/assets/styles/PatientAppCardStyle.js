import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp, heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColors';
const PatientAppCardStyle = StyleSheet.create({

    //Patient Card
    mainView:{flex: 1, backgroundColor: AppColor.whiteShade},
    scrollView: {alignItems: 'center'},

    //NoDataFound Card
    cardView: {width: wp('80'),height: wp('20'),backgroundColor: AppColor.whiteShade,shadowRadius: 4,borderRadius: wp('5'),marginHorizontal: wp('10'),marginVertical: wp('5'),alignItems: 'center',justifyContent: 'center',},
    cardText: {fontFamily: 'Poppins-Bold',color: AppColor.red,fontSize: wp('4'),},

    //Patient Card
    neoCard2Upcoming: {width: wp('90'), borderRadius: wp('8'), shadowRadius: 4, margin: wp('5'), backgroundColor: AppColor.whiteShade, alignSelf: 'center', overflow: 'hidden'},
    patientCard: {flexDirection: 'row', paddingHorizontal: wp('5'), paddingTop: wp('4'), justifyContent: 'space-between'},
    patientProfileImage: {width: wp('15'), height: wp('15'), borderRadius: wp('14')},
    patientNameCont: {width: wp('50')},
    patientNameText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: AppColor.black},
    patientGenderText: {fontFamily: 'Poppins-Medium', fontSize: wp('3'), color: AppColor.blackOpacity6},
    iconTextCont: {flexDirection: 'row'},
    lottieStyleUpcoming: {width: wp("10"), height: wp("10")},
    detailView: {flexDirection: 'row', paddingHorizontal: wp('5'), paddingTop: wp('5'), justifyContent: 'space-between'},
    dateStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},
    timeStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},
    destinationStyle: {fontFamily: "Poppins-Medium", fontSize: wp('3'), color: AppColor.blackOpacity8},
    buttonView: { flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: wp('7')},
    buttonTouchStyle: {justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')},
    buttonTextStyle: {fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black},
    forwardButtonView: {width: wp('8'),height: wp('8'),borderRadius: wp('8'),shadowRadius: 2,alignItems: 'center',justifyContent: 'center',},

});

export {PatientAppCardStyle};
