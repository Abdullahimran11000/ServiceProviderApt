import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const DoctorCardStyle = StyleSheet.create({
    parentView: {width: wp('37'), height: hp('40'), alignSelf: 'center'},
    childView1: {width: wp('36'), height: hp('37'), marginTop: wp('4.5')},
    boxView: {width: wp('36'), height: wp('36'), borderRadius: wp('8'), marginTop: wp('3')},
    deptView: {display: 'flex', flex: 1, flexDirection: 'row', width: wp('30')},
    buttonView: {position: 'absolute', right: 0, width: wp('6'), height: wp('6'), borderRadius: wp('6'), justifyContent: 'center', alignItems: 'center'},
    buttonIcon: {marginLeft: wp('0.5') , color: AppColor.white},


})

export {DoctorCardStyle}