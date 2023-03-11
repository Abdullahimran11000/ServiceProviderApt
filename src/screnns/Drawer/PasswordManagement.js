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
import {PasswordManagementStyle} from '../../assets/styles/AuthStyle/PasswordManagementStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import BackButton from '../../components/ScrennHeader/BackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {AppColor} from '../../assets/colors/AppColors';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../../components/Modal/CustomModal';
import CustomModal1 from '../../components/Modal/CustomModal';

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
      setConfirmPasswordLabel(AppColor.red);
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
            setPasswordValidator(false);
            setEye(false);
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
        {'Recovery Password'}
      </BackButton>
      <ScrollView
        style={{width: wp('100')}}
        contentContainerStyle={{alignItems: 'center'}}>
        <Lottie
          style={PasswordManagementStyle.animationStyle}
          source={require('../../assets/animations/appIntroRecover.json')}
          autoPlay
        />

        <View style={PasswordManagementStyle.headingView}>
          <Text style={PasswordManagementStyle.tagText}>
            Create new password
          </Text>
          <Text style={PasswordManagementStyle.paraText}>
            Please enter your current & new password.
          </Text>
        </View>
        <Text style={PasswordManagementStyle.textViewOne}>
          Current Password
        </Text>
        <NeoTextInput
          value={currentPassword}
          autoFocus={true}
          reference={currentPasswordRef}
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
        <Text style={[PasswordManagementStyle.textViewOne]}>New Password</Text>

        <NeoTextInput
          value={newPassword}
          reference={newPasswordRef}
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
            Your password is less than 8 character!
          </Text>
        ) : null}

        <Text style={PasswordManagementStyle.textViewOne}>
          Confirm Password
        </Text>

        <NeoTextInput
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
              width: wp('90'),
            }}>
            Your password is not match with new password.
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
          onBackdropPress={() => {
            setShowPasswordMessageInModal(false);
          }}
          modalButtonPress={() => {
            navigation.goBack('Dashboard');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/success.json')}
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

export default PasswordManagement;
