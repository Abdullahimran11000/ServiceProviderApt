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

  const [firstTextInput, setFirstTextInput] = useState('');
  const [secondTextInput, setSecondTextInput] = useState('');
  const [thirdTextInput, setThirdTextInput] = useState('');
  const [fourthTextInput, setFourthTextInput] = useState('');

  const [inputValidator, setInputValidator] = useState(false);

  const submitHandler = () => {
    if (firstTextInput === '') {
      setInputValidator(true);
      firstTextInputRef.current.focus();
    } else if (secondTextInput === '') {
      setInputValidator(true);
      secondTextInputRef.current.focus();
    } else if (thirdTextInput === '') {
      setInputValidator(true);
      thirdTextInputRef.current.focus();
    } else if (fourthTextInput === '') {
      setInputValidator(true);
      fourthTextInputRef.current.focus();
    } else {
      setInputValidator(false);
      setShowVerificationMessage(true);
    }
  };

  useEffect(() => {
    firstTextInputRef.current.focus();
    navigation.addListener('focus', () => {
      console.log('Verification screen is focusing right now!');
    });
  }, [navigation]);
  return (
    <SafeAreaView style={VerificationStyle.mainView}>
      <View style={VerificationStyle.headerCont}>
        <BackButton onPress={() => navigation.goBack()}>
          {'Verification'}
        </BackButton>
      </View>
      <View style={VerificationStyle.bodyCont}>
        <ScrollView contentContainerStyle={VerificationStyle.scrollView}>
          <Lottie
            style={VerificationStyle.animationStyle}
            source={require('../../assets/animations/appIntroVerification.json')}
            autoPlay
          />
          <Text style={VerificationStyle.tagText}>OTP</Text>
          <Text style={VerificationStyle.paraText}>
            Please enter the 4 verification code that we have sent
          </Text>
          <View style={VerificationStyle.textInputView}>
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
          {inputValidator ? (
            <Text style={VerificationStyle.textOne}>
              Please enter your verification code
            </Text>
          ) : null}
          <Text style={VerificationStyle.textStyle}>Don't recieve code?</Text>
          <TouchableOpacity>
            <Text style={VerificationStyle.touchableText1}>Resend code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={submitHandler}
            style={VerificationStyle.buttonStyle}>
            <NeoButton
              width={wp('55')}
              backgroundColor={AppColor.primary}
              height={hp('6')}
              borderRadius={wp('10')}
              marginBottom={wp('5')}>
              <Text style={VerificationStyle.touchableText}>Verify</Text>
            </NeoButton>
          </TouchableOpacity>
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
      </View>
    </SafeAreaView>
  );
};

export default Verification;
