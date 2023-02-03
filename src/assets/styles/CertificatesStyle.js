import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from "../colors/AppColors";

const CertificatesStyle = StyleSheet.create({
    mainView: {display: 'flex', flex: 1, backgroundColor: AppColor.whiteShade},

    headCont: {width: wp('90'), height: hp('6'), marginTop: wp('4.5'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContMenuCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('0'), justifyContent: 'center'},
    textCont : {position: 'absolute', right: 0},
    textStyle: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6},
    textStyle1: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6, width: wp('50'), position: 'absolute', left: wp('8')},

    imageViewCard: {alignSelf: 'center', marginBottom: wp('6')},
    imageNeumorphCard: {width: wp(90),height: hp('60'),backgroundColor: AppColor.whiteShade,marginTop: wp('4'),shadowRadius: 4,borderRadius: wp('4'),display: 'flex',flex: 10,alignItems: 'center',justifyContent: 'center',},
    noImageView: {display: 'flex',flex: 8.5,width: wp('75'),height: hp('45'),alignItems: 'center',justifyContent: 'center'},
    imageView: {width: wp('90'),height: hp('60')},

    neumorphListView: {width: wp('35'),height: hp('15'),borderRadius: wp('5'),backgroundColor: AppColor.blackOpacity4,shadowRadius: 4,marginBottom: wp('3'),marginRight: wp('3'),marginLeft: wp('5')},
    listImageView: {width: wp('35'), height: hp('15'), borderRadius: wp('5')},

    buttonView: {width: wp('90'),alignSelf: 'center',marginTop: wp('5'),marginBottom: wp('8'),alignItems: 'center'},
    buttonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4.5'),color: AppColor.white},

    crossSign: {position: 'absolute', top: wp('1.5'), right: wp('2'), width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: '#f79c9c', alignItems: 'center', justifyContent: 'center'},

})

export {CertificatesStyle}