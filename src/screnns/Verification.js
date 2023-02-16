import React, {useEffect, useRef, useState} from 'react';
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
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);

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
                autoFocus={true}
                style={VerificationStyle.newInputs}
                maxLength={1}
                keyboardType={'numeric'}
                ref={firstTextInputRef}
                returnKeyType={'next'}
                onChangeText={value => {
                  if (value) {
                    secondTextInputRef.current.focus();
                  }
                }}
                blurOnSubmit={false}
              />
            </View>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}
              ref={secondTextInputRef}
              returnKeyType={'next'}
              onChangeText={value => {
                if (value.length == 0) {
                  firstTextInputRef.current.focus();
                } else {
                  thirdTextInputRef.current.focus();
                }
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}
              ref={thirdTextInputRef}
              returnKeyType={'next'}
              onChangeText={value => {
                if (value.length == 0) {
                  secondTextInputRef.current.focus();
                } else {
                  fourthTextInputRef.current.focus();
                }
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}
              ref={fourthTextInputRef}
              returnKeyType="previous"
              onChangeText={value => {
                if (value.length == 0) {
                  thirdTextInputRef.current.focus();
                }
              }}
              onEndEditing={()=>{}}
            />
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
