import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from "../colors/AppColors";

const CertificatesStyle = StyleSheet.create({
    mainView: { flex: 10, backgroundColor: AppColor.whiteShade,},
    headerCont: {flex: 0.8},
    bodyCont: {flex: 9},
    scrollView: {alignItems: 'center',flexGrow: 9.2, width: wp('100')},
    imageNeumorphCard: {width: wp("90"),height: hp('60'),backgroundColor: AppColor.whiteShade,shadowRadius: 4,borderRadius: wp('5'),flex: 10,alignItems: 'center',justifyContent: 'center', marginVertical: wp('5')},
    imageView: {width: wp('90'),height: hp('60')},
    flatListView: {width: wp('100'), paddingVertical: wp('6')},
    buttonView: {paddingBottom: wp('5')},
    neumorphListView: {width: wp('28'),height: hp('15'),borderRadius: wp('5'),backgroundColor: AppColor.whiteShade,shadowRadius: 2, overflow: 'hidden', marginLeft: wp('5'), marginRight: wp('2')},
    listImageView: {width: wp('28'), height: hp('15'), borderRadius: wp('5'), overflow: 'hidden'},
    buttonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4.5'),color: AppColor.white},
    crossSign: {position: 'absolute', right: wp('1'), top: wp('2'),  width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: AppColor.red, alignItems: 'center', justifyContent: 'center'},

})

export {CertificatesStyle}