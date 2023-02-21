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

const SignUp = props => {
  const [eye, setEye] = useState(false);
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
            />
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Password</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'default'}
              secureTextEntry={!eye}
              placeholder={'Enter your Password'}>
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
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" color="#c28cde" />
            <Text style={SignUpStyle.termsAndPrivacyStyle1}>I agree with</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle2}>terms</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle3}>and</Text>
            <Text style={SignUpStyle.termsAndPrivacyStyle4}>privacy</Text>
          </View>
          <View style={SignUpStyle.viewSignUpbutton}>
            <TouchableOpacity>
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
