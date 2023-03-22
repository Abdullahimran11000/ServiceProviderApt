import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import App from "../../../App";
import { AppColor } from "../colors/AppColors";

const HeaderStyle = StyleSheet.create({
    headCont: {width: wp('90'), marginTop: wp('4.5'), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    textStyle: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6, width: wp('52'), textAlign: "right"},
    textStyle1: {fontFamily: "Poppins-Bold", fontSize: wp('4.5'), color: AppColor.blackOpacity6, width: wp('30'), textAlign: 'center'},

})

export {HeaderStyle}