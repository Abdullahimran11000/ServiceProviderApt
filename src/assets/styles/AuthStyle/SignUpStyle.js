import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import App from "../../../../App";
import { AppColor } from "../../colors/AppColors";
const SignUpStyle = StyleSheet.create({
    mainView: {backgroundColor: AppColor.whiteShade,flex: 10,alignItems: 'center',justifyContent: 'center'},
    headerCont: {flex: 1},
    bodyCont: {flex:8.5, paddingVertical: wp('10')},
    text: {fontSize: wp('4.5'),color: AppColor.black, fontFamily: 'Poppins-SemiBold'},
    labelText : {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.red,},
    checkboxCont: {flexDirection: 'row', alignItems: 'center'},
    checkBoxText: {fontSize: wp('4'),fontFamily: 'Poppins-Light',color: AppColor.black,},
    buttonCont: {alignItems: 'center', marginVertical: wp('5')},
    spanText: {fontFamily: 'Poppins-SemiBold'},
    signUpText: {color: AppColor.white, fontFamily: 'Poppins-SemiBold'},
})

export {SignUpStyle}