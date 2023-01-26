import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import {AppColor} from '../assets/colors/AppColors'
import BackButton from '../components/ScrennHeader/BackButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import { LoginStyle } from '../assets/styles/AuthStyle/LoginStyle';
const LogIn = props => {
  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
      <ScrollView>
        <View styles={LoginStyle.MainView}>
          <Text style={LoginStyle.headerView}> Log in </Text>
          <View style={LoginStyle.inputFieldsView}>
            <View>
              <Text style={LoginStyle.TextStyle}>Email address </Text>
              <NeoTextInput
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your email'}
                keyboardType={'email-address'}
              />
            </View>
            <View>
              <Text style={LoginStyle.TextStyle}>Password</Text>
              <NeoTextInput
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your password'}
                secureTextEntry={true}
              />
              <TouchableOpacity style={LoginStyle.iconOpacity}>
                <Icon name="eye-slash" size={15} />
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
                onPress={() => {
                  props.navigation.navigate('Drawer');
                }}>
                <View style={LoginStyle.LogInButtonView}>
                  <Text style={LoginStyle.LoginText}>Log In</Text>
                </View>
              </TouchableOpacity>
            </NeoButton>
            <Text style={LoginStyle.orText}>or</Text>
          </View>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <NeoButton
              width={wp('86 ')}
              height={hp('6')}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp('10')}>
              <TouchableOpacity style={LoginStyle.TouchableGoogle}>
                <Image
                  style={LoginStyle.GoogleImage}
                  source={require('../assets/images/monoGoogle.jpg')}
                />
                <Text style={LoginStyle.GoogleText}>Login With Google</Text>
              </TouchableOpacity>
            </NeoButton>
          </View>
          <View style={LoginStyle.LastView}>
            <Text>Don't have an account? </Text>
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
