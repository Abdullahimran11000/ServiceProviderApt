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
  const [newPasswordInputText, setNewPasswordInputText] = useState('');
  const [passwordLabel, setPasswordLabel] = useState(AppColor.blackOpacity3);
  const [passwordLength, setPasswordLength] = useState(false);
  const [confirmPasswordInputText, setConfirmPasswordInputText] = useState('');
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    AppColor.blackOpacity3,
  );
  const [passwordMatching, setPasswordMatching] = useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const saveHandler = () => {
    if (newPasswordInputText === '') {
      setPasswordLabel(AppColor.red);
      passwordRef.current.focus();
    } else if (confirmPasswordInputText === '') {
      setConfirmPasswordLabel(AppColor.red);
      confirmRef.current.focus();
    } else {
      if (
        newPasswordInputText.includes('@') ||
        newPasswordInputText.includes('!') ||
        newPasswordInputText.includes('.')
      ) {
        if (newPasswordInputText.length >= 8) {
          if (newPasswordInputText === confirmPasswordInputText) {
            setPasswordLength(false);
            setShowPasswordMessageInModal(true);
            setPasswordLabel(AppColor.blackOpacity3);
            setConfirmPasswordLabel(AppColor.blackOpacity3);
            setNewPasswordInputText('');
            setConfirmPasswordInputText('');
          } else {
            setPasswordMatching(true);
            setShowInstructionModal(true);
          }
        } else {
          setPasswordLength(true);
          setShowPasswordMessageInModal(true);
        }
      } else {
        setShowInstructionModal(true);
        setPasswordMatching(false);
      }
    }
  };

  const modalHandlerOne = () => {
    if (passwordLength) {
      setShowPasswordMessageInModal(false);
      passwordRef.current.focus();
    } else {
      navigation.replace('LogIn');
    }
  };

  const modalHandlerTwo = () => {
    if (passwordMatching) {
      confirmRef.current.focus();
      setShowInstructionModal(false);
    } else {
      passwordRef.current.focus();
      setShowInstructionModal(false);
    }
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
          value={newPasswordInputText}
          reference={passwordRef}
          autoFocus={true}
          placeholder={'Enter your password'}
          placeholderTextColor={passwordLabel}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => setNewPasswordInputText(text)}
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

        <Text style={RecoverPasswordStyle.labelText1}>Confirm Password</Text>

        <NeoTextInput
          value={confirmPasswordInputText}
          reference={confirmRef}
          placeholder={'Confirm your password'}
          placeholderTextColor={confirmPasswordLabel}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => {
            setConfirmPasswordInputText(text);
          }}
          returnKeyType={'next'}
          onSubmitEditing={saveHandler}
        />

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
          buttonBackgroundColor={passwordLength ? '#E36A6A' : AppColor.primary}
          source={
            passwordLength
              ? require('../../assets/animations/Alert.json')
              : require('../../assets/animations/passwordLength.json')
          }
          text={
            passwordLength
              ? 'Your new password must be 8 character long.'
              : 'Your New Password has been set.'
          }
          buttonText={passwordLength ? 'Close' : 'Login'}
        />
        <CustomModal1
          isVisible={showInstructionModal}
          onBackdropPress={modalHandlerTwo}
          modalButtonPress={modalHandlerTwo}
          buttonBackgroundColor={'#E36A6A'}
          source={require('../../assets/animations/Alert.json')}
          text={
            passwordMatching
              ? 'Your confirm password is not match with your new password.'
              : 'Your password must have one of the following special character (@ , / , .)'
          }
          buttonText={'Close'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
