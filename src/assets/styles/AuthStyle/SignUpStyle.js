import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import App from "../../../../App";
import { AppColor } from "../../colors/AppColors";
const SignUpStyle = StyleSheet.create({
    mainView: {width: wp('100'), height: hp('100'), alignSelf: 'center'},
    buttonTwoView: {marginLeft: wp(8.5), marginTop: hp(1)},
    footerView: { alignSelf: 'center', marginTop: hp(2), marginRight: wp(10)},
    inputs: {width: wp(84),marginTop: hp(1),borderRadius: 5, fontFamily: 'Poppins-SemiBold',},
    text: {fontSize: wp('4.5'),color: AppColor.black, fontFamily: 'Poppins-SemiBold'},
    views: {width: wp('90'),alignSelf: 'center',marginTop: hp(5),},
    icon: {position: 'absolute',right: wp('5') ,},
    viewSignUpbutton: {width: wp(100),alignItems: 'center',marginTop: hp(3)},
    SignUpbutton: {backgroundColor: AppColor.primary,width: wp('83'),height: hp('6'),alignItems: 'center',justifyContent: 'center',borderRadius: wp('15')},
    SignUpText: {color: AppColor.white, fontFamily: 'Poppins-SemiBold'},
    footerText: {fontFamily: 'Poppins-Light'},
    loginButton: {position: 'absolute', marginLeft: wp(52)},
    loginText: {color: AppColor.black, fontFamily: 'Poppins-Medium'},
    SignInButton: {width: wp('35'),height: hp('6'),justifyContent: 'center',marginLeft: wp('7'),},
    image: {width: wp(5), height: hp(3),position: 'absolute',left: 0,marginLeft: wp('20'),},
    SignInText: {fontSize: wp('3.5'),fontFamily: 'Poppins-SemiBold',},
    termsAndPrivacyStyle1: { position: 'absolute', marginHorizontal: wp(9.5), marginTop: hp(1.2), fontFamily: 'Poppins-Regular',  color: AppColor.black},
    termsAndPrivacyStyle2: { position: 'absolute',  marginLeft: wp(32.5),  marginTop: hp(1),  color: AppColor.black,  fontFamily: 'Poppins-Bold',  },
    termsAndPrivacyStyle3: { position: 'absolute', marginLeft: wp(45.5), marginTop: hp(1.2), color: AppColor.black},
    termsAndPrivacyStyle4: {position: 'absolute',marginLeft: wp(53),marginTop: hp(1),color: AppColor.black,fontFamily: 'Poppins-Bold'},
    middleTextBetweenButtons: {marginTop: hp(1),textAlign: 'center',marginLeft: wp(20),marginTop: wp('5'),},

})

export {SignUpStyle}