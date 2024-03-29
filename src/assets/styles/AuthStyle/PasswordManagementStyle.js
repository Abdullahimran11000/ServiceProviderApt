import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../../colors/AppColors";
const PasswordManagementStyle = StyleSheet.create ({

    mainView: {backgroundColor: AppColor.whiteShade, flex: 1, alignItems: 'center', justifyContent: 'center'},
    animationView: {alignItems: 'center'},
    animationStyle: {width: wp('90'), height: hp('35')},
    tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black, textAlign:'center'},
    headingView: {alignItems: 'center', width: wp('90'), alignSelf: 'center', paddingVertical: wp('5')},
    paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center'},
    inputView: {marginBottom: hp('4')},
    labelView: {width: wp('90') ,flex: 3},
    labelViewTextTwo:{color: AppColor.black, height: hp(5), fontFamily: 'Poppins-SemiBold',},
    labelViewTextThree: {color: AppColor.black, width: wp(80),alignSelf: 'center',fontFamily: 'Poppins-SemiBold',},
    textViewOne: { color: AppColor.black, alignSelf: 'center', fontFamily: 'Poppins-SemiBold', fontSize: wp('4'), width: wp('90')},
    inputViewInnerView: {display: 'flex',flexDirection: 'row',flex: 8,width: wp(90),alignSelf: 'center',},
    labelText1: {color: AppColor.black, fontFamily: 'Poppins-Bold',fontSize: wp('3.9'),width:wp(80),alignSelf:'center'},
    labelText2: {color: AppColor.black, fontFamily: 'Poppins-Bold',fontSize: wp('3.9'),width:wp(80),alignSelf:'center'},
    inputStyleView: {flex: 1, flexDirection: 'row' , marginBottom: wp('3'), width:wp('90'), height: hp('6.5'), borderRadius:wp('3'), backgroundColor: AppColor.white, alignItems: 'center',alignSelf:'center'},
    iconTouchableStyle: {width: wp('10'),  justifyContent: 'center', alignItems: 'center'},
    touchableView:{position: 'relative' , alignItems: "center" , marginTop: wp('10')},
    touchableText1: {color: AppColor.red, fontFamily: "Poppins-Light" , fontSize: wp('3.5')},
    touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center'},
    touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4'), textAlign: 'center'},
    buttonView: {alignItems: 'center', marginTop: wp('8'), marginBottom: wp('3')}
})

export {PasswordManagementStyle}




