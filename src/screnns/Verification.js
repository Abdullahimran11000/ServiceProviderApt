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
import CustomModal from '../components/Modal/CustomModal';

const Verification = props => {
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const [firstTextInput, setFirstTextInput] = useState();
  const [secondTextInput, setSecondTextInput] = useState();
  const [thirdTextInput, setThirdTextInput] = useState();
  const [fourthTextInput, setFourthTextInput] = useState();

  const [firstTextInputValidator, setFirstTextInputValidator] = useState(false);
  const [secondTextInputValidator, setSecondTextInputValidator] =
    useState(false);
  const [thirdTextInputValidator, setThirdTextInputValidator] = useState(false);
  const [fourthTextInputValidator, setFourthTextInputValidator] =
    useState(false);

  const [textInputLabel, setTextInputLabel] = useState();
  // const [textInputValidator , setTextInputValidator] = useState(false)

  const submitHandler = () => {
    if (
      firstTextInput === '' ||
      secondTextInput === '' ||
      thirdTextInput === '' ||
      fourthTextInput === ''
    ) {
      setTextInputLabel('please enter your verification code');
      // setTextInputValidator(true)
      setFirstTextInputValidator(true);
      setSecondTextInputValidator(true);
      setThirdTextInputValidator(true);
      setFourthTextInputValidator(true);
      console.log('ni chlliiiiiiiiiiiiiiiiiii');
    } else {
      // setTextInputValidator(false)
      // setShowVerificationMessage(true)
      setFirstTextInputValidator(false);
      setSecondTextInputValidator(false);
      setThirdTextInputValidator(false);
      setFourthTextInputValidator(false);
      setShowVerificationMessage(true);
      console.log('chl gaiiiiiiiiiiiiiiiiiiii');
    }
  };
  return (
    <SafeAreaView style={VerificationStyle.mainView}>
      <BackButton onPress={() => props.navigation.goBack()}>
        {'Verification'}
      </BackButton>
      <ScrollView>
        <View>
          <View style={VerificationStyle.animationView}>
            <Lottie
              style={VerificationStyle.animationStyle}
              source={require('../assets/animations/appIntroVerification.json')}
              autoPlay
            />
          </View>
          <View style={VerificationStyle.tagView}>
            <Text style={VerificationStyle.tagText}>Verify</Text>
          </View>
          <View style={VerificationStyle.paraView}>
            <Text style={VerificationStyle.paraText}>
              Please enter the 4 verification code that we have sent
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
                  setFirstTextInput(value);
                }}
                blurOnSubmit={false}
              />
            </View>
              {firstTextInputValidator ? <Text>{textInputLabel}</Text> : null}
            <View>
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
                setSecondTextInput(value);
              }}
              blurOnSubmit={false}
            />
            </View>
            {secondTextInputValidator ? <Text>-</Text> : null}
            <View>
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
                setThirdTextInput(value);
              }}
              blurOnSubmit={false}
            />
            </View>
            {thirdTextInputValidator ? <Text>-</Text> : null}
            <View>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}
              ref={fourthTextInputRef}
              returnKeyType="go"
              onChangeText={value => {
                if (value.length == 0) {
                  thirdTextInputRef.current.focus();
                }
                setFourthTextInput(value);
              }}
              onEndEditing={() => {}}
            />
            </View>
            {fourthTextInputValidator ? <Text>-</Text> : null}
          </View>
          <View style={VerificationStyle.touchableView}>
            <Text style={VerificationStyle.textStyle}>Don't recieve code?</Text>
            <TouchableOpacity>
              <Text style={VerificationStyle.touchableText1}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View style={VerificationStyle.buttonView}>
            <TouchableOpacity onPress={submitHandler}>
              <NeoButton
                width={wp('85')}
                backgroundColor={AppColor.primary}
                height={hp('8')}
                borderRadius={wp('10')}
                marginBottom={wp('5')}>
                <Text style={VerificationStyle.touchableText}>Verify</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
          isVisible={showVerificationMessage}
          onBackdropPress={() => {
            setShowVerificationMessage(false);
          }}
          lottieStyle={{width: wp('50'), height: wp('50')}}
          modalButtonPress={() => {
            navigation.navigate('Congratulation');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../assets/animations/email.json')}
          text={'your password has been verified'}
          style={{marginTop: wp('12')}}
          buttonText={'Verify'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
