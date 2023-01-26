import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColors';

const SearchDoctorStyle = StyleSheet.create({
  neoMorphView: {
    marginLeft: wp('-25'),
    width: wp('65'),
    height: hp('6'),
    borderRadius: wp('6'),
    shadowRadius: 4,
    backgroundColor: AppColor.whiteShade,
  },
  searchTextInput: {
    width: wp('50'),
    fontFamily: 'Poppins-Medium',
    fontSize: wp('4'),
    color: AppColor.blackOpacity4,
    marginBottom: wp('-1.5'),
  },

  ModalStyle: {
    borderRadius: wp('10'),
    overflow: 'hidden',
    backgroundColor: AppColor.whiteShade,
    width: wp('90'),
  },

  ModalViewStyle: {
    width: wp('80'),
    marginHorizontal: wp('5'),
    marginTop: wp('8'),
  },

  ModalText: {
    margin: wp('5'),
    marginBottom: wp('3'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
  },

  SelectListBoxStyle: {
    marginLeft: wp('3'),
    marginBottom: wp('4'),
    borderRadius: wp('4'),
    borderColor: AppColor.whiteShade,
    backgroundColor: AppColor.white,
    fontFamily: 'Poppin-Bold',
    width: wp('75'),
    height: hp('7'),
  },
  DoneButtonView: {
    width: wp('80'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: wp('3')
  },
  DoneButtonStyle: {
    width: wp('60'),
    height: hp('7.7'),
    borderRadius: wp('4'),
  },
  DoneButtonTextView: {justifyContent: 'center', alignSelf: 'center'},
  DoneButtonTextStyle: {marginVertical: wp('4'), fontFamily: 'Poppins-Medium', color: AppColor.white},

  ConsultationText: {
    margin: wp('5'),
    marginLeft: wp('10'),
    marginBottom: wp('3'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
  },

  SelectPriceListBoxStyle: {
    borderRadius: wp('4'),
    width: wp('81.5'),
    marginLeft: wp('4'),
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
  },

  ApplyButtonStyle: {
    width: wp('79'),
    height: hp('7.7'),
    backgroundColor: AppColor.primary,
    borderRadius: wp('4'),
  },

  DoctorFlatListView: {width: wp('90'), alignSelf: 'center'},
});

export {SearchDoctorStyle};
