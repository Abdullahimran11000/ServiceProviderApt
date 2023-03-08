import React, {useState, useEffect} from 'react';
import {Checkbox} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../../components/ScrennHeader/BackButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppColor} from '../../assets/colors/AppColors';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';
import {SignUpStyle} from '../../assets/styles/AuthStyle/SignUpStyle';
import CustomModal from '../../components/Modal/CustomModal';

const SignUp = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [showConfirmationMessageInModal, setshowConfirmationMessageInModal] =
    useState(false);
  const [nameText, setNameText] = useState('');
  const [nameIsValid, setNameIsValid] = useState(AppColor.blackOpacity3);
  const [emailText, setEmailText] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(AppColor.blackOpacity3);
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordText, setPasswordText] = useState('');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(
    AppColor.blackOpacity3,
  );

  const submitHandler = () => {
    if (emailText === '' && nameText === '' && passwordText === '') {
      setNameIsValid(AppColor.red);
      setEmailIsValid(AppColor.red);
      setPasswordIsValid(AppColor.red);
    }
    if (nameText === '') {
      setNameIsValid(AppColor.red);
    }
    if (emailText === '') {
      setEmailIsValid(AppColor.red);
    }
    if (passwordText === '') {
      setPasswordIsValid(AppColor.red);
    }
    if (nameText !== '' && emailText !== '' && passwordText !== '') {
      if (
        emailText.includes('@gmail.com') ||
        emailText.includes('@outlook.com')
      ) {
        setNameIsValid(AppColor.blackOpacity3);
        setEmailIsValid(AppColor.blackOpacity3);
        setPasswordIsValid(AppColor.blackOpacity3);
        setNameText('');
        setEmailText('');
        setPasswordText('');
        setEmailAlert(false);
      } else {
        setEmailAlert(true);
        setEmailIsValid(AppColor.red);
      }
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('SignUp screen is focusing right now!');
    });
  }, [navigation]);

  return (
    <ScrollView>
      <SafeAreaView
        style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
        <View style={SignUpStyle.mainView}>
          <BackButton onPress={() => navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Full Name</Text>
            <NeoTextInput
              value={nameText}
              width={wp('90')}
              keyboardType={'default'}
              placeholder={'Enter your name'}
              placeholderTextColor={nameIsValid}
              onChangeText={text => {
                setNameText(text);
              }}
            />
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Email</Text>
            <NeoTextInput
              value={emailText}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
              placeholderTextColor={emailIsValid}
              onChangeText={text => {
                setEmailText(text);
              }}
            />
          </View>
          {emailAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3.8'),
                color: AppColor.red,
                marginLeft: wp('5'),
                marginTop: wp('5'),
                marginBottom: wp('-5'),
              }}>
              Please enter valid email!
            </Text>
          ) : null}
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Password</Text>
            <NeoTextInput
              value={passwordText}
              width={wp('90')}
              keyboardType={'default'}
              secureTextEntry={!eye}
              placeholder={'Enter your password'}
              placeholderTextColor={passwordIsValid}
              onChangeText={text => {
                setPasswordText(text);
              }}>
              <TouchableOpacity
                style={SignUpStyle.icon}
                onPress={() => {
                  if (eye === true) {
                    setEye(false);
                  } else {
                    setEye(true);
                  }
                }}>
                {!eye ? (
                  <Entypo name="eye-with-line" size={wp('4.5')} color="black" />
                ) : (
                  <Entypo name="eye" size={wp('4.5')} color="black" />
                )}
              </TouchableOpacity>
            </NeoTextInput>
          </View>
          
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" color="#c28cde" />
            <Text style={SignUpStyle.termsAndPrivacyStyle1}>I agree with</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle2}>terms</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle3}>and</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle4}>privacy</Text>
          </View>
          <View style={SignUpStyle.viewSignUpbutton}>
            <TouchableOpacity onPress={submitHandler}>
              <NeoButton
                lightShadowColor={AppColor.white}
                width={wp('55')}
                height={hp('6')}
                borderRadius={wp('10')}
                backgroundColor={AppColor.primary}>
                <Text style={SignUpStyle.SignUpText}>Sign Up</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
          isVisible={showConfirmationMessageInModal}
          onBackdropPress={() => {
            setshowConfirmationMessageInModal(false);
          }}
          modalButtonPress={() => {
            navigation.navigate('LogIn');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/success.json')}
          lottieStyle={{width: wp('35'), height: wp('35')}}
          text={'Account Created Successfully'}
          style={{marginTop: wp(10)}}
          buttonText={'Start Now'}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
