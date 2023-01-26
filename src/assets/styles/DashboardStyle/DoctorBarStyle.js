import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DoctorBarStyle = StyleSheet.create({

    mainView: {width: wp('90'), height:wp('0'), display: 'flex', flex: 1, flexDirection: 'row', alignSelf: 'center', margin: wp('4.5'),},
    textView: {position: 'absolute', left: 0},
    textStyle: {fontFamily: 'Poppins-Bold', color: AppColor.blackOpacity8},
    touchableView: {position: 'absolute', right: 0},
    touchableText: {fontFamily: 'Poppins-Light', color: 'rgba(0, 0, 0, 0.6)'}
})

export {DoctorBarStyle}