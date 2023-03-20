import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../assets/colors/AppColors';
import {launchImageLibrary} from 'react-native-image-picker';
import NeoTextInput from '../../../components/NeoMorphTextInput/NeoTextInput';
import {MyProfileStyle} from '../../../assets/styles/DashboardStyle/MyProfileStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NeoButton from '../../../components/NeoMorphButton/NeoButton';
import Header from '../../../components/ScreenHeader/Header';
import {Neomorph} from 'react-native-neomorph-shadows';
import CustomModal from '../../../components/Modal/CustomModal';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  Menu,
} from 'react-native-popup-menu';

const MyProfile = ({navigation}) => {
  const [nameText, setNameText] = useState('');
  const [nameLabelAlert, setNameLabelAlert] = useState(false);
  const [dateText, setDateText] = useState('');
  const [dateLabelAlert, setDateLabelAlert] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [emailLabelText, setEmailLabelText] = useState('');
  const [emailLabelAlert, setEmailLabelAlert] = useState(false);
  const [mobileNoText, setMobileNoText] = useState('');
  const [mobileLabelAlert, setMobileLabelAlert] = useState(false);
  const [optionShow, setOptionShow] = useState('Gender');
  const [genderLabelAlert, setGenderLabelAlert] = useState(false);
  const [genderTextColor, setGenderTextColor] = useState(
    AppColor.blackOpacity3,
  );

  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const genderRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);

  const [neumorphHeight, setNeumorphHeight] = useState(true);
  const [uploadImageList, setUploadImageList] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const submitHandler = () => {
    if (nameText === '') {
      setNameLabelAlert(true);
      setDateLabelAlert(false);
      setGenderLabelAlert(false);
      setMobileLabelAlert(false);
      setEmailLabelAlert(false);
      nameRef.current.focus();
    } else if (dateText === '') {
      setDateLabelAlert(true);
      setNameLabelAlert(false);
      setGenderLabelAlert(false);
      setMobileLabelAlert(false);
      setEmailLabelAlert(false);
      dateRef.current.focus();
    } else if (optionShow === 'Gender') {
      setGenderLabelAlert(true);
      setDateLabelAlert(false);
      setNameLabelAlert(false);
      setMobileLabelAlert(false);
      setEmailLabelAlert(false);
    } else if (emailText === '') {
      setEmailLabelAlert(true);
      setGenderLabelAlert(false);
      setDateLabelAlert(false);
      setNameLabelAlert(false);
      setMobileLabelAlert(false);
      setEmailLabelText('Please enter your email.');
      emailRef.current.focus();
    } else if (mobileNoText === '') {
      setMobileLabelAlert(true);
      setGenderLabelAlert(false);
      setDateLabelAlert(false);
      setNameLabelAlert(false);
      setEmailLabelAlert(false);
      mobileRef.current.focus();
    } else {
      if (
        nameText !== '' &&
        dateText !== '' &&
        emailText !== '' &&
        mobileNoText !== '' &&
        optionShow !== 'Gender'
      ) {
        if (
          emailText.includes('@gmail.com') ||
          emailText.includes('@outlook.com')
        ) {
          setMobileLabelAlert(false);
          setGenderLabelAlert(false);
          setDateLabelAlert(false);
          setNameLabelAlert(false);
          setEmailLabelAlert(false);
          setNameText('');
          setDateText('');
          setEmailText('');
          setMobileNoText('');
          setOptionShow('Gender');
          setModalOpen(true);
          setEmailLabelAlert(false);
        } else {
          setEmailLabelAlert(true);
          setEmailLabelText('Please enter valid email.');
          emailRef.current.focus();
        }
      }
    }
  };

  const imagePickerHandler = async () => {
    await launchImageLibrary({}, arr => {
      if (arr.assets != undefined) {
        setSelectedImageUrl(setUploadImageList([{url: arr.assets[0].uri}]));
      }
    });
  };

  return (
    <SafeAreaView style={MyProfileStyle.mainView}>
      <View style={{flex: 1}}>
        <Header
          buttonColor={AppColor.whiteShade}
          styles={{color: AppColor.black}}
          stylesText={{color: AppColor.black}}
          backgroundColor={AppColor.whiteShade}>
          {'My Profile'}
        </Header>
        
      </View>
      <View style={{flex: 9}}>
        <ScrollView
          contentContainerStyle={{alignItems: 'center', flexGrow: 9}} style={{width: wp('100')}}>
          <View style={{alignItems: 'center'}}>
            <View style={MyProfileStyle.innerProfileView}>
              {selectedImageUrl === '' ? (
                <FontAwesome
                  name={'user-o'}
                  size={wp('10')}
                  color={AppColor.black}
                />
              ) : (
                <ImageZoom
                  cropWidth={wp('26')}
                  cropHeight={wp('26')}
                  imageHeight={wp('25')}
                  imageWidth={wp('25')}
                  style={{
                    borderRadius: wp('15'),
                    height: wp('25'),
                    width: wp('25'),
                    backgroundColor: AppColor.whiteShade,
                    overflow: 'hidden',
                  }}>
                  <ImageBackground
                    imageStyle={{borderRadius: wp('15')}}
                    style={MyProfileStyle.imageStyle}
                    source={{uri: uploadImageList[0].url}}
                    resizeMode={'contain'}></ImageBackground>
                </ImageZoom>
              )}

              <TouchableOpacity
                onPress={imagePickerHandler}
                style={MyProfileStyle.iconTouchableStyle}>
                <Icon size={wp('4')} name="camera"></Icon>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={MyProfileStyle.TextStyle}>Full Name</Text>

          <NeoTextInput
            autoFocus={true}
            value={nameText}
            reference={nameRef}
            placeholder={'Enter your name'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onChangeText={text => {
              setNameText(text);
            }}
            onSubmitEditing={() => {
              dateRef.current.focus();
            }}
          />

          {nameLabelAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
              }}>
              Please enter your name.
            </Text>
          ) : null}

          <Text style={MyProfileStyle.TextStyle}>Date of Birth</Text>

          <NeoTextInput
            value={dateText}
            reference={dateRef}
            placeholder={'Enter your birth'}
            keyboardType={'numeric'}
            returnKeyType={'next'}
            onChangeText={text => {
              setDateText(text);
            }}
            onSubmitEditing={() => {
              emailRef.current.focus();
            }}
          />

          {dateLabelAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
              }}>
              Please enter your birth.
            </Text>
          ) : null}
          <Text style={MyProfileStyle.TextStyle}>Gender</Text>

          <MenuProvider>
            <Menu
              onSelect={value => {
                setNeumorphHeight(true);
                setOptionShow(value);
                setGenderTextColor(AppColor.black);
              }}>
              <MenuTrigger
                onPress={() => {
                  setNeumorphHeight(false);
                }}>
                <Neomorph
                  style={{
                    width: wp('90'),
                    height: hp('7.5'),
                    backgroundColor: AppColor.whiteShade,
                    shadowRadius: 4,
                    borderRadius: wp('3'),
                    marginTop: wp('2'),
                    marginBottom: neumorphHeight ? wp('5') : wp('25'),
                    justifyContent: 'center',
                  }}>
                  <Text
                    ref={genderRef}
                    style={{
                      fontFamily: 'Poppins-Light',
                      paddingLeft: wp('3'),
                      color: genderTextColor,
                      fontSize: wp('4'),
                    }}>
                    {optionShow}
                  </Text>
                </Neomorph>
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{
                  borderRadius: wp('4'),
                  width: wp('100'),
                }}
                style={{
                  borderRadius: wp('4'),
                  width: wp('40'),
                  backgroundColor: AppColor.whiteShade,
                  elevation: 2,
                  position: 'absolute',
                  right: wp('11'),
                  top: wp('2'),
                }}>
                <MenuOption value={'Male'}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      color: AppColor.black,
                      paddingLeft: wp('2'),
                    }}>
                    Male
                  </Text>
                </MenuOption>
                <MenuOption value={'Female'}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      color: AppColor.black,
                      paddingLeft: wp('2'),
                    }}>
                    Female
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </MenuProvider>
          {genderLabelAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
              }}>
              Please enter your gender.
            </Text>
          ) : null}
          <Text style={MyProfileStyle.TextStyle}>Email</Text>
          <NeoTextInput
            value={emailText}
            reference={emailRef}
            keyboardType={'email-address'}
            placeholder={'Enter your email'}
            returnKeyType={'next'}
            onChangeText={text => {
              setEmailText(text);
            }}
            onSubmitEditing={() => {
              mobileRef.current.focus();
            }}
          />
          {emailLabelAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
              }}>
              {emailLabelText}
            </Text>
          ) : null}
          <Text style={MyProfileStyle.TextStyle}>Mobile Number</Text>
          <NeoTextInput
            value={mobileNoText}
            reference={mobileRef}
            keyboardType={'number-pad'}
            returnKeyType={'go'}
            placeholder={'Enter your number'}
            onChangeText={text => {
              setMobileNoText(text);
            }}
            onSubmitEditing={submitHandler}
          />
          {mobileLabelAlert ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
              }}>
              Please enter your mobile number.
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              marginVertical: wp('5'),
              alignItems: 'center',
            }}
            onPress={submitHandler}>
            <NeoButton
              width={wp('55')}
              height={hp('6')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('10')}>
              <Text style={MyProfileStyle.buttonText}>Save</Text>
            </NeoButton>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <CustomModal
        isVisible={modalOpen}
        onBackdropPress={() => {
          setModalOpen(false);
        }}
        source={require('../../../assets/animations/profile.json')}
        lottieStyle={{width: wp('35'), height: wp('35')}}
        text={'Your profile is updated successfully.'}
        style={{marginTop: wp('10')}}
        modalButtonPress={() => {
          setModalOpen(false);
          navigation.goBack();
        }}
        buttonBackgroundColor={'#00B46E'}
        buttonText={'Close'}
      />
    </SafeAreaView>
  );
};
export default MyProfile;
