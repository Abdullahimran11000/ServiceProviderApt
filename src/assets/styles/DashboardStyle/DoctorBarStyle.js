import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DoctorBarStyle = StyleSheet.create({

    mainView: {width: wp('90'), height:wp('15'), display: 'flex', flexDirection: 'row', alignSelf: 'center', top: wp('5'), backgroundColor: AppColor.whiteShade},
    textView: {position: 'absolute', left: 0},
    textStyle: {fontFamily: 'Poppins-Bold', color: AppColor.blackOpacity8, fontSize: wp('4')},
    touchableView: {position: 'absolute', right: 0},
    touchableText: {fontFamily: 'Poppins-Light', color: 'rgba(0, 0, 0, 0.6)'}
})

export {DoctorBarStyle}