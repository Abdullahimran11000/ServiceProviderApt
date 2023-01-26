import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const MyProfileStyle = StyleSheet.create({
  mainView: {
    backgroundColor: AppColor.whiteShade,
    height: hp('100'),
  },
  ProfileView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('4'),
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

  imageStyle: {
    width: wp('27'),
    height: hp('15'),
    borderRadius: wp('20'),
  },
  inputFeildsView: {width: wp('89'), alignSelf: 'center'},
  TextStyle: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  GenderView: {marginLeft: wp('6'), marginTop: wp('4')},

  SelectPriceListBoxStyle: {
    borderRadius: wp('4'),

    width: wp('91'),
    marginLeft: wp('4.5'),
    borderColor: AppColor.whiteShade,
    backgroundColor: AppColor.whiteShade,
  },
});

export {MyProfileStyle};
