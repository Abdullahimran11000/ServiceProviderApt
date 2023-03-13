import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {RecoverPasswordStyle} from '../../assets/styles/AuthStyle/RecoverPasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/ScrennHeader/BackButton';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {AppColor} from '../../assets/colors/AppColors';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../../components/Modal/CustomModal';
import CustomModal1 from '../../components/Modal/CustomModal';
import {Neomorph} from 'react-native-neomorph-shadows';

const RecoverPassword = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [passwordText, setPasswordText] = useState('');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordLabelAlert, setPasswordLabelAlert] = useState(false);
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [confirmPasswordLabelText, setconfirmPasswordLabelText] = useState('');
  const [confirmPasswordLabelAlert, setConfirmPasswordLabelAlert] =
    useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const saveHandler = () => {
    if (passwordText === '') {
      setPasswordLabelAlert(true);
      setConfirmPasswordLabelAlert(false);
      setPasswordLabelText('Please enter your password');
      passwordRef.current.focus();
    } else if (confirmPasswordText === '') {
      setconfirmPasswordLabelText('Please enter your password');
      setPasswordLabelAlert(false);
      setConfirmPasswordLabelAlert(true);
      confirmRef.current.focus();
    } else {
      setPasswordLabelAlert(false);
      setConfirmPasswordLabelAlert(false);
      if (
        passwordText.includes('@') ||
        passwordText.includes('!') ||
        passwordText.includes('.')
      ) {
        if (passwordText.length >= 8) {
          if (passwordText === confirmPasswordText) {
            setShowPasswordMessageInModal(true);
            setPasswordLabelAlert(false);
            setConfirmPasswordLabelAlert(false);
            setPasswordText('');
            setConfirmPasswordText('');
          } else {
            setConfirmPasswordLabelAlert(true);
            setPasswordLabelAlert(false);
            setconfirmPasswordLabelText(
              'Your confirm password is not match with new password.',
            );
            confirmRef.current.focus();
          }
        } else {
          setConfirmPasswordLabelAlert(false);
          setPasswordLabelAlert(true);
          setPasswordLabelText('Your new password must be 8 character long..');
          passwordRef.current.focus();
        }
      } else {
        setConfirmPasswordLabelAlert(false);
        setPasswordLabelAlert(true);
        setPasswordLabelText(
          'Please enter any special character in your password.',
        );
        passwordRef.current.focus();
      }
    }
  };

  const modalHandlerOne = () => {
    navigation.replace('LogIn');
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Recover Password screen is focusing right now!');
    });
  }, []);
  return (
    <SafeAreaView style={RecoverPasswordStyle.mainView}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        {'Recovery Password'}
      </BackButton>

      <ScrollView
        style={{width: wp('100')}}
        contentContainerStyle={{alignItems: 'center'}}>
        <Lottie
          style={RecoverPasswordStyle.animationStyle}
          source={require('../../assets/animations/appIntroRecover.json')}
          autoPlay
        />
        <Text style={RecoverPasswordStyle.tagText}>Create new password</Text>
        <Text style={RecoverPasswordStyle.paraText}>
          Please enter your email address to recover your forgoton password
        </Text>
        <Text style={RecoverPasswordStyle.labelText1}>New Password</Text>

        <NeoTextInput
          value={passwordText}
          reference={passwordRef}
          autoFocus={true}
          placeholder={'Enter your password'}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => setPasswordText(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            confirmRef.current.focus();
          }}>
          <TouchableOpacity
            style={RecoverPasswordStyle.iconTouchableStyle}
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
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3'),
              color: AppColor.red,
              width: wp('90'),
            }}>
            {passwordLabelText}
          </Text>
        ) : null}

        <Text style={RecoverPasswordStyle.labelText1}>Confirm Password</Text>

        <NeoTextInput
          value={confirmPasswordText}
          reference={confirmRef}
          placeholder={'Confirm your password'}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => {
            setConfirmPasswordText(text);
          }}
          returnKeyType={'next'}
          onSubmitEditing={saveHandler}
        />
        {confirmPasswordLabelAlert ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3'),
              color: AppColor.red,
              width: wp('90'),
            }}>
            {confirmPasswordLabelText}
          </Text>
        ) : null}

        <TouchableOpacity
          style={{alignSelf: 'center', marginVertical: wp('5')}}
          onPress={saveHandler}>
          <NeoButton
            darkShadowColor={AppColor.black}
            width={wp('55')}
            backgroundColor={AppColor.primary}
            height={hp('6')}
            borderRadius={wp('10')}
            marginBottom={wp('10')}>
            <Text style={RecoverPasswordStyle.touchableText}>Save</Text>
          </NeoButton>
        </TouchableOpacity>

        <CustomModal
          isVisible={showPasswordMessageInModal}
          onBackdropPress={modalHandlerOne}
          modalButtonPress={modalHandlerOne}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/passwordLength.json')}
          text={'Your New Password has been set.'}
          buttonText={'Login'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
