import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColors';

const AppointmentStyle = StyleSheet.create({
     mainView:{display: 'flex', flex: 1 , backgroundColor:AppColor.whiteShade},
     viewOneContainer: {alignSelf:"center" ,marginTop: hp(5), marginBottom:hp(5)},
     viewOneContainerInnerView:{flexDirection:"row" , backgroundColor:AppColor.primary , borderRadius:20},
     viewOneContainerInnerViewFirstText:{fontSize:wp(10), left:wp(5) , color:AppColor.white},
     viewOneContainerInnerViewSecondText:{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white},
     viewSecondContainerInnerViewTwo:{alignSelf:"center"},
})

export {AppointmentStyle};