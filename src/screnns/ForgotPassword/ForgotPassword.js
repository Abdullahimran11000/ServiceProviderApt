import React, {useState, useEffect, useRef} from 'react';
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
import {ForgotPasswordStyle} from '../../assets/styles/AuthStyle/ForgotPasswordStyle';
import BackButton from '../../components/ScrennHeader/BackButton';
import {AppColor} from '../../assets/colors/AppColors';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../../components/Modal/CustomModal';
const ForgotPassword = ({navigation}) => {
  const [showEmailNotificationInModal, setshowEmailNotificationInModal] =
    useState(false);
  const [emailInputText, setEmailInputText] = useState('hamad@gmail.com');
  const [emailIsValid, setEmailIsValid] = useState(AppColor.blackOpacity3);
  const [emailAlert, setEmailAlert] = useState(false);

  const emailRef = useRef();

  const sendHandler = () => {
    if (emailInputText === '') {
      setEmailIsValid(AppColor.red);
    } else {
      if (emailInputText.includes('@gmail.com') || emailInputText.includes('@outlook.com')) {
        setEmailAlert(false);
        setshowEmailNotificationInModal(true);
      } else {
        setEmailAlert(true);
      }
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Forgot Password screen is focusing right now!');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={ForgotPasswordStyle.safeView}>
      <BackButton onPress={() => navigation.goBack()}>
        {'Forgot Password'}
      </BackButton>
      <Lottie
        style={ForgotPasswordStyle.animationStyle}
        source={require('../../assets/animations/appIntroForgot.json')}
        autoPlay
      />
      <Text style={ForgotPasswordStyle.tagText}>Find your account</Text>
      <Text style={ForgotPasswordStyle.paraText}>
        Please enter your email address to recover your forgotton password
      </Text>
      <Text style={ForgotPasswordStyle.labelText}>Email</Text>
      <NeoTextInput
        value={emailInputText}
        reference={emailRef}
        autoFocus={true}
        keyboardType={'email-address'}
        placeholder={'Example@gmail.com'}
        placeholderTextColor={emailIsValid}
        onChangeText={text => {
          setEmailInputText(text);
        }}
        returnKeyType={'next'}
        onSubmitEditing={sendHandler}
      />
      {emailAlert ? (
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: wp('3.5'),
            width: wp('90'),
            color: AppColor.red,
          }}>
          Please enter valid email!
        </Text>
      ) : null}
      <TouchableOpacity onPress={() => navigation.navigate('TryAnotherWay')}>
        <Text style={ForgotPasswordStyle.touchableText1}>Try another way</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendHandler}>
        <NeoButton
          darkShadowColor={AppColor.black}
          marginTop={wp('5')}
          width={wp('55')}
          backgroundColor={AppColor.primary}
          height={hp('6')}
          borderRadius={wp('10')}
          marginBottom={wp('5')}>
          <Text style={ForgotPasswordStyle.touchableText}>Send</Text>
        </NeoButton>
      </TouchableOpacity>
      <CustomModal
        isVisible={showEmailNotificationInModal}
        onBackdropPress={() => {
          setshowEmailNotificationInModal(false);
        }}
        lottieStyle={{width: wp('50'), height: wp('50')}}
        modalButtonPress={() => {
          navigation.navigate('Verification');
        }}
        buttonBackgroundColor={AppColor.primary}
        source={require('../../assets/animations/email.json')}
        text={'We have sent a Automated Password on your Email'}
        buttonText={'Verify'}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
