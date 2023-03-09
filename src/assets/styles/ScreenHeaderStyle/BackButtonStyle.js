import { StyleSheet } from "react-native";
import { AppColor } from "../../colors/AppColors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const BackButtonStyle = StyleSheet.create({
    headerView: { flexDirection: 'row', width: wp('90'), alignSelf: 'center', backgroundColor: AppColor.whiteShade, marginTop: wp('3')},
    headingText: {fontFamily: 'Poppins-Bold', width: wp('74'), fontSize: wp('5'), color: AppColor.black, textAlign: 'center'},
})
export {BackButtonStyle}
