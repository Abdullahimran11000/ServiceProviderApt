import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DrawerStyle = StyleSheet.create({
    mainView: {flex: 1, display: 'flex', backgroundColor: AppColor.primary},
    topView: {width: wp('90'), alignSelf: 'center', paddingTop: wp('10')},
    middleView: {marginTop: wp('8')},
    imageStyle: {width: wp('16'), height: wp('16'), borderRadius: wp('8')},
    nameText: {marginTop: wp('2'), fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.white},
    designationText: {fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: AppColor.white},
    menuItemView: {width: wp('90'), flexDirection: 'row', paddingTop: wp('5')},
    menuItemText: {marginLeft: wp('3'), fontFamily: 'Poppins-Medium', fontSize: wp('3.7'), color: AppColor.white},
    touchableView: {width: wp('50')},
    logOutView: {flexDirection: 'row'},

    smallAnimatedView: {flex: 1, backgroundColor: AppColor.whiteOpacity3, position: 'absolute', left: 0, right: 0, bottom: 0,top: 0},
    largeAnimatedView: {flex: 1, backgroundColor: AppColor.whiteShade, overflow: 'hidden', position: 'absolute', left: 0, right: 0, bottom: 0,top: 0},

})

export {DrawerStyle}