import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const DrawerStyle = StyleSheet.create({
    mainView: {flex: 1, backgroundColor: AppColor.primary},
    baseViewProfilePic: {width: wp('16'), height: wp('16'), borderRadius: wp('8'), marginLeft: wp('5'), marginTop: wp('5')},
    imageStyle: {width: wp('16'), height: wp('16'), borderRadius: wp('8')},
    nameText: {marginLeft: wp('5'), marginTop: wp('2'), fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: AppColor.white},
    designationText: {marginLeft: wp('5'), fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: AppColor.white},
    menuView: {marginTop: wp('12'), marginLeft: wp('5')},
    menuView2: {marginTop: wp("-2"), marginLeft: wp('5')},
    menuItemView: {width: wp('60'), marginBottom: wp('8'), flexDirection: 'row'},
    menuItemText: {marginLeft: wp('3'), fontFamily: 'Poppins-Medium', fontSize: wp('3.7'), color: AppColor.white},
    touchableView: {width: wp('50')},
    logOutView: {position: 'absolute', bottom: 0, flexDirection: 'row', marginLeft: wp('5'), marginBottom: wp('7')},

    smallAnimatedView: {flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', position: 'absolute', left: 0, right: 0, bottom: 0,top: 0},
    largeAnimatedView: {flex: 1, backgroundColor: AppColor.whiteShade, position: 'absolute', left: 0, right: 0, bottom: 0,top: 0},

})

export {DrawerStyle}