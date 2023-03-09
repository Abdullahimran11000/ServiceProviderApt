import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import App from "../../../App";
import { AppColor } from "../colors/AppColors";

const CertificatesStyle = StyleSheet.create({
    mainView: {display: 'flex', flex: 1, backgroundColor: AppColor.whiteShade},

    headCont: {width: wp('90'), marginTop: wp('4.5'), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContMenuCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('0'), justifyContent: 'center'},
    textCont : {position: 'absolute', right: 0},
    textStyle: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6, width: wp('52'), textAlign: "right"},
    textStyle1: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6, width: wp('30'), textAlign: 'center'},

    imageViewCard: {alignSelf: 'center', marginBottom: wp('6')},
    imageNeumorphCard: {width: wp("90"),height: hp('60'),backgroundColor: AppColor.whiteShade,marginTop: wp('4'),shadowRadius: 4,borderRadius: wp('5'),display: 'flex',flex: 10,alignItems: 'center',justifyContent: 'center',},
    noImageView: {display: 'flex',flex: 8.5,width: wp('75'),height: hp('50'),alignItems: 'center',justifyContent: 'center'},
    imageView: {width: wp('90'),height: hp('60')},

    neumorphListView: {width: wp('28'),height: hp('15'),borderRadius: wp('5'),backgroundColor: AppColor.whiteShade,shadowRadius: 2, overflow: 'hidden', marginLeft: wp('5'), marginRight: wp('2'), margin: wp('5')},
    listImageView: {width: wp('28'), height: hp('15'), borderRadius: wp('5'), overflow: 'hidden'},

    buttonView: {width: wp('90'),alignSelf: 'center',marginTop: wp('5'),marginBottom: wp('8'),alignItems: 'center'},
    buttonText: {fontFamily: 'Poppins-Bold',fontSize: wp('4.5'),color: AppColor.white},

    crossSign: {position: 'absolute', display: 'flex', flexDirection: 'row',  top: wp('2'), right: wp('1'), width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: AppColor.red, alignItems: 'center', justifyContent: 'space-evenly'},

})

export {CertificatesStyle}