import React from 'react';
import Swiper from 'rn-swipe-button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';

const SwipeButton = () => {
  const navigation = useNavigation();
  return (
    <Swiper
      containerStyles={{alignSelf: 'center'}}
      disabled={false}
      width={wp('85')}
      enableRightToLeftSwipe={true}
      onSwipeSuccess={() => navigation.replace('LogIn')}
      title="Swipe to start"
      titleStyles={{
        fontFamily: 'Poppins-Light',
        fontSize: wp('4'),
        color: AppColor.white,
      }}
      shouldResetAfterSuccess={true}
      railBackgroundColor={AppColor.railBorderColor}
      railBorderColor={AppColor.railBorderColor}
      railFillBackgroundColor={AppColor.railFillColor}
      railFillBorderColor={AppColor.railFillColor}
      thumbIconBackgroundColor={AppColor.white}
      thumbIconBorderColor={AppColor.white}
    />
  );
};

export default SwipeButton;
