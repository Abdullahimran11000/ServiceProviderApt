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
    color: AppColor.blackOpacity5,
  },
  CardView: {
    marginTop: wp(5.5),
    width: wp("90"),
    height: hp("13"),
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  OpacityStyle: {
    width: wp(42),
    height: hp(12),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  SecondCard: {
    width: wp(42),
    height: hp(12),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardAmountText: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.primary,
    fontSize: wp("7"),
  },
  cardText: {fontFamily: 'Poppins-SemiBold', color: AppColor.black, fontSize: wp('2.8')},
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
    width: wp("90"),
    height: hp('11'),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp('5'),
    marginLeft: wp('5'),
    marginTop: wp('10'),
    alignItems: 'center',
  },
  TextinputStyle: {
    fontFamily: 'Poppins-Bold',
    color: AppColor.blackOpacity5,
    width: wp("50"),
    borderRadius: wp("5"),
    height: hp("9"),
    backgroundColor: AppColor.whiteShade,
    position: 'absolute',
    marginLeft: wp('20'),
    top: wp("2.5")
  },
  dollarIconStyle: {
    position: 'absolute',
    marginLeft: wp('10')
  },
  sendOpacity: {
    width: wp("12"),
    height: wp("12"),
    borderRadius: wp(3),
    position: 'absolute',
    marginLeft: wp('72'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  withdrawlMainNeo: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: wp("90"),
    height: hp("20"),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp(5),
    marginTop: wp('5'),
    marginLeft: wp('5'),
    marginBottom: wp('10'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountNeo: {
    width: wp('25'),
    height: hp('13'),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp(5),  
  },

  amountNeo1: {
    width: wp('30'),
    height: hp('13'),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp(5),  
  },
  amountText:{
    
      fontFamily: 'Poppins-SemiBold',
      color: AppColor.primary,
      textAlign:"center"
      
    },
    
  
});
export {WalletStyle};
