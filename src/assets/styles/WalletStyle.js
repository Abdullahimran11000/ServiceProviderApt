import {StyleSheet} from 'react-native';
import {AppColor} from '../colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const WalletStyle = StyleSheet.create({
  mainView: { flex: 10, backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},
  headerView: {flex: 1},
  bodyCont: {flex:9},
  scrollView: {flexGrow: 9, width: wp('100'), alignItems: 'center'},
  alertText: {fontFamily: 'Poppins-Light',fontSize: wp('4'),color: AppColor.red,width: wp('90'),alignSelf: 'center'},
  headingText: {width: wp('90'),alignSelf: 'center',fontFamily: 'Poppins-Medium',fontSize: wp('5'),color: AppColor.blackOpacity3},
  footerCont: {width: wp('85'),height: hp('17'),flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'},
  CardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90'), marginVertical: wp('3'),
  },

  cardAmountText: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.primary,
    fontSize: wp("7"),
  },
  cardText: {fontFamily: 'Poppins-SemiBold', color: AppColor.black, fontSize: wp('2.8')},

  TextInputNeo: {
    flexDirection: 'row',
    paddingHorizontal: wp('5'),
    width: wp("90"),
    height: hp('11'),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp('5'),
    marginHorizontal: wp('5'),
    marginVertical: wp('5'),
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
 
 
  withdrawlMainNeo: {
    flexDirection: 'row',
    width: wp("90"),
    height: hp("20"),
    backgroundColor: AppColor.whiteShade,
    shadowRadius: 4,
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp('5')
  },
 
  amountText:{
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.primary,
    textAlign:"center"
    
  },
    
  
});
export {WalletStyle};
