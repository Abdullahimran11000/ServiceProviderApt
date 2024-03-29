import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from '../../../colors/AppColors';

const TextInputStyle = StyleSheet.create({
  inputStyle: {
    width: wp('70'),
    height: hp('7'),
    borderRadius: wp('3'),
    backgroundColor: AppColor.whiteShade,
    fontFamily: 'Poppins-Light',
    fontSize: wp('4'),
    color: AppColor.blackOpacity8,
  },
});

export {TextInputStyle};
