import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DoctorBarStyle = StyleSheet.create({

    mainView: {width: wp('90'), flexDirection: 'row', alignSelf: 'center', backgroundColor: AppColor.whiteShade, justifyContent: 'space-between'},
    textView: {position: 'absolute', left: 0},
    textStyle: {fontFamily: 'Poppins-Bold', color: AppColor.blackOpacity8, fontSize: wp('4')},
    touchableView: {position: 'absolute', right: 0},
    touchableText: {fontFamily: 'Poppins-Light', color: AppColor.blackOpacity6}
})

export {DoctorBarStyle}