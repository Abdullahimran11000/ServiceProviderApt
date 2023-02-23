import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from "../colors/AppColors";

const PatientProfileStyle = StyleSheet.create({

    parentView: {display: 'flex', flex: 1},
    innerView: {display: 'flex',backgroundColor: AppColor.whiteShade},
    patientParentCard: {marginTop: wp('5')},
    imageViewCard: {alignSelf: 'center', marginBottom: wp('6'), marginTop: wp('8')},
    imageNeumorphCard: {width: wp("90"),height: hp('50'),backgroundColor: AppColor.whiteShade,marginTop: wp('4'),shadowRadius: 4,borderRadius: wp('5'),display: 'flex',flex: 10,alignItems: 'center',justifyContent: 'center',},
    noImageView: {display: 'flex',flex: 8.5,width: wp('75'),height: hp('50'),alignItems: 'center',justifyContent: 'center'},
    iconTextStyle: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.blackOpacity7,marginTop: wp('2')},
    flatListView: {height: hp('52'),width: wp('100'),overflow: 'hidden',marginTop: wp('10'),marginBottom: wp('2'),backgroundColor: AppColor.whiteShade},
    forwardButtonView: {width: wp('90'),height: wp('12'),alignSelf: 'center',justifyContent: 'center',marginBottom: wp('8'),},
    forwardButtonInnerView: {width: wp('10'),height: wp('10'),borderRadius: wp('8'),backgroundColor: AppColor.whiteShade,shadowRadius: 4,alignItems: 'center',justifyContent: 'center',position: 'absolute',right: 0,},
    forwardLottie: {width: wp('8'), height: wp('8')},
    uploadParentView: {display: 'flex',flexDirection: 'row',width: wp('90'),height: hp('17'),marginBottom: wp('10'),marginLeft: wp('5'),shadowRadius: 4,backgroundColor: AppColor.whiteShade,borderRadius: wp(5),alignItems: 'center',justifyContent: 'space-evenly',},
    uploadTextStyle: {fontFamily: 'Poppins-Medium',color: AppColor.black,fontSize: wp('4'),},
    lottieView: {width: wp('30'),height: hp('12'),backgroundColor: AppColor.whiteShade,borderRadius: wp('5'),shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},
    lottieStyle: {width: wp('15'), height: wp('20')},
    submitButtonView: {width: wp('90'),alignSelf: 'center',alignItems: 'center',marginBottom: wp('10')},
    buttonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4.5'),color: AppColor.white}
})  

export {PatientProfileStyle}