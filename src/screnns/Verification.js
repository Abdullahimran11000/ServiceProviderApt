import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {VerificationStyle} from '../assets/styles/AuthStyle/VerificationStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {AppColor} from '../assets/colors/AppColors';

const Verification = props => {
  return (
    <ScrollView>
      <SafeAreaView style={VerificationStyle.mainView}>
        <View>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Verification'}
          </BackButton>

          <View style={VerificationStyle.animationView}>
            <Lottie
              style={VerificationStyle.animationStyle}
              source={require('../assets/animations/appIntroVerification.json')}
              autoPlay
            />
          </View>
          <View style={VerificationStyle.tagView}>
            <Text style={VerificationStyle.tagText}>Verify your email</Text>
          </View>
          <View style={VerificationStyle.paraView}>
            <Text style={VerificationStyle.paraText}>
              Please enter the 4 verification code that we have sent to your
              email
            </Text>
          </View>
          <View style={VerificationStyle.textView}>
            <View>
              <TextInput
                style={VerificationStyle.newInputs}
                maxLength={1}
                keyboardType={'numeric'}
              />
            </View>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
          </View>
          <View style={VerificationStyle.touchableView}>
            <Text style={VerificationStyle.textStyle}>Don't recieve code?</Text>
            <TouchableOpacity>
              <Text style={VerificationStyle.touchableText1}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View style={VerificationStyle.buttonView}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('RecoverPassword')}>
              <NeoButton
                width={wp('90')}
                backgroundColor={AppColor.primary}
                height={hp('7')}
                borderRadius={wp('10')}
                marginBottom={wp('5')}>
                <Text style={VerificationStyle.touchableText}>Verify</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Verification;
