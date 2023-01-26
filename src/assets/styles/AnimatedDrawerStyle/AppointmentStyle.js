import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AppointmentStyle = StyleSheet.create({
  AppointmentTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  AppointmentText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  opcaityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: wp('10')
  },

  opacityButton: {
    borderRadius: 20,
    width: wp(28),
    height: hp(5),
    backgroundColor:"white",
    shadowRadius: 4
  },
  opacityTouchableButton: {
    borderRadius: 20,
    width: wp(28),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeButton: {
    color: '#ff0000' // red
  },
  buttonText: {
    fontSize: wp('3.5'),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  doctorCard: {
    width: wp(95),
    height: hp(22),
    margin: 10,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  doctorImage: {
    width: wp(17),
    height: wp(20),
    borderRadius: wp('100'),
    marginRight: wp(1),
    
  },

  doctorText: {fontFamily: 'Poppins-Medium', color: 'black'},
  footerView: {
    marginTop: wp(28),
    marginStart: wp(5),
    width: wp(87),
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {marginLeft: wp(-6), marginVertical: wp(-1)},

  secondDoctorCard: {
    width: wp(95),
    height: hp(30),
    margin: 10,
    marginTop: 2,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.02)"
  },
  secondDoctorText: {marginLeft: wp(-9), marginVertical: wp(-1)},

  secondFooterView: {
    marginTop: wp(26),
    marginStart: wp(5),
    width: wp(87),
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerOpcaityView: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    marginHorizontal: wp(5),
  },

  footerOpacityButton: {
    borderRadius: 20,
    width: wp(35),
    height: hp(6),
    backgroundColor: 'rgba(207, 66, 195,0.4)',
    
  },

 footerButtonText:{ textAlign: 'center',
  marginVertical: 7,
  fontFamily: 'Poppins-Medium',
  color: 'black',},
  thirdDoctorCard: {
    width: wp(95),
    height: hp(22),
    margin: 10,
    marginTop: 2,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  thirdDoctorImage: {
    width: wp(17),
    height: wp(18),
    borderRadius: wp('100'),
    marginRight: wp(1),
    
  },
});

export {AppointmentStyle};
