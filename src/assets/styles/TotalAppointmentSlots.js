import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import { AppColor } from "../colors/AppColors";

const TotalAppointmentSlots = StyleSheet.create({
    mainView : {marginTop: hp(5)},
    neomorphButtonOne: {shadowRadius: 4,backgroundColor: AppColor.whiteShade, height: hp(24), width: wp(100)},
    neomorphButtonInner: {shadowRadius: 4,backgroundColor: AppColor.whiteShade,height: hp(20), width: wp(100), marginTop:hp(2)},
    viewOne: {marginTop: hp(3), backgroundColor: AppColor.whiteShade,height:hp(70)},
    viewTwo:{alignSelf: 'center', width: wp(95), height: hp(70)},
    neomorphButtonTwo: { width: wp(95),height: hp(54),alignItems: 'center',justifyContent: 'center', borderRadius: wp(5), backgroundColor: AppColor.whiteShade, shadowRadius: 4},
    lottyView: {width: wp(70), height: hp(40)},
    neomorphButtonThree: {width: wp(90),height: hp(10),alignItems: 'center',justifyContent: 'center', borderRadius: wp(5), backgroundColor: AppColor.whiteShade, shadowRadius: 4},
    textView: {fontFamily: 'Poppins-SemiBold', fontSize: wp(5), color: AppColor.black},
    
})
export {TotalAppointmentSlots}