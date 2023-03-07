import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const TryAnotherWayStyle = StyleSheet.create({
    viewOne: {alignItems: 'center', marginTop: hp('10')},
    neomorphOne: {width: wp('50'),height: wp('50'),borderRadius: wp('50'),backgroundColor: AppColor.railBorderColor,shadowRadius: 4, alignItems: 'center', justifyContent: 'center'},
    neomorphThree: {width: wp('42'),height: wp('42'),borderRadius: wp('42'),backgroundColor: AppColor.whiteShade,shadowRadius: 0, alignItems: 'center', justifyContent: 'center'},
    neomorphFour: {width: wp('36'),height: wp('36'),borderRadius: wp('36'),backgroundColor: AppColor.whiteShade,shadowRadius: 4, alignItems: 'center', justifyContent: 'center'},
    lottyStyle: {width: wp('28'), height: wp('28'), top: wp('-2')},
    viewTwo:{width: wp('90'), alignSelf: 'center', marginTop: hp(5)},
    text:{ fontFamily: 'Poppins-SemiBold',fontSize: wp(4.5),color: AppColor.black},
    viewThree:{alignSelf: 'center'},
    neomorphTwo:{ width: wp(90),marginTop: hp(1),height: hp(13),alignItems: 'center',justifyContent: 'center',borderRadius: 20,overflow: 'hidden',backgroundColor: AppColor.whiteShade,shadowRadius: 4},
    textOne: {fontFamily: 'Poppins-Light',fontSize: wp('3.7'),width: wp(90),alignSelf: 'center',marginTop: hp(2),color: AppColor.red},
    viewFour: {alignItems: 'center', marginTop: hp(5)},
    textTwo:{fontFamily: 'Poppins-SemiBold',color: AppColor.white, fontSize: wp(5)},
    
})

export {TryAnotherWayStyle}