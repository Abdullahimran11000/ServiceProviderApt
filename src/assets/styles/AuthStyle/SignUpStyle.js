import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import App from "../../../../App";
import { AppColor } from "../../colors/AppColors";
const SignUpStyle = StyleSheet.create({
    text: {fontSize: wp('4.5'),color: AppColor.black, fontFamily: 'Poppins-SemiBold'},
    icon: {position: 'absolute',right: wp('5') ,},
    SignUpText: {color: AppColor.white, fontFamily: 'Poppins-SemiBold'},
})

export {SignUpStyle}