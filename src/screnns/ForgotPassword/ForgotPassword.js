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
  const [emailLabelText, setEmailLabelText] = useState('');
  const [emailLabelAlert, setEmailLabelAlert] = useState(false);

  const emailRef = useRef();

  const sendHandler = () => {
    if (emailInputText === '') {
      setEmailLabelText('Please enter your email.');
      setEmailLabelAlert(true);
      emailRef.current.focus();
    } else {
      if (
        emailInputText.includes('@gmail.com') ||
        emailInputText.includes('@outlook.com')
      ) {
        setEmailLabelAlert(false);
        setshowEmailNotificationInModal(true);
      } else {
        setEmailLabelAlert(true);
        setEmailLabelText('Please enter valid email.');
        emailRef.current.focus();
      }
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Forgot Password screen is focusing right now!');
    });
  }, []);

  return (
    <SafeAreaView style={ForgotPasswordStyle.mainView}>
      <View style={ForgotPasswordStyle.headerCont}>
        <BackButton onPress={() => navigation.goBack()}>
          {'Forgot Password'}
        </BackButton>
      </View>
      <View style={ForgotPasswordStyle.bodyCont}>
        <ScrollView contentContainerStyle={ForgotPasswordStyle.scrollView}>
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
            onChangeText={text => {
              setEmailInputText(text);
            }}
            returnKeyType={'next'}
            onSubmitEditing={sendHandler}
          />
          {emailLabelAlert ? (
            <Text style={ForgotPasswordStyle.alertText}>{emailLabelText}</Text>
          ) : null}

          <TouchableOpacity
            onPress={() => navigation.navigate('TryAnotherWay')}>
            <Text style={ForgotPasswordStyle.touchableText1}>
              Try another way
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendHandler}>
            <NeoButton
              darkShadowColor={AppColor.black}
              width={wp('55')}
              backgroundColor={AppColor.primary}
              height={hp('6')}
              borderRadius={wp('10')}
              marginVertical={wp('5')}>
              <Text style={ForgotPasswordStyle.touchableText}>Send</Text>
            </NeoButton>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <CustomModal
        isVisible={showEmailNotificationInModal}
        onBackdropPress={() => {
          setshowEmailNotificationInModal(false);
        }}
        lottieStyle={{width: wp('50'), height: wp('50')}}
        modalButtonPress={() => {
          setshowEmailNotificationInModal(false);
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
