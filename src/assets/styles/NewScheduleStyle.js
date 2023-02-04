import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from "../colors/AppColors";

const NewScheduleStyle = StyleSheet.create({
    mainView:{backgroundColor:AppColor.whiteShade , height:hp(100)  ,width: wp(100) , justifyContent:"center" , alignItems:"center" , alignSelf:"center"},
    viewOne:{bottom:hp(7)},
    viewOneText:{fontFamily:'Poppins-SemiBold' , fontSize:wp(6) , color:AppColor.whiteOpacity},
    viewTwo:{display:"flex" , flexDirection: "row", marginRight:wp(10)},
    viewTwoTextOne:{fontFamily:'Poppins-SemiBold' , fontSize:wp(3)},
    viewTwoTextTwo:{fontFamily:'Poppins-SemiBold' , fontSize:wp(3)},
    viewThree:{display:"flex" , flexDirection: "row",justifyContent:"space-evenly",marginTop: hp(5),marginRight:wp(10)},
    viewThreeTextOne:{fontFamily:'Poppins-SemiBold', fontSize:wp(3)},
    viewThreeTextTwo:{fontFamily:'Poppins-SemiBold', fontSize:wp(3)},
    viewFour:{marginTop:hp(5) , alignSelf:"center" },
    viewFourTextInput:{ left:wp(7) , width:wp(82), fontFamily:'Poppins-SemiBold' ,alignSelf:"flex-start"},
    viewFive:{marginTop:hp(5) , alignSelf:"center" },
    viewFiveText:{fontFamily:'Poppins-SemiBold', color:'white'},
})
export {NewScheduleStyle}