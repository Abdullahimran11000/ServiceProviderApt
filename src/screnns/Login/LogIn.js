import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColors';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {LoginStyle} from '../../assets/styles/AuthStyle/LoginStyle';

const LogIn = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [emailText, setEmailText] = useState('hamad@gmail.com');
  const [emailLabelText, setEmailLabelText] = useState('');
  const [emailLabelAlert, setEmailLabelAlert] = useState(false);
  const [passwordText, setPasswordText] = useState('1234');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordLabelAlert, setPasswordLabelAlert] = useState(false)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('LogIn screen is focusing right now!');
    });
  }, [navigation]);

  const submitHandler = () => {
    if (emailText === '') {
      setEmailLabelAlert(true)
      setPasswordLabelAlert(false)
      setEmailLabelText('Please enter your email.');
      emailRef.current.focus();
    } else if (passwordText === '') {
      setPasswordLabelText('Please enter your password.');
      setPasswordLabelAlert(true)
      setEmailLabelAlert(false)
      passwordRef.current.focus();
    } else {
      if (emailText != '' && passwordText != '') {
        setEmailLabelAlert(false)
        setPasswordLabelAlert(false)
        if (
          emailText.includes('@gmail.com') ||
          emailText.includes('@outlook.com')
        ) {
          setEmailLabelAlert(false)
          setPasswordLabelAlert(false)
          navigation.navigate('Drawer');
          setEmailText('');
          setPasswordText('');
        } else {
          setEmailLabelAlert(true);
          setEmailLabelText("Please enter valid email.")
          emailRef.current.focus();
        }
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColor.whiteShade,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={LoginStyle.headerView}> Log in </Text>
      <View style={{marginTop: wp('10')}}>
        <Text style={LoginStyle.TextStyle}>Email</Text>
        <NeoTextInput
          value={emailText}
          reference={emailRef}
          autoFocus={true}
          placeholder={'Enter your email'}
          placeholderTextColor={emailLabelText}
          keyboardType={'email-address'}
          onChangeText={text => {
            setEmailText(text);
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
        />
        {emailLabelAlert ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3'),
              color: AppColor.red,
              width: wp('90'),
              alignSelf: 'center',
            }}>
            {emailLabelText}
          </Text>
        ) : null}

        <Text style={LoginStyle.TextStyle}>Password</Text>
        <NeoTextInput
          value={passwordText}
          reference={passwordRef}
          placeholder={'Enter your password'}
          secureTextEntry={!eye}
          returnKeyType={'go'}
          onSubmitEditing={submitHandler}
          onChangeText={text => {
            setPasswordText(text);
          }}>
          <TouchableOpacity
            style={LoginStyle.icon}
            onPress={() => {
              if (eye === true) {
                setEye(false);
              } else {
                setEye(true);
              }
            }}>
            {!eye ? (
              <Entypo
                name="eye-with-line"
                size={wp('4.5')}
                color={AppColor.black}
              />
            ) : (
              <Entypo name="eye" size={wp('4.5')} color={AppColor.black} />
            )}
          </TouchableOpacity>
        </NeoTextInput>
        {passwordLabelAlert ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3'),
              color: AppColor.red,
              width: wp('90'),
              alignSelf: 'center',
            }}>
            {passwordLabelText}
          </Text>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={LoginStyle.ForgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={submitHandler}>
          <NeoButton
            width={wp('55')}
            height={hp('6')}
            backgroundColor={AppColor.primary}
            borderRadius={wp('10')}
            marginBottom={wp('5')}
            marginTop={wp('5')}>
            <Text style={LoginStyle.LoginText}>Log In</Text>
          </NeoButton>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              color: AppColor.blackOpacity8,
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={LoginStyle.SignUpText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LogIn;
