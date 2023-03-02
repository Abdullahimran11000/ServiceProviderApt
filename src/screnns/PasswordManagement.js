import React, {useState, useEffect} from 'react';
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
    AppColor.black,
  );
  const [newPassword, setNewPassword] = useState('');
  const [passwordLabel, setPasswordLabel] = useState(AppColor.black);
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    AppColor.black,
  );
  const [confirmPasswordValidator, setConfirmPasswordValidator] =
    useState(false);

  const submitHandler = () => {
    if (
      newPassword === '' ||
      confirmPassword === '' ||
      currentPassword === ''
    ) {
      setPasswordLabel(AppColor.red);
      setPasswordValidator(true);
      setConfirmPasswordLabel(AppColor.red);
      setConfirmPasswordValidator(true);
      setCurrentPasswordLabel(AppColor.red);
      setCurrentPasswordValidator(true);
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
        setPasswordValidator(true);
        setConfirmPasswordValidator(true);
        setCurrentPasswordValidator(true);
      }
    }
  };
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Password Management screen is focusing right now!');
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
                  styles={{width: wp('70'), position: 'absolute', left: 0}}
                  marginBottom={wp('3')}
                  placeholder={'Enter your password'}
                  // secureTextEntry={!eye}
                  keyboardType={'ascii-capable'}
                  onChangeText={text => {
                    setCurrentPassword(text);
                  }}></NeoTextInput>
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
                  styles={{width: wp('90')}}
                  marginBottom={wp('3')}
                  placeholder={'Enter your password'}
                  secureTextEntry={!eye}
                  keyboardType={'ascii-capable'}
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
                  Enter your New Password
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
                placeholder={'Confirm your password'}
                secureTextEntry={!eye}
                keyboardType={'ascii-capable'}
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
                  Enter your password
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
              navigation.navigate('Dashboard');
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
