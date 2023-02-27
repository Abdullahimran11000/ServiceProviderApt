import React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppColor} from '../assets/colors/AppColors';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {SignUpStyle} from '../assets/styles/AuthStyle/SignUpStyle';
import CustomModal from '../components/Modal/CustomModal';
import { useNavigation } from '@react-navigation/native';

const SignUp = props => {
  const navigation = useNavigation();
  const [eye, setEye] = useState(false);
  const [showConfirmationMessageInModal , setshowConfirmationMessageInModal] = useState(false)
  const [emailText, setEmailText] = useState('f@gmail.com');
  const [checkEmailTextValid, setCheckEmailTextValid] = useState(false);
  const [emailLabelText, setEmailLabelText] = useState('');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordText, setPasswordText] = useState('123');
  const [passwordValid, setPasswordValid] = useState(false);

  const submitHandler = () => {
    if (emailText === ''){
      setEmailLabelText('Please enter your email.');
      setCheckEmailTextValid(true);
    } 
      else if (emailText.includes('@gmail.com') || emailText.includes('@outlook.com')) 
    {
      setCheckEmailTextValid(false);
      setshowConfirmationMessageInModal(true)
    } 
      else if (passwordText === '')
    {
      setPasswordLabelText('please enter your password');
      setPasswordValid(true)
    } 
      else if (passwordText.length <= 3)
    {
      setPasswordValid(false)
      setPasswordLabelText(false)
    }
      else {
      setEmailText('');
      setPasswordText('');
      setEmailLabelText('Your email is not valid.');
      setPasswordLabelText('password must be maximum upto 8 characters.');
      setCheckEmailTextValid(true);
      setPasswordValid(true)
    }
  };
  return (
    <ScrollView>
      <SafeAreaView
        style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
        <View style={SignUpStyle.mainView}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Fullname</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'default'}
              placeholder={'Enter Your Name'}
            />
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Email</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your Email'}
              onChangeText={text => {setEmailText(text)}}
            />
            {checkEmailTextValid ? (
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: wp('3'),
                    color: AppColor.red,
                  }}>
                  {emailLabelText}
                </Text>
              ) : null}
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Password</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'default'}
              secureTextEntry={!eye}
              placeholder={'Enter your Password'}
              onChangeText={text => {setPasswordText(text)}}>
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
          </View>
          {passwordValid ? (
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: wp('3'),
                    color: AppColor.red,
                  }}>
                  {passwordLabelText}
                </Text>
              ) : null}
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" color="#c28cde" />
            <Text style={SignUpStyle.termsAndPrivacyStyle1}>I agree with</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle2}>terms</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle3}>and</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle4}>privacy</Text>
          </View>
          <View style={SignUpStyle.viewSignUpbutton}>
            <TouchableOpacity onPress={submitHandler}>
              <NeoButton
                lightShadowColor={AppColor.white}
                width={wp('85')}
                height={hp('8')}
                borderRadius={wp('15')}
                backgroundColor={AppColor.primary}>
                <Text style={SignUpStyle.SignUpText}>Sign Up</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
                isVisible={showConfirmationMessageInModal}
                onBackdropPress={() => {setshowConfirmationMessageInModal(false)}}
                modalButtonPress={() => {navigation.navigate('LogIn')}}
                buttonBackgroundColor={AppColor.primary}
                source={require('../assets/animations/success.json')}
                text={'Account Created Successfully'}
                style={{marginTop:wp(10)}}
                buttonText={'Start Now'}
                />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
