import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const NotificationStyle = StyleSheet.create({
    mainView: {flex: 10,backgroundColor: AppColor.whiteShade},
    headerCont: {flex: 1},
    middleCont: {flex: 0.5, paddingHorizontal: wp('5')},
    bodyCont: {flex: 8.5},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor: AppColor.blackOpacity1, alignItems: 'center', justifyContent: 'center'},
    renderItemHeaderFontFirst: {fontFamily:'Poppins-SemiBold',color:'black', textAlign: 'right'},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Medium', fontSize: wp('3.4'), width: wp('55'), color: AppColor.black, textAlign: 'left', lineHeight: wp('5.5')},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize: wp("3.2"), color: AppColor.blackOpacity4},
    innerItems: {flex: 7, flexDirection: 'row', width: wp('90'), height: hp('12'), alignItems: 'center', backgroundColor: AppColor.whiteShade, borderRadius: wp('4'), justifyContent:'space-between',shadowRadius:3, marginHorizontal: wp('5'), marginVertical: wp('3'), paddingHorizontal: wp('3')},
})

export {NotificationStyle}