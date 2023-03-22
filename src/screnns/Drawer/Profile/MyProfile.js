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
      <View style={MyProfileStyle.headerCont}>
        <Header
          buttonColor={AppColor.whiteShade}
          styles={{color: AppColor.black}}
          stylesText={{color: AppColor.black}}
          backgroundColor={AppColor.whiteShade}>
          {'My Profile'}
        </Header>
      </View>
      <View style={MyProfileStyle.bodyCont}>
        <ScrollView contentContainerStyle={MyProfileStyle.scrollView}>
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
                style={MyProfileStyle.imageView}>
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

          <Text style={MyProfileStyle.textStyle}>Full Name</Text>

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
            <Text style={MyProfileStyle.alertText}>
              Please enter your name.
            </Text>
          ) : null}

          <Text style={MyProfileStyle.textStyle}>Date of Birth</Text>

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
            <Text style={MyProfileStyle.alertText}>
              Please enter your birth.
            </Text>
          ) : null}
          <Text style={MyProfileStyle.textStyle}>Gender</Text>

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
                  style={[
                    MyProfileStyle.menuCont,
                    {marginBottom: neumorphHeight ? wp('5') : wp('25')},
                  ]}>
                  <Text
                    ref={genderRef}
                    style={[MyProfileStyle.menuText, {color: genderTextColor}]}>
                    {optionShow}
                  </Text>
                </Neomorph>
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{
                  borderRadius: wp('4'),
                  width: wp('100'),
                }}
                style={MyProfileStyle.menuPopup}>
                <MenuOption value={'Male'}>
                  <Text style={MyProfileStyle.menuPopupText}>Male</Text>
                </MenuOption>
                <MenuOption value={'Female'}>
                  <Text style={MyProfileStyle.menuPopupText}>Female</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </MenuProvider>
          {genderLabelAlert ? (
            <Text style={MyProfileStyle.alertText}>
              Please enter your gender.
            </Text>
          ) : null}
          <Text style={MyProfileStyle.textStyle}>Email</Text>
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
            <Text style={MyProfileStyle.alertText}>{emailLabelText}</Text>
          ) : null}
          <Text style={MyProfileStyle.textStyle}>Mobile Number</Text>
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
            <Text style={MyProfileStyle.alertText}>
              Please enter your mobile number.
            </Text>
          ) : null}
          <TouchableOpacity
            style={MyProfileStyle.buttonView}
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
