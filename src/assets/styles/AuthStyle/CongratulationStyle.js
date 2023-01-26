import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';


const CongratulationStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade},
  headingView:{alignItems:'center' , marginTop: wp('10')},
  animationView: {alignItems: 'center' , marginTop: wp('15')},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraView: {alignItems: 'center', width: wp('80'), alignSelf: 'center', marginTop: wp('5')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center'},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center' },
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4')},
  flatListView: {width: wp('90'), alignSelf: 'center'},
});

export {CongratulationStyle};
