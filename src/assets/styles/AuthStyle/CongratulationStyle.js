import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';


const CongratulationStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColor.whiteShade, flex: 1, alignItems: 'center', justifyContent: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center', width: wp('90'), marginVertical: wp('5')},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4')},
});

export {CongratulationStyle};
