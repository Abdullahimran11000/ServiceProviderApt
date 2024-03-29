import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const MyProfileStyle = StyleSheet.create({
  mainView: {
    backgroundColor: AppColor.whiteShade,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileView: {
    width: wp('90'),
    height: hp('15'),
    alignSelf: 'center',
    marginBottom: wp('10'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('5'),
  },
  innerProfileView: {
    width: wp('25'),
    height: wp('25'),
    borderRadius: wp('25'),
    backgroundColor: AppColor.white,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp('5'),
  },

  IconButtonStyle: {
    width: wp('9'),
    height: hp('5'),
    borderRadius: wp('20'),
    backgroundColor: AppColor.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('19'),
    marginVertical: wp('18'),
  },

  imageStyle: {width: wp('25'), height: wp('25')},
  inputFeildsView: {width: wp('89'), alignSelf: 'center'},
  iconTouchableStyle: {
    position: 'absolute',
    right: -3,
    top: 60,
    width: wp('8'),
    height: wp('8'),
    borderRadius: wp('6'),
    backgroundColor: AppColor.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextStyle: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
    fontSize: wp('4'),
    width: wp('90'),
  },
  GenderView: {marginLeft: wp('6')},
  selectListBox: {
    borderRadius: wp('4'),
    marginTop: wp('2'),
    width: wp('90'),
    backgroundColor: AppColor.whiteShade,
  },
  SelectPriceListBoxStyle: {
    borderRadius: wp('4'),
    marginTop: wp('2'),
    width: wp('90'),
    alignSelf: 'center',
    borderColor: AppColor.whiteShade,
  },

  buttonView: {
    width: wp('90'),
    alignSelf: 'center',
    marginTop: wp('5'),
    marginBottom: wp('8'),
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: wp('4.5'),
    color: AppColor.white,
  },
});

export {MyProfileStyle};
