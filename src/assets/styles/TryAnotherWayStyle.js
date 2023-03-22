
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const TryAnotherWayStyle = StyleSheet.create({
    mainView: {backgroundColor: AppColor.whiteShade, flex: 10, alignItems: 'center', },
    headerCont: {flex:1},
    bodyCont: {flex: 9},
    scrollView: {width: wp('100'),flexGrow: 9,alignItems: 'center'},
    viewOne: {alignItems: 'center', marginTop: hp('10')},
    neomorphOne: { width: wp('50'),height: wp('50'),borderRadius: wp('50'),backgroundColor: AppColor.railBorderColor,shadowRadius: 4, alignItems: 'center', justifyContent: 'center'},
    neomorphThree: {width: wp('42'),height: wp('42'),borderRadius: wp('42'),backgroundColor: AppColor.whiteShade,shadowRadius: 0, alignItems: 'center', justifyContent: 'center'},
    neomorphFour: {width: wp('36'),height: wp('36'),borderRadius: wp('36'),backgroundColor: AppColor.whiteShade,shadowRadius: 4, alignItems: 'center', justifyContent: 'center'},
    lottyStyle: {width: wp('28'), height: wp('28'), top: wp('-2')},
    text:{fontFamily: 'Poppins-SemiBold',fontSize: wp(4.5),color: AppColor.black, width: wp('90'), paddingTop: wp('13')},
    neomorphTwo:{ width: wp(90),height: hp(12),alignItems: 'center',justifyContent: 'center',borderRadius: wp('5'),backgroundColor: AppColor.whiteShade,shadowRadius: 4, marginVertical: wp('3')},
    textOne: {fontFamily: 'Poppins-Light',fontSize: wp('3.5'),width: wp(90),alignSelf: 'center',color: AppColor.red, paddingVertical: wp('2')},
    textTwo:{fontFamily: 'Poppins-Bold',color: AppColor.white, fontSize: wp(4)},
    textInputStyle:{fontFamily: 'Poppins-Medium',fontSize: wp('3.5'),height:hp(8), paddingBottom: wp('2'), color: AppColor.blackOpacity8},
    textContainerStyle:{borderRadius: wp('3'),backgroundColor: AppColor.white, height: hp('8')},
    containerStyle:{backgroundColor: AppColor.whiteShade,width: wp('80') , height: hp('8'), borderRadius: wp('3')},
    codeTextStyle:{fontSize: wp('4'), fontFamily: 'Poppins-Bold', color: AppColor.black},

})

export {TryAnotherWayStyle}