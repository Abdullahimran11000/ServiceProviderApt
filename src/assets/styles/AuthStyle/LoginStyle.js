import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';
const LoginStyle = StyleSheet.create({
  MainView: {flex: 1},

  headerView: {
    color: AppColor.black,
    fontFamily: 'Poppins-Bold',
    fontSize: wp('5'),
  },

  inputFieldsView: {
    marginTop: wp('15'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle: {
    color: AppColor.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('4.5'),
    width: wp('90'),
  },

  ForgotText: {
    textAlign: 'right',
    paddingRight: wp('5'),
    fontFamily: 'Poppins-Medium',
    color: AppColor.black,
  },

  icon: {
    position: 'absolute',
    right: wp('5'),
  },

  MainLoginButtonView: {
    marginTop: wp('4'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableLogin: {
    borderRadius: wp('10'),
    width: wp('70'),
    backgroundColor: AppColor.primary,
  },

  LogInButtonView: {
    textAlign: 'center',
    height: hp('6'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    color: AppColor.white,
    fontFamily: 'Poppins-Bold',
    fontSize: wp('4'),
  },

  orText: {
    color: AppColor.black,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: wp('2'),
  },

  TouchableGoogle: {
    borderRadius: wp('15'),
    width: wp('87'),
    height: hp('6'),
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  GoogleImage: {
    width: wp('5'),
    height: hp(3),
    marginLeft: wp(20),
    position: 'absolute',
    backgroundColor: AppColor.white,
  },

  GoogleText: {
    color: AppColor.black,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    marginLeft: wp('3'),
  },

  LastView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5'),
  },
  SignUpText: {fontFamily: 'Poppins-SemiBold', color: AppColor.black},
});

export {LoginStyle};
