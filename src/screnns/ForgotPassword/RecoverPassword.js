import React, {useState, useRef, useEffect} from 'react';
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

const RecoverPassword = () => {
  const [eye, setEye] = useState(false);
  const navigation = useNavigation();
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState('');
  const [confirmPasswordValidator, setConfirmPasswordValidator] =
    useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const submitHandler = () => {
    if (newPassword === '' || confirmPassword === '') {
      setPasswordLabel('Please enter your password.');
      setPasswordValidator(true);
      setConfirmPasswordLabel('Please confirm your password.');
      setConfirmPasswordValidator(true);
    } else {
      if (
        (newPassword.includes('@') ||
          newPassword.includes('!') ||
          newPassword.includes('.')) &&
        (confirmPassword.includes('@') ||
          confirmPassword.includes('!') ||
          confirmPassword.includes('.'))
      ) {
        setPasswordValidator(false);
        setConfirmPasswordValidator(false);
        setShowPasswordMessageInModal(true);
      } else {
        setNewPassword('');
        setConfirmPassword('');
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
  }, [navigation]);
  return (
    <SafeAreaView style={RecoverPasswordStyle.mainView}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        {'Recovery Password'}
      </BackButton>
      <ScrollView>
        <View>
          <View style={RecoverPasswordStyle.animationView}>
            <Lottie
              style={RecoverPasswordStyle.animationStyle}
              source={require('../../assets/animations/appIntroRecover.json')}
              autoPlay
            />
          </View>
          <View>
            <Text style={RecoverPasswordStyle.tagText}>
              Create new password
            </Text>
          </View>
          <View style={RecoverPasswordStyle.paraView}>
            <Text style={RecoverPasswordStyle.paraText}>
              Please enter your email address to recover your forgoton password
            </Text>
          </View>
          <View style={RecoverPasswordStyle.inputView}>
            <View style={RecoverPasswordStyle.labelView}>
              <Text style={RecoverPasswordStyle.labelText1}>New Password</Text>
              {/* <View style={{width: wp(40), bottom: hp(3.4), marginLeft: wp(40)}}>
              <TouchableOpacity
                onPress={() => {
                  setShowInstructionModal(true);
                }}>
                <Icon name="alert-circle" size={wp('5')} color="black" />
              </TouchableOpacity>
            </View> */}
            </View>

            <NeoTextInput
              value={newPassword}
              reference={passwordRef}
              autoFocus={true}
              width={wp('90')}
              marginBottom={passwordValidator? wp('0'):wp('4')}
              placeholder={'Enter your password'}
              secureTextEntry={!eye}
              keyboardType={'ascii-capable'}
              onChangeText={text => setNewPassword(text)}
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
          </View>
          {passwordValidator ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3.5'),
                marginTop: hp('1'),
                marginBottom: wp('2'),
                width: wp('90'),
                alignSelf: 'center',
                color: AppColor.red,
              }}>
              {passwordLabel}
            </Text>
          ) : null}

          <View>
            <View style={RecoverPasswordStyle.labelView}>
              <Text style={RecoverPasswordStyle.labelText1}>
                Confirm Password
              </Text>
            </View>

            <NeoTextInput
              value={confirmPassword}
              reference={confirmRef}
              width={wp('90')}
              placeholder={'Confirm your password'}
              secureTextEntry={!eye}
              keyboardType={'ascii-capable'}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              returnKeyType={'next'}
              onSubmitEditing={submitHandler}
            />
            {confirmPasswordValidator ? (
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: wp('3.5'),
                  color: AppColor.red,
                  marginTop: hp('2'),
                  width: wp('90'),
                  alignSelf: 'center',
                }}>
                {confirmPasswordLabel}
              </Text>
            ) : null}
          </View>

          <View style={RecoverPasswordStyle.buttonView}>
            <TouchableOpacity onPress={submitHandler}>
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
          </View>
        </View>

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
