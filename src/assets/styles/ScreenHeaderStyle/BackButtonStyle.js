import { StyleSheet } from "react-native";
import { AppColor } from "../../colors/AppColors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const BackButtonStyle = StyleSheet.create({
    headerView: {display: 'flex',flex: 1, flexDirection: 'row',marginTop: wp('4.5'), justifyContent: 'center', height:hp('5.9'), backgroundColor: AppColor.whiteShade},
    iconView: {position: 'absolute', left: 0, paddingLeft: wp('3.5')},
    headingText: {fontFamily: 'Poppins-Bold', fontSize: wp('4.9'), color: "black"},
})
export {BackButtonStyle}
