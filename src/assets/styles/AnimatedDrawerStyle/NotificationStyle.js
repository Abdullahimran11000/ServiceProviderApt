import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';

const NotificationStyle = StyleSheet.create({
    headerMainView: {alignSelf: 'center'},
    notificationsBar: {display: 'flex',flexDirection: 'row',backgroundColor: AppColor.whiteShade,width: wp(90),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,},
    headCont: {width: wp('90'), height: hp('9'), marginLeft: wp('4'), marginRight: wp('4'), marginBottom: wp('0'), alignSelf: 'center', backgroundColor: AppColor.purpleOpacity, borderRadius: wp('4'), justifyContent:"center"},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor: AppColor.blackOpacity1, alignItems: 'center', justifyContent: 'center'},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('20')},
    renderItemHeaderFontFirst: {fontFamily:'Poppins-SemiBold',color:'black', textAlign: 'right', padding: wp('5')},
    renderItemHeaderFontSecond: {position: 'absolute', right: 0},
    renderItemHeaderFontSecondTextStyle: {fontFamily:'Poppins-Regular',color:AppColor.blackOpacity4,top:7,},
    iconstyle:{alignSelf:'center', width: wp('15'), height: wp('15'), borderRadius: wp('15'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},
    iconstyle2:{alignItems:'center', position: 'absolute', right: wp('5')},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Medium', fontSize: wp('3.4'), width: wp('55'), color: AppColor.black, textAlign: 'left', lineHeight: wp('5.5')},
    middleInnerFirstCont: {marginTop: wp('2'), marginBottom: wp('1.8'), width: wp('55')},
    middleInnerSecondCont: {marginTop: wp(-0.8)},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize: wp("3.2"), color: AppColor.blackOpacity4},
    innerItems: {flex: 7, flexDirection: 'row', width: wp('90'), height: hp('12'), alignItems: 'center', backgroundColor: AppColor.whiteShade, borderRadius: wp('4'), justifyContent:'space-between',shadowRadius:3, marginHorizontal: wp('5'), marginVertical: wp('3'), paddingHorizontal: wp('3')},
    header: {display: 'flex',flexDirection: 'row',backgroundColor: AppColor.whiteShade,width: wp(90),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,shadowRadius:4},
    headerbackButton: {width: wp('10'), height: wp('10'), borderRadius: wp('9'), backgroundColor: AppColor.white, marginLeft: wp('2'), alignItems: 'center', justifyContent: 'center',},
    headerText:{fontFamily: 'Poppins-SemiBold', width: wp('40'), marginLeft: wp('20'), fontSize: 14, color: AppColor.black},
    firstContainerOfMainView: {backgroundColor: AppColor.whiteShade, width: wp(95), alignSelf: 'center', borderRadius: 20, overflow: 'hidden'},
    innerViewOfFirstContainer: {height: hp(5), width: wp(90), alignSelf: 'center',},
})

export {NotificationStyle}