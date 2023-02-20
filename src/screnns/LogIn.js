import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColors';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {LoginStyle} from '../assets/styles/AuthStyle/LoginStyle';
import {useNavigation} from '@react-navigation/native';

const LogIn = props => {
  const navigation = useNavigation();
  const [eye, setEye] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [checkEmailTextValid, setCheckEmailTextValid] = useState(false);
  const [emailLabelText, setEmailLabelText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const submitHandler = () => {
    if ((emailText === '')) {
      setEmailLabelText('Please enter your email.');
      setCheckEmailTextValid(true);
    } else if (
      emailText.includes('@gmail.com') ||
      emailText.includes('@outlook.com')
    ) {
      setCheckEmailTextValid(false);
      setEmailText('');
      setPasswordText('');
      navigation.navigate('Drawer')
    } else {
      setEmailText('');
      setPasswordText('');
      setEmailLabelText('Your email is not valid.');
      setCheckEmailTextValid(true);
    }
  };

  return (
    <SafeAreaView
      style={{backgroundColor: AppColor.whiteShade, display: 'flex' , flex: 1}}>
      <ScrollView>
        <View styles={LoginStyle.MainView}>
          <Text style={LoginStyle.headerView}> Log in </Text>
          <View style={LoginStyle.inputFieldsView}>
            <View>
              <Text style={LoginStyle.TextStyle}>Email address </Text>
              <NeoTextInput
                value={emailText}
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your email'}
                keyboardType={'email-address'}
                onChangeText={text => {
                  setEmailText(text);
                }}
                returnKeyType={'next'}
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
            <View>
              <Text style={LoginStyle.TextStyle}>Password</Text>
              <NeoTextInput
                value={passwordText}
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your password'}
                secureTextEntry={!eye}
                onChangeText={text => {
                  setPasswordText(text);
                }}
              />
              <TouchableOpacity
                style={LoginStyle.icon}
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
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={LoginStyle.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={LoginStyle.MainLoginButtonView}>
            <NeoButton
              width={wp('87 ')}
              height={hp('7')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('10')}>
              <TouchableOpacity
                style={LoginStyle.TouchableLogin}
                onPress={submitHandler}>
                <View style={LoginStyle.LogInButtonView}>
                  <Text style={LoginStyle.LoginText}>Log In</Text>
                </View>
              </TouchableOpacity>
            </NeoButton>
          </View>
          <View style={LoginStyle.LastView}>
            <Text style={{fontFamily: 'Poppins-Light'}}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={LoginStyle.SignUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LogIn;
