import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColors';

const AppointmentStyle = StyleSheet.create({
     mainView:{display: 'flex' , backgroundColor:AppColor.whiteShade },

     imageBackStyle: {width: wp(100), height: hp(40)},
     imageBackView: {
          width: wp(100),
          height: hp(40),
          backgroundColor: AppColor.blackOpacity8,
        },

     headerTextOne:{fontFamily:'Poppins-SemiBold', color:AppColor.white,fontSize: wp(8), paddingHorizontal: wp('5')},
     headerTextTwo:{fontFamily:'Poppins-SemiBold',alignSelf:'center' ,color:AppColor.white,fontSize: wp(3.6), paddingHorizontal: wp('5')},
     viewOneContainer: {alignSelf:"center" ,marginTop: hp(5), marginBottom:hp(5)},
     viewOneContainerInnerView:{flexDirection:"row", alignItems: 'center', justifyContent: 'space-between', width: wp('80') },
     viewOneContainerInnerViewFirstText:{fontSize:wp(10), color:AppColor.white},
     viewOneContainerInnerViewSecondText:{fontFamily:'Poppins-SemiBold',color:AppColor.white},
     viewOneContainerInnerViewTwo: {width: wp(30), height: hp(20)},

     viewTwoContainer:{alignSelf:"center", marginTop: hp('5')},
     viewTwoContainerInnerView:{flexDirection:"row" , borderRadius:20, width: wp(90) , height: hp(18) , alignItems:'center' },
     viewTwoContainerInnerViewOne:{flex:5 },
     viewTwoContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20) , alignItems:'center' , justifyContent:'center'},
     viewTwoContainerInnerViewOneTextOne:{fontSize:wp(10), width:wp(48),alignSelf:'center' , color:AppColor.white},
     viewTwoContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     
     viewThreeContainer:{alignSelf:"center"},
     viewThreeContainerInnerView:{flexDirection:"row" , borderRadius:20, width: wp(90) , height: hp(20) , alignItems:'center' },
     viewThreeContainerInnerViewOne:{flex:5},
     viewThreeContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20) , alignItems:'center'  ,justifyContent:'center'},
     viewThreeContainerInnerViewOneTextOne:{fontSize:wp(10), width:wp(45),alignSelf:'center', color:AppColor.white},
     viewThreeContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},

     viewFourContainer:{alignSelf:"center" ,marginTop: hp(5), marginBottom: hp('5')},
     viewFourContainerInnerView:{flexDirection:"row"  , borderRadius:20 , width: wp(90) , height: hp(20) , alignItems:'center' },
     viewFourContainerInnerViewOne:{flex:5 },
     viewFourContainerInnerViewOneTextOne:{fontSize:wp(10), width:wp(48),alignSelf:'center', color:AppColor.white},
     viewFourContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewFourContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20) , justifyContent:'center' , alignItems:'center'},

     viewFiveContainer:{alignSelf:"center"},
     viewFiveContainerInnerView:{flexDirection:"row", borderRadius:20},
     viewFiveContainerInnerViewOne:{flex:5 },
     viewFiveContainerInnerViewOneTextOne:{fontSize:wp(5), fontFamily:'Poppins-SemiBold', width:wp(45),alignSelf:'center', top: hp(5),color:AppColor.white},
     viewFiveContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20) , alignItems:'center' , justifyContent:'center'}, 

})

export {AppointmentStyle};