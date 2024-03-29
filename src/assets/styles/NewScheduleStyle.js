import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const NewScheduleStyle = StyleSheet.create({
    viewOne:{marginTop: wp('7'), width: wp('90'), alignSelf: 'center'},
    viewOneText:{fontFamily:'Poppins-SemiBold' , fontSize:wp("4.5") , color:AppColor.whiteOpacity},
    viewTwo:{flexDirection: "row",width: wp('90'), alignSelf: 'center', justifyContent: 'space-around', marginVertical: wp('4')},
    viewTwoTextOne:{fontFamily:'Poppins-SemiBold' , fontSize:wp(3)},
    viewTwoTextTwo:{fontFamily:'Poppins-SemiBold' , fontSize:wp(3)},
    viewThree:{display:"flex" , flexDirection: "row",justifyContent:"space-evenly",marginTop: hp(5),marginRight:wp(10)},
    viewThreeTextOne:{fontFamily:'Poppins-SemiBold', fontSize:wp(3)},
    viewThreeTextTwo:{fontFamily:'Poppins-SemiBold', fontSize:wp(3)},
    viewFour:{},
    viewFourTextInput:{ width:wp(82), fontFamily:'Poppins-SemiBold'},
    viewFive:{width: wp('100'), alignItems: 'center', height: hp('8') },
    viewFiveText:{fontFamily:'Poppins-SemiBold', color: AppColor.white},
    // icon: {position: 'absolute',right: wp('5'),},
})
export {NewScheduleStyle}