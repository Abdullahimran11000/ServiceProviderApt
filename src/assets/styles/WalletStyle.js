import {StyleSheet} from 'react-native';
import {AppColor} from '../colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const WalletStyle = StyleSheet.create({
  mainView: {display: 'flex', flex: 1, backgroundColor: AppColor.whiteShade},

  headCont: {
    width: wp('90'),
    height: hp('6'),
    marginTop: wp('4.5'),
    marginRight: wp('4.5'),
    alignSelf: 'center',
  },
  headContInnerCont: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContMenuCont: {
    width: wp('11.5'),
    height: wp('11.5'),
    borderRadius: wp('14'),
    position: 'absolute',
    left: wp('0'),
    justifyContent: 'center',
  },
  textCont: {position: 'absolute', right: wp('-6')},
  textStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: wp('4.5'),
    color: AppColor.red,
  },
  CardView: {
    marginLeft: wp(1),
    marginTop: wp(5.5),
    width: wp(100),
    height: hp(17),
    flexDirection: 'row',
    display: 'flex',
    flex: 1,

    // backgroundColor:AppColor.red
  },
  OpacityStyle: {
    width: wp(40),
    height: hp(15),
    borderRadius: wp(5),
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: AppColor.black,
    marginHorizontal: wp(3),
  },
  SecondCard: {
    width: wp(40),
    height: hp(15),
    borderRadius: wp(5),
    position: 'absolute',
    right: wp(-1),
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: wp(8),
    backgroundColor: AppColor.black,
  },
  cardAmountText: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.primary,
    fontSize: wp(10),
  },
  cardText: {fontFamily: 'Poppins-SemiBold', color: AppColor.primary},
  amountView: {
    width: wp(92),
    height: hp(13),
    borderRadius: wp(5),
    marginTop: wp(5),
    marginHorizontal: wp(5),
  },

  TextInputNeo: {
    flexDirection: 'row',
    flex: 1,
    width: wp(93),
    height: hp(13),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 5,
    borderRadius: wp(5),
    marginVertical: wp(5),
    marginHorizontal: wp(4),
  },
  TextinputStyle: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
    width: wp(93),
    borderRadius: wp(5),
    marginLeft: wp(10),
    flex: 1,
    height: hp(13),
    backgroundColor: AppColor.whiteShade,
  },
  dollarIconStyle: {
    position: 'absolute',
    marginVertical: wp(8),
    marginLeft: wp(2),
  },
  sendOpacity: {
    width: wp(18),
    height: hp(10),
    marginHorizontal: wp(6),
    marginVertical: wp(3),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignContent: 'center',
  },
  sendIconStyle: {marginVertical: wp(3), marginHorizontal: wp(5)},
  withdrawlMainNeo: {
    flexDirection: 'row',
    flex: 1,
    width: wp(93.9),
    height: hp(20),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 5,
    borderRadius: wp(5),
    marginVertical: wp(5),
    marginHorizontal: wp(4),
    justifyContent:"space-between",

    
   
  },
  amountNeo: {
    flexDirection: 'row',
    flex: 1,
    width: wp(20),
    height: hp(10),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 5,
    borderRadius: wp(5),
    marginVertical: wp(5),
    marginHorizontal:wp(2)
    
    
    
  },
  amountText:{
    
      fontFamily: 'Poppins-SemiBold',
      color: AppColor.primary,
      textAlign:"center"
      
    },
    
  
});
export {WalletStyle};
