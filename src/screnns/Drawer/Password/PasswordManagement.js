import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {PasswordManagementStyle} from '../../../assets/styles/AuthStyle/PasswordManagementStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import BackButton from '../../../components/ScrennHeader/BackButton';
import NeoButton from '../../../components/NeoMorphButton/NeoButton';
import {AppColor} from '../../../assets/colors/AppColors';
import NeoTextInput from '../../../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../../../components/Modal/CustomModal';

const PasswordManagement = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordLabelAlert, setCurrentPasswordLabelAlert] =
    useState(false);

  const [passwordText, setPasswordText] = useState('');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordLabelAlert, setPasswordLabelAlert] = useState(false);
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [confirmPasswordLabelText, setconfirmPasswordLabelText] = useState('');
  const [confirmPasswordLabelAlert, setConfirmPasswordLabelAlert] =
    useState(false);

  const submitHandler = () => {
    if (currentPassword === '') {
      setPasswordLabelAlert(false);
      setConfirmPasswordLabelAlert(false);
      setCurrentPasswordLabelAlert(true);
      currentPasswordRef.current.focus();
    } else if (passwordText === '') {
      setPasswordLabelAlert(true);
      setConfirmPasswordLabelAlert(false);
      setCurrentPasswordLabelAlert(false);
      setPasswordLabelText('Please enter your password');
      newPasswordRef.current.focus();
    } else if (confirmPasswordText === '') {
      setconfirmPasswordLabelText('Please enter your password');
      setPasswordLabelAlert(false);
      setConfirmPasswordLabelAlert(true);
      setCurrentPasswordLabelAlert(false);
      confirmPasswordRef.current.focus();
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
            setConfirmPasswordLabelAlert(false);
            setPasswordText('');
            setConfirmPasswordText('');
            setCurrentPassword('');
          } else {
            setConfirmPasswordLabelAlert(true);
            setPasswordLabelAlert(false);
            setconfirmPasswordLabelText(
              'Your confirm password is not match with new password.',
            );
            confirmPasswordRef.current.focus();
          }
        } else {
          setConfirmPasswordLabelAlert(false);
          setPasswordLabelAlert(true);
          setPasswordLabelText('Your new password must be 8 character long..');
          newPasswordRef.current.focus();
        }
      } else {
        setConfirmPasswordLabelAlert(false);
        setPasswordLabelAlert(true);
        setPasswordLabelText(
          'Please enter any special character in your password.',
        );
        newPasswordRef.current.focus();
      }
    }
  };

  const modalHandlerOne = () => {
    navigation.goBack();
  };

  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Password Management Screen is focusing right now!');
    });
  }, [navigation]);
  return (
    <SafeAreaView style={PasswordManagementStyle.mainView}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        {'Password Management'}
      </BackButton>
      <ScrollView contentContainerStyle={PasswordManagementStyle.scrollView}>
        <Lottie
          style={PasswordManagementStyle.animationStyle}
          source={require('../../../assets/animations/appIntroRecover.json')}
          autoPlay
        />

        <Text style={PasswordManagementStyle.tagText}>Create new password</Text>
        <Text style={PasswordManagementStyle.paraText}>
          Please enter your current & new password.
        </Text>
        <Text style={PasswordManagementStyle.textViewOne}>
          Current Password
        </Text>
        <NeoTextInput
          value={currentPassword}
          autoFocus={true}
          reference={currentPasswordRef}
          placeholder={'Enter your password'}
          keyboardType={'ascii-capable'}
          returnKeyType={'next'}
          onChangeText={text => {
            setCurrentPassword(text);
          }}
          onSubmitEditing={() => {
            newPasswordRef.current.focus();
          }}
        />
        {currentPasswordLabelAlert ? (
          <Text style={PasswordManagementStyle.alertText}>
            Please enter your current password.
          </Text>
        ) : null}
        <Text style={[PasswordManagementStyle.textViewOne]}>New Password</Text>

        <NeoTextInput
          value={passwordText}
          reference={newPasswordRef}
          placeholder={'Enter your password'}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            confirmPasswordRef.current.focus();
          }}
          onChangeText={text => {
            setPasswordText(text);
          }}>
          <TouchableOpacity
            style={PasswordManagementStyle.iconTouchableStyle}
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
          <Text style={PasswordManagementStyle.alertText}>
            {passwordLabelText}
          </Text>
        ) : null}

        <Text style={PasswordManagementStyle.textViewOne}>
          Confirm Password
        </Text>

        <NeoTextInput
          value={confirmPasswordText}
          reference={confirmPasswordRef}
          placeholder={'Confirm your password'}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          returnKeyType={'next'}
          onSubmitEditing={submitHandler}
          onChangeText={text => setConfirmPasswordText(text)}
        />
        {confirmPasswordLabelAlert ? (
          <Text style={PasswordManagementStyle.alertText}>
            {confirmPasswordLabelText}
          </Text>
        ) : null}

        <TouchableOpacity onPress={submitHandler}>
          <NeoButton
            darkShadowColor={AppColor.black}
            width={wp('55')}
            backgroundColor={AppColor.primary}
            height={hp('6')}
            borderRadius={wp('10')}
            marginVertical={wp('5')}>
            <Text style={PasswordManagementStyle.touchableText}>Save</Text>
          </NeoButton>
        </TouchableOpacity>

        <CustomModal
          isVisible={showPasswordMessageInModal}
          onBackdropPress={modalHandlerOne}
          modalButtonPress={modalHandlerOne}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../../assets/animations/passwordLength.json')}
          text={'Your New Password has been set.'}
          buttonText={'Back'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordManagement;
