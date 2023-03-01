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
import {ForgotPasswordStyle} from '../assets/styles/AuthStyle/ForgotPasswordStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColors';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../components/Modal/CustomModal';
const ForgotPassword = ({navigation}) => {
  const [showEmailNotificationInModal, setshowEmailNotificationInModal] = useState(false);
  const [email, setEmail] = useState('hamad@gmail.com');
  const [emailIsValid, setEmailIsValid] = useState(AppColor.blackOpacity3);
  const [emailAlert, setEmailAlert] = useState(false);

  const emailRef = useRef(null)

  const submitHandler = () => {
    if (email === '') {
      setEmailIsValid(AppColor.red);
    } 
    else { 
      if (email.includes('@gmail.com') || email.includes('@outlook.com')) {
        setEmailAlert(false);
        setshowEmailNotificationInModal(true)
      }
      else {
        setEmailAlert(true);
      }
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Forgot Password screen is focusing right now!');
      setEmail('')
      emailRef.current.focus()
    });
  }, [navigation]);

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
              value={email}
              reference={emailRef}
              width={wp('90')}
              autoFocus={true}
              keyboardType={'email-address'}
              placeholder={'Example@gmail.com'}
              placeholderTextColor={emailIsValid}
              onChangeText={text => {
                setEmail(text);
              }}
              returnKeyType={'next'}
              onSubmitEditing={submitHandler}
            />
            {emailAlert ? (
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: wp('3.5'),
                  width: wp(90),
                  marginTop: hp(2),
                  color: AppColor.red,
                }}>
                Please enter valid email!
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
          <View style={ForgotPasswordStyle.headingView}>
            <TouchableOpacity onPress={submitHandler}>
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
          lottieStyle={{width: wp('50'), height: wp('50')}}
          modalButtonPress={() => {
            navigation.navigate('Verification');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../assets/animations/email.json')}
          text={'We have sent a Automated Password on your Email'}
          style={{marginTop: wp('12')}}
          buttonText={'Verify'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
