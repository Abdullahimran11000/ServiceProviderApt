import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ForgotPasswordStyle} from '../assets/styles/AuthStyle/ForgotPasswordStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../components/Modal/CustomModal';
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [showEmailNotificationInModal , setshowEmailNotificationInModal] = useState(false)
  const [emailText, setEmailText] = useState();
  const [checkEmailTextValid, setCheckEmailTextValid] = useState(false);
  const [emailLabelText, setEmailLabelText] = useState();

  const submitHandler = () => {
    if (emailText === '') {
      setEmailLabelText('please enter your valid email');
      setCheckEmailTextValid(true);
    } else if (
      emailText.includes('@gmail.com') ||
      emailText.includes('@outlook.com')
    ) {
      setCheckEmailTextValid(false);
      setshowEmailNotificationInModal(true)
      // navigation.navigate('Verification');
    } else {
      setEmailText('');
      setEmailLabelText('Invalid email format.');
      setCheckEmailTextValid(true);
    }
  }


  return (
    <SafeAreaView style={ForgotPasswordStyle.safeView}>
      <BackButton onPress={() => navigation.goBack()}>
        {'Forgot Password'}
      </BackButton>
      <ScrollView>
        <View>
          <View style={ForgotPasswordStyle.animationView}>
            <Lottie
              style={ForgotPasswordStyle.animationStyle}
              source={require('../assets/animations/appIntroForgot.json')}
              autoPlay
            />
          </View>
          <View style={ForgotPasswordStyle.headingView}>
            <Text style={ForgotPasswordStyle.tagText}>Find your account</Text>
          </View>
          <View style={ForgotPasswordStyle.paraView}>
            <Text style={ForgotPasswordStyle.paraText}>
              Please enter your email address to recover your forgotton password
            </Text>
          </View>
          <View style={ForgotPasswordStyle.inputView}>
            <View style={ForgotPasswordStyle.labelView}>
              <Text style={ForgotPasswordStyle.labelText}>Email Address</Text>
            </View>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Example@gmail.com'}
              onChangeText={text => {setEmailText(text)}}
            />
             {checkEmailTextValid ? (
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: wp('3.5'),
                    width:wp(90),
                    marginTop:hp(2),
                    color: AppColor.red,
                    
                  }}>
                  {emailLabelText}
                </Text>
              ) : null}
          </View>
          <View style={ForgotPasswordStyle.touchableView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TryAnotherWay')}>
              <Text style={ForgotPasswordStyle.touchableText1}>
                Try another way
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{textAlign:'center' , fontStyle:'italic'}}>or</Text>
          <View style={ForgotPasswordStyle.headingView}>
            <TouchableOpacity
              onPress={submitHandler}>
              <NeoButton
                darkShadowColor={AppColor.black}
                marginTop={wp('5')}
                width={wp('85')}
                backgroundColor={AppColor.primary}
                height={hp('8')}
                borderRadius={wp('10')}
                marginBottom={wp('10')}>
                <Text style={ForgotPasswordStyle.touchableText}>Send</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
                isVisible={showEmailNotificationInModal}
                onBackdropPress={() => {
                    setshowEmailNotificationInModal(false);
                }}
                modalButtonPress={() => {
                    navigation.navigate('Verification')
                }}
                buttonBackgroundColor={AppColor.primary}
                source={require('../assets/animations/success.json')}
                text={'We have sent a Automated Password on your Email'}
                style={{marginTop:wp(10)}}
                buttonText={'Verify'}
                />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
