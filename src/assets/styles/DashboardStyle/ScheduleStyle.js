import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColors';
const ScheduleStyle = StyleSheet.create({
    firstHeading: {width: wp(100), alignSelf: 'center'},
    rowTwoView: {  flexDirection: 'row',justifyContent: 'space-evenly', top: hp(2), width: wp(100), alignSelf: 'center', },
    bookAppointmentButton:{ textAlign: 'center',color: 'white',fontFamily: 'Poppins-SemiBold',},
    lottyView:{ width: wp('55'),height: wp('55'),borderRadius:wp('55'),justifyContent: 'center',alignItems: 'center',backgroundColor: AppColor.whiteShade,shadowRadius: 5,},
    lottyViewInner:{width: wp('45'),height: wp('45'),borderRadius:wp('45'),backgroundColor: AppColor.whiteShade,shadowRadius: 5,alignItems: 'center',justifyContent: 'center',},
    modalMiddleView:{ fontFamily: 'Poppins-Bold', textAlign: 'center', color: 'black', marginTop: hp(4), },
    modalMiddleView2:{ fontFamily: 'Poppins-Light', fontSize: 12, textAlign: 'center', color: 'black',},
    modalButtonView:{ padding: 10, alignItems: 'center', marginVertical: hp(3), },
    calenderView: {width: wp(100), marginTop: hp(1), height: hp(42), alignSelf: 'center',},
    headingFirst: {fontFamily: 'Poppins-Bold',color: 'black',fontSize: 14,marginLeft: wp(5),marginTop: hp(5)},
    headingsecond: {fontFamily: 'Poppins-Bold',color: 'black',width: wp(100),marginLeft: wp('10'),alignSelf: 'center',marginTop: 15,},
    viewFirst: {flexDirection: 'row',justifyContent: 'space-evenly',marginTop: hp(2),width: wp(100),alignSelf: 'center'},
    firstButton: {backgroundColor: '#E8E4E4', width: wp(27.5), marginLeft: wp(8), borderRadius: 20, justifyContent: 'center',},
    buttons: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8),padding: 3,borderRadius: 20,justifyContent: 'center',},
    buttonsTextRow1: {color: 'black',fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',},
    buttonsTextRow2: {color: 'black', fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',justifyContent:'center',},
    buttonsTextRow3: {color: 'black',fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',},
    buttonsTextRow3LastButton: {width: wp(100), alignSelf: 'center', marginTop: hp(4.5)},
    buttonWithMarginRight: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8),padding: 3,borderRadius: 20,marginRight: wp(8),},
    buttonsOfAppointmentDetails: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8.5),padding: 3,borderRadius: 20,},
    row2MainView: {flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp(2.5), width: wp(100), alignSelf: 'center'},
    row2ButtonStyle: {backgroundColor: '#E8E4E4', width: wp(27.5), marginLeft: wp(8.5), padding: 3, borderRadius: 20,},
    row2Button3Style:{backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8.5),padding: 3,borderRadius: 20,marginRight: wp(8.5),},
    bookAppointmentButtonStyle: {alignItems: 'center', top: hp(5), height: hp(15)},
    modalDoneButton: { textAlign: 'center', color: 'white', fontFamily: 'Poppins-SemiBold', },
    modal: {width: wp(90),height: hp(80),overflow: 'hidden',borderRadius: wp('10'),alignItems: 'center',justifyContent: 'center',backgroundColor: AppColor.whiteShade,},
    modalContainer: {flex: 1,backgroundColor: 'rgba(0,0,0,0.7)',position: 'absolute',top: 0,right: 0,bottom: 0,left: 0,},
})

export {ScheduleStyle}