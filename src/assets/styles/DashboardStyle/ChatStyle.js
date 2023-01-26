import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from '../../colors/AppColors';

const ChatStyle = StyleSheet.create({
    mainView: {width: wp(100), height: hp(100), alignSelf: 'center'},
    SearchBar: {display: 'flex',flexDirection: 'row',backgroundColor: 'white',width: wp(14),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,left: wp(2),top: hp(2)},
    backbutton: { width: wp('10'),height: wp('10'),borderRadius: wp('9'),backgroundColor: 'rgba(0,0,0,0.07)',marginLeft: wp('2'),alignItems: 'center',justifyContent: 'center'},
    headerView: {bottom: hp(8),justifyContent:"center",left: wp(5)},
    nameText: {position:"absolute",fontFamily:'Poppins-SemiBold',fontSize:12,top:hp(1),left:wp(38)},
    status: {position:"absolute",left:wp (36),top: hp(3),fontFamily:'Poppins-Medium',fontSize:10,left:wp(38),top:hp(4)},
    headerInnerViewIcons: {flexDirection:"row",position:"absolute",right:wp(14),top:hp(2),alignItems:"center"},
    videoCamButtonStyle:{ left: wp(3), width: wp(10),height: hp(5),backgroundColor: AppColor.whiteShade,justifyContent: 'center',alignItems: 'center',borderRadius: 20, shadowRadius: 4},
    callButtonStyle:{ left: wp(4),width: wp(10),height: hp(5),backgroundColor: AppColor.whiteShade,justifyContent: 'center',alignItems: 'center',borderRadius: 20,shadowRadius: 4}  ,
    messageContainerView: {width:wp (90),height: hp(68),backgroundColor:AppColor.whiteShade,borderRadius:30,alignSelf:"center",bottom:hp(5)},
    image: {width:wp (15) , height: hp(8),borderRadius:30,left: wp(20)},
    messageOneView: {left: wp(25),top:hp(4.5),borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomLeftRadius:15,backgroundColor:AppColor.primary,width: wp(50),height:hp(6),justifyContent:"center"},
    messageImage1:{width:wp (10) , height: hp(5),borderRadius:30,left: wp(77)},
    textRight: {color:AppColor.black,fontFamily:'Poppins-Regular',fontSize:12,top: hp(1.5)},
    subHeadingTextOne: {left:wp(37),top:hp(3),fontFamily:'Poppins-Regular',fontSize:10},
    messageTwoView: {left:wp(15),top:hp(4.5),borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomRightRadius:15,backgroundColor:AppColor.white,width: wp(50),height:hp(6),justifyContent:"center"},
    textLeft: {top: hp(1.5),color:AppColor.black,fontFamily:'Poppins-Regular',fontSize:12},
    subHeadingTextTwo: {top:hp(3),fontFamily:'Poppins-Regular',fontSize:10,right: wp(17)},
    textRight2: {textAlign:"center",color:AppColor.white,fontFamily:'Poppins-Regular',fontSize:12},
    textRight2Paragraph: {left: wp(2),top:hp(5),borderTopLeftRadius:15,borderBottomRightRadius:15,borderBottomLeftRadius:15,borderTopRightRadius:15,backgroundColor:AppColor.primary,width: wp(73),height:hp(12),justifyContent:"center"},
    textRight2ParagraphStyle: {textAlign:"center",color:AppColor.white,fontFamily:'Poppins-Regular',fontSize:12},
    messageImage2:{width:wp (10) , height: hp(5),borderRadius:30,left: wp(2)},
    sendMessageContainerView: {width: wp(90),backgroundColor:AppColor.white,alignSelf:"center",borderRadius:30,bottom:hp(1)},
    sendMessageContainerHeaderTextView: {alignSelf: 'center', top: hp(1)},
    sendMessageContainerHeaderTextStyle: {fontFamily: 'Poppins-SemiBold'},
    sendMessageContainerStyle: {width: wp(90),backgroundColor: AppColor.white,borderRadius: 50,shadowRadius: 4,},
    sendMessageContainerTextStyle:{left: wp('3'),textAlign:"left", fontFamily: 'Poppins-Regular' , fontSize: wp('4') },
    sendMessageTouchableOpacityView : {position:"absolute",right:wp(2),top:hp(.6)},
    sendMessageIconView : {backgroundColor:AppColor.primary,width: wp(11),height:hp (6),borderRadius:20,},
    Icon: {top:hp(1.3),alignSelf:"center",right:wp(.3)}
})

export {ChatStyle};