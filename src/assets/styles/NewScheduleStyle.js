import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const NewScheduleStyle = StyleSheet.create({
    mainView: {flex: 10,backgroundColor: AppColor.whiteShade,alignItems: 'center'},
    headerCont: {flex: 1},
    bodyCont: {flex: 9},
    calendarView: {paddingTop: wp('8')},
    alertText: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.red,},
    scrollView: {flexGrow: 9, alignItems: 'center', width: wp('100')},
    viewOneText:{fontFamily:'Poppins-SemiBold' , fontSize:wp("4.5") , color:AppColor.whiteOpacity},
    viewTwo:{flexDirection: "row",width: wp('90'), alignSelf: 'center', justifyContent: 'space-around'},
    buttonView: {paddingVertical: wp('5')},
    viewTwoTextOne:{fontFamily:'Poppins-SemiBold' , fontSize:wp(3)},
    buttonText: {fontFamily: 'Poppins-Bold', color: AppColor.white, fontSize: wp('4')}
})
export {NewScheduleStyle}