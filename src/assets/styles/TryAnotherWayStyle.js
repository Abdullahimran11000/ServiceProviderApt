import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const TryAnotherWayStyle = StyleSheet.create({
    viewOne: {alignItems: 'center', marginTop: hp('10')},
    neomorphOne: {width: wp('50'),height: hp('25'),borderRadius: wp('30'),backgroundColor: AppColor.whiteShade,shadowRadius: 4},
    lottyStyle: {alignSelf: 'center',height: hp('38'), bottom: hp('3'), left: wp(0.5)},
    viewTwo:{width: wp('90'), alignSelf: 'center', marginTop: hp(5)},
    text:{ fontFamily: 'Poppins-SemiBold',fontSize: wp(4.5),color: AppColor.black},
    viewThree:{alignSelf: 'center'},
    neomorphTwo:{ width: wp(90),marginTop: hp(1),height: hp(13),alignItems: 'center',justifyContent: 'center',borderRadius: 20,overflow: 'hidden',backgroundColor: AppColor.whiteShade,shadowRadius: 4},
    textOne: {fontFamily: 'Poppins-Light',fontSize: wp('3.7'),width: wp(90),alignSelf: 'center',marginTop: hp(2),color: AppColor.red},
    viewFour: {alignItems: 'center', marginTop: hp(5)},
    textTwo:{fontFamily: 'Poppins-SemiBold',color: AppColor.white, fontSize: wp(5)},
    
})

export {TryAnotherWayStyle}