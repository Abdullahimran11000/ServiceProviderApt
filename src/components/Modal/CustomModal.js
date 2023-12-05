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
  modalButtonPress,
  buttonBackgroundColor,
  lottieStyle,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={{ flex: 10}}>
        <View style={{flex: 1.5}}></View>
        <View
        style={{
          flex: 7,
          borderRadius: wp('15'),
          backgroundColor: AppColor.whiteShade,
          alignItems: 'center',
          alignSelf: 'center',
          padding: wp('5'),
          justifyContent: 'space-around'
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
            <Lottie source={source} style={lottieStyle} loop autoPlay />
          </Neomorph>
        </Neomorph>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: wp('4'),
            color: AppColor.black,
            width: wp('65'),
            textAlign: 'center'
          }}>
          {text}
        </Text>
        <TouchableOpacity onPress={modalButtonPress}>
          <NeoButton
            width={wp('35')}
            height={hp('7')}
            backgroundColor={buttonBackgroundColor}
            borderRadius={wp('7')} marginVertical= {wp('5')}>
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
        <View style={{ flex: 1.5}}></View>
      </View>
      
    </Modal>
  );
};

export default CustomModal;
