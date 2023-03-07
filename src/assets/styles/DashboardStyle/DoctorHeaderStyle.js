import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { AppColor } from "../../colors/AppColors";

const DoctorHeaderStyle = StyleSheet.create({
    headerView: {display: 'flex',flex: 1, flexDirection: 'row',marginTop: 15, justifyContent: 'center'},
    iconView: {position: 'absolute', left: 0},
    iconViews: {position: 'absolute', right: 0},
    touchableView: {width: wp(9) , height:wp(9) , backgroundColor: AppColor.whiteOpacity3, borderRadius: wp(4.5), alignItems: 'center', justifyContent: 'center'},
    headingText: {fontFamily: 'Poppins-Bold', fontSize: 16, color: AppColor.black},
})
export {DoctorHeaderStyle}
