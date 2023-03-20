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
import {VerificationStyle} from '../../assets/styles/AuthStyle/VerificationStyle';
import BackButton from '../../components/ScrennHeader/BackButton';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {AppColor} from '../../assets/colors/AppColors';
import CustomModal from '../../components/Modal/CustomModal';

const Verification = ({navigation}) => {
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const [firstTextInput, setFirstTextInput] = useState('1');
  const [secondTextInput, setSecondTextInput] = useState('2');
  const [thirdTextInput, setThirdTextInput] = useState('3');
  const [fourthTextInput, setFourthTextInput] = useState('4');

  const [firstTextInputValidator, setFirstTextInputValidator] = useState(false);
  const [secondTextInputValidator, setSecondTextInputValidator] =
    useState(false);
  const [thirdTextInputValidator, setThirdTextInputValidator] = useState(false);
  const [fourthTextInputValidator, setFourthTextInputValidator] =
    useState(false);

  const [textInputLabel, setTextInputLabel] = useState();

  const submitHandler = () => {
    if (
      firstTextInput === '' ||
      secondTextInput === '' ||
      thirdTextInput === '' ||
      fourthTextInput === ''
    ) {
      setTextInputLabel('please enter your verification code');
      setFirstTextInputValidator(true);
      setSecondTextInputValidator(true);
      setThirdTextInputValidator(true);
      setFourthTextInputValidator(true);
    } else {
      setFirstTextInputValidator(false);
      setSecondTextInputValidator(false);
      setThirdTextInputValidator(false);
      setFourthTextInputValidator(false);
      setShowVerificationMessage(true);
    }
  };

  useEffect(() => {
    firstTextInputRef.current.focus()
    navigation.addListener('focus', () => {
      console.log('Verification screen is focusing right now!');
    });
  }, [navigation]);
  return (
    <SafeAreaView style={VerificationStyle.mainView}>
      <BackButton onPress={() => navigation.goBack()}>
        {'Verification'}
      </BackButton>
      <ScrollView>
        <View>
          <View style={VerificationStyle.animationView}>
            <Lottie
              style={VerificationStyle.animationStyle}
              source={require('../../assets/animations/appIntroVerification.json')}
              autoPlay
            />
          </View>
          <View style={VerificationStyle.tagView}>
            <Text style={VerificationStyle.tagText}>OTP</Text>
          </View>
          <View style={VerificationStyle.paraView}>
            <Text style={VerificationStyle.paraText}>
              Please enter the 4 verification code that we have sent
            </Text>
          </View>
          <View style={VerificationStyle.textView}>
            <View>
              <TextInput
                value={firstTextInput}
                ref={firstTextInputRef}
                style={VerificationStyle.newInputs}
                autoFocus={true}
                maxLength={1}
                keyboardType={'numeric'}
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
            <View>
              <TextInput
                value={secondTextInput}
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
            <View>
              <TextInput
                value={thirdTextInput}
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
            <View>
              <TextInput
                value={fourthTextInput}
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
                onEndEditing={submitHandler}
              />
            </View>
          </View>
          {firstTextInputValidator ? (
            <View style={VerificationStyle.viewOne}>
              <Text style={VerificationStyle.textOne}>{textInputLabel}</Text>
            </View>
          ) : null}
          <View style={VerificationStyle.touchableView}>
            <Text style={VerificationStyle.textStyle}>Don't recieve code?</Text>
            <TouchableOpacity>
              <Text style={VerificationStyle.touchableText1}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View style={VerificationStyle.buttonView}>
            <TouchableOpacity onPress={submitHandler}>
              <NeoButton
                width={wp('55')}
                backgroundColor={AppColor.primary}
                height={hp('6')}
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
            navigation.navigate('RecoverPassword');
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../../assets/animations/email.json')}
          text={'OTP has been verified successfully!'}
          buttonText={'Next'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
