import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColors';

const AppointmentStyle = StyleSheet.create({
     mainView:{display: 'flex', flex: 1 , backgroundColor:AppColor.whiteShade},
     viewOneContainer: {alignSelf:"center" ,marginTop: hp(5), marginBottom:hp(5)},
     viewOneContainerInnerView:{flexDirection:"row" , backgroundColor:AppColor.primary , borderRadius:20},
     viewOneContainerInnerViewOne:{flex:5 , top:hp(4)},
     viewOneContainerInnerViewFirstText:{fontSize:wp(10), left:wp(5) , color:AppColor.white},
     viewOneContainerInnerViewSecondText:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewTwoContainer:{alignSelf:"center"},
     viewTwoContainerInnerView:{flexDirection:"row" , backgroundColor: "#c45252" , borderRadius:20},
     viewTwoContainerInnerViewOne:{flex:5 , top:hp(4)},
     viewTwoContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20)},
     viewTwoContainerInnerViewOneTextOne:{fontSize:wp(10), left:wp(5) , color:AppColor.white},
     viewTwoContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewThreeContainer:{alignSelf:"center" ,marginTop: hp(5),},
     viewThreeContainerInnerView:{flexDirection:"row" , backgroundColor:"#81c5fc" , borderRadius:20},
     viewThreeContainerInnerViewOne:{flex:5 , top:hp(4)},
     viewThreeContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20)},
     viewThreeContainerInnerViewOneTextOne:{fontSize:wp(10), left:wp(5) , color:AppColor.white},
     viewThreeContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewFourContainer:{alignSelf:"center" ,marginTop: hp(5)},
     viewFourContainerInnerView:{flexDirection:"row" , backgroundColor:"#fcc2c2" , borderRadius:20},
     viewFourContainerInnerViewOne:{flex:5 , top:hp(4)},
     viewFourContainerInnerViewOneTextOne:{fontSize:wp(10), left:wp(5) , color:AppColor.white},
     viewFourContainerInnerViewOneTextTwo:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewFourContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20)},
     viewFiveContainer:{alignSelf:"center" ,marginTop: hp(5)},
     viewFiveContainerInnerView:{flexDirection:"row" , backgroundColor:"#e6b39e" , borderRadius:20},
     viewFiveContainerInnerViewOne:{flex:5 , top:hp(4)},
     viewFiveContainerInnerViewOneTextOne:{fontSize:wp(5), fontFamily:'Poppins-SemiBold', left:wp(6), top: hp(5),color:AppColor.white},
     viewFiveContainerInnerViewTwo:{flex:3 , width:wp(30), height:hp(20)}, 

})

export {AppointmentStyle};