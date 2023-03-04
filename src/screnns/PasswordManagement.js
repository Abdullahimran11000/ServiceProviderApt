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
import {PasswordManagementStyle} from '../assets/styles/AuthStyle/PasswordManagementStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import BackButton from '../components/ScrennHeader/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {AppColor} from '../assets/colors/AppColors';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../components/Modal/CustomModal';
import CustomModal1 from '../components/Modal/CustomModal';

const PasswordManagement = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordValidator, setCurrentPasswordValidator] =
    useState(false);
  const [currentPasswordLabel, setCurrentPasswordLabel] = useState(
    AppColor.blackOpacity3,
  );
  
  const [newPassword, setNewPassword] = useState('');
  const [passwordLabel, setPasswordLabel] = useState(AppColor.blackOpacity3);
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    AppColor.blackOpacity3,
  );
  const [confirmPasswordValidator, setConfirmPasswordValidator] =
    useState(false);

  const submitHandler = () => {
    if (
      newPassword === '' &&
      confirmPassword === '' &&
      currentPassword === ''
    ) {
      setCurrentPasswordLabel(AppColor.red);
      setPasswordLabel(AppColor.red);
      setConfirmPasswordLabel(AppColor.red);
    }
    if (currentPassword === '') {
      setCurrentPasswordLabel(AppColor.red);
    }
    if (newPassword === '') {
      setPasswordLabel(AppColor.red);
    }
    if (confirmPassword === '') {
      setConfirmPassword(AppColor.red);
    }

    if (
      newPassword !== '' &&
      confirmPassword !== '' &&
      currentPassword !== ''
    ) {
      if (newPassword === confirmPassword) {
        if (
          newPassword.includes('@') ||
          newPassword.includes('/') ||
          newPassword.includes(',') ||
          newPassword.includes('.')
        ) {
          if (newPassword.length >= 8) {
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setCurrentPasswordLabel(AppColor.blackOpacity3);
            setPasswordLabel(AppColor.blackOpacity3);
            setConfirmPasswordLabel(AppColor.blackOpacity3);
            setShowPasswordMessageInModal(true);
            setConfirmPasswordValidator(false);
            setPasswordValidator(false)
            setEye(false)
          } else {
            setPasswordValidator(true);
          }
        } else {
          setShowInstructionModal(true);
        }
      } else {
        setConfirmPasswordValidator(true);
      }
    }
  };

  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    currentPasswordRef.current.focus();
    navigation.addListener('focus', () => {
      console.log('Password Management Screen is focusing right now!');
    });
  }, [navigation]);
  return (
    <ScrollView>
      <SafeAreaView style={PasswordManagementStyle.mainView}>
        <ScrollView>
          <View>
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}>
              {'Recovery Password'}
            </BackButton>
            <View style={PasswordManagementStyle.animationView}>
              <Lottie
                style={PasswordManagementStyle.animationStyle}
                source={require('../assets/animations/appIntroRecover.json')}
                autoPlay
              />
            </View>
            <View style={PasswordManagementStyle.headingView}>
              <Text style={PasswordManagementStyle.tagText}>
                Create new password
              </Text>
            </View>
            <View style={PasswordManagementStyle.paraView}>
              <Text style={PasswordManagementStyle.paraText}>
                Please enter your current & new password.
              </Text>
            </View>
            <View style={PasswordManagementStyle.inputView}>
              <View style={PasswordManagementStyle.labelView}>
                <Text style={PasswordManagementStyle.textViewOne}>
                  Current Password
                </Text>
              </View>
              <View style={PasswordManagementStyle.inputStyleView}>
                <NeoTextInput
                  width={wp('90')}
                  value={currentPassword}
                  autoFocus={true}
                  reference={currentPasswordRef}
                  marginBottom={wp('3')}
                  placeholder={'Enter your password'}
                  placeholderTextColor={currentPasswordLabel}
                  keyboardType={'ascii-capable'}
                  returnKeyType={'next'}
                  onChangeText={text => {
                    setCurrentPassword(text);
                  }}
                  onSubmitEditing={() => {
                    newPasswordRef.current.focus();
                  }}
                />
              </View>
              {currentPasswordValidator ? (
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: wp('3.5'),
                    color: AppColor.red,
                    marginTop: hp('2'),
                    width: wp('90'),
                    alignSelf: 'center',
                  }}>
                  Enter your Current Password
                </Text>
              ) : null}
            </View>
            <View style={PasswordManagementStyle.inputView}>
              <View style={PasswordManagementStyle.inputViewInnerView}>
                <View style={PasswordManagementStyle.labelView}>
                  <Text style={PasswordManagementStyle.labelViewTextTwo}>
                    New Password
                  </Text>
                </View>
                <View style={{flex: 5, marginTop: hp(0.3)}}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowInstructionModal(true);
                    }}>
                    <Icon name="alert-circle" size={wp('4.5')} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={PasswordManagementStyle.inputStyleView}>
                <NeoTextInput
                  width={wp('90')}
                  value={newPassword}
                  reference={newPasswordRef}
                  marginBottom={wp('3')}
                  placeholder={'Enter your password'}
                  placeholderTextColor={passwordLabel}
                  secureTextEntry={!eye}
                  keyboardType={'ascii-capable'}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    confirmPasswordRef.current.focus();
                  }}
                  onChangeText={text => {
                    setNewPassword(text);
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
                      <Entypo
                        name="eye-with-line"
                        size={wp('4.5')}
                        color="black"
                      />
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
                    color: AppColor.red,
                    marginTop: hp('1'),
                    width: wp('90'),
                    alignSelf: 'center',
                  }}>
                  Your password is less than 8 character!
                </Text>
              ) : null}
            </View>

            <View style={PasswordManagementStyle.headingView}>
              <View style={PasswordManagementStyle.labelView}>
                <Text style={PasswordManagementStyle.labelViewTextThree}>
                  Confirm Password
                </Text>
              </View>

              <NeoTextInput
                width={wp('90')}
                value={confirmPassword}
                reference={confirmPasswordRef}
                placeholder={'Confirm your password'}
                placeholderTextColor={confirmPasswordLabel}
                secureTextEntry={!eye}
                keyboardType={'ascii-capable'}
                returnKeyType={'next'}
                onSubmitEditing={submitHandler}
                onChangeText={text => setConfirmPassword(text)}
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
                  Your password is not match with new password.
                </Text>
              ) : null}
            </View>
            <View style={PasswordManagementStyle.buttonView}>
              <TouchableOpacity onPress={submitHandler}>
                <NeoButton
                  darkShadowColor={AppColor.black}
                  width={wp('85')}
                  backgroundColor={AppColor.primary}
                  height={hp('8')}
                  borderRadius={wp('10')}
                  marginBottom={wp('10')}>
                  <Text style={PasswordManagementStyle.touchableText}>
                    Save
                  </Text>
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
              navigation.goBack('Dashboard');
            }}
            buttonBackgroundColor={AppColor.primary}
            source={require('../assets/animations/success.json')}
            text={'your password has been set'}
            style={{marginTop: wp(10)}}
            buttonText={'Dashboard'}
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
            source={require('../assets/animations/Alert.json')}
            text={
              'Your password must have one of the following special character (@ , / , .)'
            }
            style={{marginTop: wp(10)}}
            buttonText={'close'}
          />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordManagement;
