import React, {useState, useEffect, useRef} from 'react';
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
  const [passwordIsValid, setPasswordIsValid] = useState(
    AppColor.blackOpacity3,
  );

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const signUpHandler = () => {
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
        setshowConfirmationMessageInModal(true)
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
    <SafeAreaView
      style={{
        backgroundColor: AppColor.whiteShade,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <BackButton onPress={() => navigation.goBack()}>{'Sign Up'}</BackButton>
      <View style={{marginTop: wp('10')}}>
        <Text style={SignUpStyle.text}>Full Name</Text>
        <NeoTextInput
          value={nameText}
          autoFocus={true}
          reference={nameInputRef}
          keyboardType={'default'}
          returnKeyType={'next'}
          placeholder={'Enter your name'}
          placeholderTextColor={nameIsValid}
          onChangeText={text => {
            setNameText(text);
          }}
          onSubmitEditing={() => {
            emailInputRef.current.focus();
          }}
        />
        <Text style={SignUpStyle.text}>Email</Text>
        <NeoTextInput
          value={emailText}
          reference={emailInputRef}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          placeholder={'Enter your email'}
          placeholderTextColor={emailIsValid}
          onChangeText={text => {
            setEmailText(text);
          }}
          onSubmitEditing={() => {
            passwordInputRef.current.focus();
          }}
        />
        {emailAlert ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3.8'),
              color: AppColor.red,
            }}>
            Please enter valid email!
          </Text>
        ) : null}
        <Text style={SignUpStyle.text}>Password</Text>
        <NeoTextInput
          value={passwordText}
          width={wp('90')}
          reference={passwordInputRef}
          keyboardType={'default'}
          secureTextEntry={!eye}
          placeholder={'Enter your password'}
          placeholderTextColor={passwordIsValid}
          onChangeText={text => {
            setPasswordText(text);
          }}
          onSubmitEditing={signUpHandler}>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox status="checked" color={AppColor.primary} />
          <Text
            style={{
              fontSize: wp('4'),
              fontFamily: 'Poppins-Light',
              color: AppColor.black,
            }}>
            I agree with <Text style={{fontFamily: 'Poppins-Bold'}}>terms</Text>{' '}
            & <Text style={{fontFamily: 'Poppins-Bold'}}>conditions</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center', marginVertical: wp('5')}}
          onPress={signUpHandler}>
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
  );
};

export default SignUp;
