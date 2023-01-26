import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DoctorDepartmentStyle = StyleSheet.create({
    mainView: {backgroundColor: AppColor.whiteShade, height: hp('100'), width: wp('100'), position: 'absolute', top: wp('-4.9'), bottom: 0, left: wp("-5"), right:0},
    flatListView: {marginTop: wp('4'), width: wp('100'), justifyContent: 'center', alignItems: "center"}

});

export {DoctorDepartmentStyle};
