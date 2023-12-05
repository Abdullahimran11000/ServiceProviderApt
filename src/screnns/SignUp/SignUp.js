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
  const [nameLabelAlert, setNameLabelAlert] = useState('');
  const [emailText, setEmailText] = useState('');
  const [emailLabelText, setEmailLabelText] = useState('');
  const [emailLabelAlert, setEmailLabelAlert] = useState(false);
  const [passwordText, setPasswordText] = useState('');
  const [passwordLabelAlert, setPasswordLabelAlert] = useState('');

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const signUpHandler = () => {
    if (nameText === '') {
      setNameLabelAlert(true);
      setEmailLabelAlert(false);
      setPasswordLabelAlert(false);
      nameInputRef.current.focus();
    } else if (emailText === '') {
      setEmailLabelText('Please enter your email.');
      emailInputRef.current.focus();
      setEmailLabelAlert(true);
      setNameLabelAlert(false);
      setPasswordLabelAlert(false);
    } else if (passwordText === '') {
      setPasswordLabelAlert(true);
      setEmailLabelAlert(false);
      setNameLabelAlert(false);
      passwordInputRef.current.focus();
    } else {
      if (nameText !== '' && emailText !== '' && passwordText !== '') {
        if (
          emailText.includes('@gmail.com') ||
          emailText.includes('@outlook.com')
        ) {
          setNameLabelAlert(false);
          setEmailLabelAlert(false);
          setPasswordLabelAlert(false);
          setNameText('');
          setEmailText('');
          setPasswordText('');
          setshowConfirmationMessageInModal(true);
          nameInputRef.current.focus();
        } else {
          setEmailLabelAlert(true);
          setEmailLabelText('Please enter valid email.');
          emailInputRef.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('SignUp screen is focusing right now!');
    });
  }, []);

  return (
    <SafeAreaView style={SignUpStyle.mainView}>
      <View style={SignUpStyle.headerCont}>
        <BackButton onPress={() => navigation.goBack()}>{'Sign Up'}</BackButton>
      </View>
      <View style={SignUpStyle.bodyCont}>
        <Text style={SignUpStyle.text}>Full Name</Text>
        <NeoTextInput
          value={nameText}
          autoFocus={true}
          reference={nameInputRef}
          keyboardType={'default'}
          returnKeyType={'next'}
          placeholder={'Enter your name'}
          onChangeText={text => {
            setNameText(text);
          }}
          onSubmitEditing={() => {
            emailInputRef.current.focus();
          }}
        />
        {nameLabelAlert ? (
          <Text style={SignUpStyle.labelText}>Please enter your name.</Text>
        ) : null}
        <Text style={SignUpStyle.text}>Email</Text>
        <NeoTextInput
          value={emailText}
          reference={emailInputRef}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          placeholder={'Enter your email'}
          onChangeText={text => {
            setEmailText(text);
          }}
          onSubmitEditing={() => {
            passwordInputRef.current.focus();
          }}
        />
        {emailLabelAlert ? (
          <Text style={SignUpStyle.labelText}>{emailLabelText}</Text>
        ) : null}
        <Text style={SignUpStyle.text}>Password</Text>
        <NeoTextInput
          value={passwordText}
          width={wp('90')}
          reference={passwordInputRef}
          keyboardType={'default'}
          secureTextEntry={!eye}
          placeholder={'Enter your password'}
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
        {passwordLabelAlert ? (
          <Text style={SignUpStyle.labelText}>Please enter your password.</Text>
        ) : null}
        <View style={SignUpStyle.checkboxCont}>
          <Checkbox status="checked" color={AppColor.primary} />
          <Text style={SignUpStyle.checkBoxText}>
            I agree with <Text style={SignUpStyle.spanText}>terms</Text> &{' '}
            <Text style={SignUpStyle.spanText}>conditions</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={SignUpStyle.buttonCont}
          onPress={signUpHandler}>
          <NeoButton
            lightShadowColor={AppColor.white}
            width={wp('55')}
            height={hp('6')}
            borderRadius={wp('10')}
            backgroundColor={AppColor.primary}>
            <Text style={SignUpStyle.signUpText}>Sign Up</Text>
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
