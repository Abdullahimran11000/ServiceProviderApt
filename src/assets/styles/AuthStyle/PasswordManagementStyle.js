import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../../colors/AppColors";
const PasswordManagementStyle = StyleSheet.create ({

    mainView: {backgroundColor: AppColor.whiteShade, flex: 1, alignItems: 'center', justifyContent: 'center'},
    scrollView: {alignItems: 'center', width: wp('100')},
    alertText: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.red,width: wp('90'),},
    animationStyle: {width: wp('90'), height: hp('35')},
    tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black, textAlign:'center'},
    paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center', paddingBottom: wp('10')},
    textViewOne: { color: AppColor.black, alignSelf: 'center', fontFamily: 'Poppins-SemiBold', fontSize: wp('4'), width: wp('90')},
    iconTouchableStyle: {width: wp('10'),  justifyContent: 'center', alignItems: 'center'},
    touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center'},
    touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4'), textAlign: 'center'},
    buttonView: {alignItems: 'center', marginTop: wp('8'), marginBottom: wp('3')}
})

export {PasswordManagementStyle}




