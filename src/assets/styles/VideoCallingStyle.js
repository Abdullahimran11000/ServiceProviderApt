import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const VideoCallingStyle = StyleSheet.create({
  nameTimeView: {
    width: wp('40'),
    height: hp('12'),

    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('3'),
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  firstCircleView: {
    width: wp('85'),
    height: hp('46'),
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('7'),
    borderRadius: wp('40'),
  },

  secondCircleView: {
    width: wp('68'),
    height: hp('37'),
    backgroundColor: 'rgba(235, 82, 174,0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('5'),
    borderRadius: wp('35'),
    marginVertical: wp('4'),
  },

  thirdCircleView: {
    width: wp('50'),
    height: hp('28'),
    backgroundColor: 'rgba(235, 82, 174,0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('5'),
    borderRadius: wp('25'),
    marginVertical: wp('5'),
  },

  imageView: {
    width: wp('33'),
    height: hp('19'),
    backgroundColor: 'rgba(235, 82, 174,0.1)',

    borderRadius: wp('25'),
  },
  LottieView:{alignItems: 'center', justifyContent: 'center'},
  imageStyle: {
    width: wp('30'),
    height: hp('20'),
    borderRadius: wp('15'),
    position: 'absolute',
    bottom: hp('18.3'),
  },
  footerView: {
    width: wp('100'),
    height: hp('15'),

    marginTop: wp('10'),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonView: {
    width: wp('15'),
    height: hp('9'),
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('20'),
  },
});

export {VideoCallingStyle};
