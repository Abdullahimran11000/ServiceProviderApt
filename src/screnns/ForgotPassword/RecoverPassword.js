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

const RecoverPassword = () => {
  const [eye, setEye] = useState(false);
  const navigation = useNavigation();
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [newPasswordInputText, setNewPasswordInputText] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [confirmPasswordInputText, setConfirmPasswordInputText] = useState();
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState('');
  const [confirmPasswordValidator, setConfirmPasswordValidator] =
    useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const saveHandler = () => {
    if (newPasswordInputText === '' || confirmPasswordInputText === '') {
      setPasswordLabel('Please enter your password.');
      setPasswordValidator(true);
      setConfirmPasswordLabel('Please confirm your password.');
      setConfirmPasswordValidator(true);
    } else {
      if (
        (newPasswordInputText.includes('@') ||
          newPasswordInputText.includes('!') ||
          newPasswordInputText.includes('.')) &&
        (confirmPasswordInputText.includes('@') ||
          confirmPasswordInputText.includes('!') ||
          confirmPasswordInputText.includes('.'))
      ) {
        setPasswordValidator(false);
        setConfirmPasswordValidator(false);
        setShowPasswordMessageInModal(true);
      } else {
        setNewPasswordInputText('');
        setConfirmPasswordInputText('');
        setPasswordLabel('Enter Valid Password');
        setConfirmPasswordLabel('Enter your password again');
        setPasswordValidator(true);
        setConfirmPasswordValidator(true);
      }
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

        {passwordValidator ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3.5'),
              color: AppColor.red,
              width: wp('90'),
            }}>
            {passwordLabel}
          </Text>
        ) : null}

        <Text style={RecoverPasswordStyle.labelText1}>Confirm Password</Text>

        <NeoTextInput
          value={confirmPasswordInputText}
          reference={confirmRef}
          placeholder={'Confirm your password'}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => {
            setConfirmPasswordInputText(text);
          }}
          returnKeyType={'next'}
          onSubmitEditing={saveHandler}
        />
        {confirmPasswordValidator ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3.5'),
              color: AppColor.red,
              marginBottom: wp('2'),
              width: wp('90'),
            }}>
            {confirmPasswordLabel}
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
          onBackdropPress={() => {
            setShowPasswordMessageInModal(false);
          }}
          modalButtonPress={() => {
            navigation.replace('LogIn');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/success.json')}
          text={'Your New Password has been set'}
          style={{marginTop: wp('10')}}
          buttonText={'Go to Login'}
        />
        <CustomModal1
          isVisible={showInstructionModal}
          onBackdropPress={() => {
            setShowInstructionModal(false);
          }}
          modalButtonPress={() => {
            setShowInstructionModal(false);
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/Alert.json')}
          text={
            'Your password must have one of the following special character (@ , / , .)'
          }
          style={{marginTop: wp(10)}}
          buttonText={'close'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
