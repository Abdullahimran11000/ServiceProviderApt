import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import NeoButton from '../NeoMorphButton/NeoButton';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../../assets/colors/AppColors';

const CustomModal = ({
  isVisible,
  onBackdropPress,
  source,
  text,
  buttonText,
  style,
  modalButtonPress,
  buttonBackgroundColor,
  lottieStyle,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View
        style={{
          width: wp('80'),
          height: hp('60'),
          borderRadius: wp('15'),
          backgroundColor: AppColor.whiteShade,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Neomorph
          style={{
            width: wp('45'),
            height: wp('45'),
            borderRadius: wp('45'),
            backgroundColor: AppColor.whiteShade,
            shadowRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: wp('8'),
          }}>
          <Neomorph
            inner
            style={{
              width: wp('35'),
              height: wp('35'),
              borderRadius: wp('35'),
              backgroundColor: AppColor.whiteShade,
              shadowRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Lottie
              source={source}
              style={lottieStyle}
              loop
              autoPlay
            />
          </Neomorph>
        </Neomorph>

        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: wp('4'),
            textAlign: 'center',
            color: AppColor.black,
            width: wp('70'),
            marginTop: wp('5'),
          }}>
          {/* {modalTypeOpen
            ? 'File upload successfully.'
            : 'You did not upload any photo yet today! Please upload patient prescription.'} */}
          {text}
        </Text>

        <TouchableOpacity
          //   style={{marginTop: modalTypeOpen ? wp('20') : wp('10')}}
          style={style}
          onPress={modalButtonPress}
          //   onPress={() => {
          //     if (modalTypeOpen === true) {
          //       setModalOpen(false);
          //       navigation.goBack();
          //     } else {
          //       setModalOpen(false);
          //     }
          //   }}
        >
          <NeoButton
            width={wp('35')}
            height={hp('7')}
            // backgroundColor={modalTypeOpen ? AppColor.primary : '#FA7070'}
            backgroundColor={buttonBackgroundColor}
            borderRadius={wp('7')}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: wp('4'),
                color: AppColor.white,
              }}>
              {buttonText}
            </Text>
          </NeoButton>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;
