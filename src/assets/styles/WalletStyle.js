import {StyleSheet} from 'react-native';
import {AppColor} from '../colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const WalletStyle = StyleSheet.create({
  mainView: { flex: 10, backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90'), margin: wp('5')
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
    paddingHorizontal: wp('5'),
    width: wp("90"),
    height: hp('11'),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp('5'),
    marginHorizontal: wp('5'),
    marginVertical: wp('3'),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  TextinputStyle: {
    fontFamily: 'Poppins-Bold',
    color: AppColor.black,
    width: wp("50"),
    borderRadius: wp("5"),
    height: hp("9"),
    backgroundColor: AppColor.whiteShade,
    
  },
  dollarIconStyle: {
    
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
    flexDirection: 'row',
    width: wp("90"),
    height: hp("20"),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: wp('5')
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
