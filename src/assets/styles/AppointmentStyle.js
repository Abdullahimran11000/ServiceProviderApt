import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColors';

const AppointmentStyle = StyleSheet.create({
     mainView:{flex: 1, backgroundColor: AppColor.whiteShade},
     imageBackStyle: {width: wp(100), height: hp(40)},
     imageHead: {flex: 1, backgroundColor: AppColor.blackOpacity8},
     imageMiddle: {flex: 3.8,backgroundColor: AppColor.blackOpacity8, paddingVertical: wp('7')},
     scrollView: {alignItems: 'center',  width: wp('100')},
     cardTextCont: {flex: 3.5, justifyContent: 'center'},
     cardLottieCont: {flex: 1.5, alignItems: 'flex-end'},
     headerTextOne:{fontFamily:'Poppins-SemiBold', color:AppColor.white,fontSize: wp(8), paddingHorizontal: wp('5')},
     headerTextTwo:{fontFamily:'Poppins-Regular',alignSelf:'center' ,color:AppColor.white,fontSize: wp(3.6), paddingHorizontal: wp('5')},
     viewOneContainerInnerView:{flexDirection:"row", width: wp('80')},
     viewOneContainerInnerViewFirstText:{fontSize:wp(10), color:AppColor.white},
     viewOneContainerInnerViewSecondText:{fontFamily:'Poppins-SemiBold',color:AppColor.white},

})

export {AppointmentStyle};