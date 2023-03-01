import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {AppColor} from '../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import Lottie from 'lottie-react-native';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import CustomModal from '../components/Modal/CustomModal';
import {useNavigation} from '@react-navigation/native';
const TryAnotherWay = () => {
  const navigation = useNavigation();
  const [showMessage, setShowMessage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValidator, setPhoneNumberValidator] = useState(false);
  const [phoneNumberLabel, setPhoneNumberLabel] = useState();

  const submitHandler = () => {
    if (phoneNumber === '') {
      setPhoneNumberLabel('Enter your number');
      setPhoneNumberValidator(true);
    } else {
      {
        setPhoneNumberValidator(false);
        setShowMessage(true);
      }
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade, flex: 1}}>
      <View style={{alignItems: 'center', marginTop: hp('10')}}>
        <Neomorph
          style={{
            width: wp('50'),
            height: hp('25'),
            borderRadius: wp('30'),
            backgroundColor: AppColor.whiteShade,
            shadowRadius: 4,
          }}>
          <Lottie
            style={{
              alignSelf: 'center',
              height: hp('38'),
              bottom: hp('3'),
              left: wp(0.5),
            }}
            source={require('../assets/animations/phone_number.json')}
            autoPlay
          />
        </Neomorph>
      </View>
      <View style={{width: wp('90'), alignSelf: 'center', marginTop: hp(5)}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: wp(4.5),
            color: AppColor.black,
          }}>
          Enter Your Phone Number
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Neomorph
          style={{
            width: wp(90),
            marginTop: hp(1),
            height: hp(13),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: AppColor.whiteShade,
            shadowRadius: 4,
          }}>
          <PhoneInput
            defaultCode="PK"
            autoFocus
            textInputStyle={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: wp(4),
              top: hp(0.8),
            }}
            textContainerStyle={{
              borderRadius: 20,
              backgroundColor: AppColor.white,
            }}
            containerStyle={{
              backgroundColor: AppColor.whiteShade,
              width: wp(80),
              height: hp(10),
            }}
            codeTextStyle={{fontSize: wp(4)}}
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
        </Neomorph>
      </View>
      {phoneNumberValidator ? (
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: wp('3.7'),
            width: wp(90),
            alignSelf: 'center',
            marginTop: hp(2),
            color: AppColor.red,
          }}>
          {phoneNumberLabel}
        </Text>
      ) : null}
      <View style={{alignItems: 'center', marginTop: hp(5)}}>
        <TouchableOpacity onPress={submitHandler}>
          <NeoButton
            width={wp(90)}
            height={hp(8)}
            backgroundColor={AppColor.primary}
            borderRadius={30}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColor.white,
                fontSize: wp(5),
              }}>
              Send
            </Text>
          </NeoButton>
        </TouchableOpacity>
      </View>

      <CustomModal
        isVisible={showMessage}
        onBackdropPress={() => {
          setShowMessage(false);
        }}
        modalButtonPress={() => {
          navigation.navigate('Verification');
        }}
        buttonBackgroundColor={AppColor.primary}
        source={require('../assets/animations/success.json')}
        lottieStyle={{width: wp('35'), height: wp('35')}}
        text={'We have sent a verification code to your Mobile Number'}
        style={{marginTop: wp(10)}}
        buttonText={'Verify'}
      />
    </SafeAreaView>
  );
};

export default TryAnotherWay;
