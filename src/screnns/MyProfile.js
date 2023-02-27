import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColors';
import {launchImageLibrary} from 'react-native-image-picker';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {MyProfileStyle} from '../assets/styles/DashboardStyle/MyProfileStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Header from '../components/ScreenHeader/Header';
import {Neomorph} from 'react-native-neomorph-shadows';
import CustomModal from '../components/Modal/CustomModal';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  Menu,
} from 'react-native-popup-menu';

const MyProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(AppColor.blackOpacity3);
  const [date, setDate] = useState('');
  const [dateIsValid, setDateIsValid] = useState(AppColor.blackOpacity3);
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(AppColor.blackOpacity3);
  const [emailAlert , setEmailAlert] = useState(false)
  const [mobileNo, setMobileNo] = useState('');
  const [mobileNoIsValid, setMobileNoIsValid] = useState(
    AppColor.blackOpacity3,
  );
  const [optionShow, setOptionShow] = useState('Gender');
  const [genderIsValid, setGenderIsValid] = useState(AppColor.black);

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
    if (
      (name === '' && date === '' && email === '' && mobileNo === '',
      optionShow === 'Gender')
    ) {
      setNameIsValid(AppColor.red);
      setDateIsValid(AppColor.red);
      setEmailIsValid(AppColor.red);
      setMobileNoIsValid(AppColor.red);
      setGenderIsValid(AppColor.red);
    }
    if (
      (name !== '' && date !== '' && email !== '' && mobileNo !== '',
      optionShow !== 'Gender')
    ) {
      if(email.includes('@gmail.com') || email.includes('@outlook.com')){
        setNameIsValid(AppColor.blackOpacity3);
        setDateIsValid(AppColor.blackOpacity3);
        setEmailIsValid(AppColor.blackOpacity3);
        setMobileNoIsValid(AppColor.blackOpacity3);
        setGenderIsValid(AppColor.blackOpacity3);
        setName('');
        setDate('');
        setEmail('');
        setMobileNo('');
        setOptionShow('Gender');
        setModalOpen(true);
      }else{
        setEmailAlert(true)
        setEmailIsValid(AppColor.red)
        setEmail('')
      }
      
    }

    if (name === '') {
      setNameIsValid(AppColor.red);
    }
    if (date === '') {
      setDateIsValid(AppColor.red);
    }
    if (email === '') {
      setEmailIsValid(AppColor.red);
    }
    if (mobileNo === '') {
      setMobileNoIsValid(AppColor.red);
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
    <ScrollView>
      <SafeAreaView style={MyProfileStyle.mainView}>
        <CustomModal
          isVisible={modalOpen}
          onBackdropPress={() => {
            setModalOpen(false);
          }}
          source={require('../assets/animations/profile.json')}
          text={'Your profile is updated successfully.'}
          style={{marginTop: wp('10')}}
          modalButtonPress={() => {
            setModalOpen(false);
            navigation.goBack()
          }}
          buttonBackgroundColor={'#00B46E'}
          buttonText={'Close'}
        />
        <View>
          <Header
            buttonColor={AppColor.whiteShade}
            styles={{color: AppColor.black}}
            stylesText={{color: AppColor.black}}
            backgroundColor={AppColor.whiteShade}>
            {'My Profile'}
          </Header>
          <View style={MyProfileStyle.ProfileView}>
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
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Full Name</Text>

            <NeoTextInput
              autoFocus={true}
              value={name}
              reference={nameRef}
              width={wp('90')}
              marginBottom={wp('5')}
              placeholder={'Enter your name'}
              placeholderTextColor={nameIsValid}
              keyboardType={'default'}
              returnKeyType={'next'}
              onChangeText={text => {
                setName(text);
              }}
              onSubmitEditing={() => {
                dateRef.current.focus();
              }}
            />
          </View>
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Date of Birth</Text>

            <NeoTextInput
              value={date}
              reference={dateRef}
              width={wp('90')}
              marginBottom={wp('5')}
              placeholder={'Enter your birth'}
              placeholderTextColor={dateIsValid}
              keyboardType={'numeric'}
              returnKeyType={'next'}
              onChangeText={text => {
                setDate(text);
              }}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
          </View>
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Gender</Text>
          </View>
          <MenuProvider>
            <Menu
              onSelect={value => {
                setNeumorphHeight(true);
                setOptionShow(value);
              }}>
              <MenuTrigger
                onPress={() => {
                  setNeumorphHeight(false);
                }}>
                <Neomorph
                  style={{
                    width: wp('90'),
                    height: hp('8.5'),
                    backgroundColor: AppColor.whiteShade,
                    shadowRadius: 4,
                    marginLeft: wp('5'),
                    borderRadius: wp('3'),
                    marginTop: wp('2'),
                    marginBottom: neumorphHeight ? wp('5') : hp('14'),
                    justifyContent: 'center',
                  }}>
                  <Text
                    ref={genderRef}
                    style={{
                      fontFamily: 'Poppins-Light',
                      marginLeft: wp('3'),
                      color: genderIsValid,
                      fontSize: wp('4'),
                    }}>
                    {optionShow}
                  </Text>
                </Neomorph>
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{
                  backgroundColor: AppColor.whiteShade,
                  borderRadius: wp('4'),
                  marginLeft: wp('40'),
                  marginTop: hp('12'),
                }}>
                <MenuOption value={'Male'}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      marginLeft: wp('3'),
                      color: AppColor.black,
                    }}>
                    Male
                  </Text>
                </MenuOption>
                <MenuOption value={'Female'}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      marginLeft: wp('3'),
                      color: AppColor.black,
                    }}>
                    Female
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </MenuProvider>
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Email</Text>
            <NeoTextInput
              value={email}
              reference={emailRef}
              marginBottom={wp('5')}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
              placeholderTextColor={emailIsValid}
              returnKeyType={'next'}
              onChangeText={text => {
                setEmail(text);
              }}
              onSubmitEditing={() => {
                mobileRef.current.focus();
              }}
            />
          </View>
          {emailAlert ? (
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: wp('3.8'),
              color: AppColor.red,
              marginLeft: wp('5'),
              marginTop: wp('1.5'),
              marginBottom: wp('2')
            }}>
            Please enter valid email!
          </Text>
        ) : null}
          <View style={[MyProfileStyle.inputFeildsView]}>
            <Text style={MyProfileStyle.TextStyle}>Mobile Number</Text>
            <NeoTextInput
              value={mobileNo}
              reference={mobileRef}
              width={wp('90')}
              marginBottom={wp('8')}
              keyboardType={'number-pad'}
              returnKeyType={'go'}
              placeholder={'Enter your number'}
              placeholderTextColor={mobileNoIsValid}
              onChangeText={text => {
                setMobileNo(text);
              }}
              onEndEditing={submitHandler}
            />
          </View>
          <View style={MyProfileStyle.buttonView}>
            <TouchableOpacity onPress={submitHandler}>
              <NeoButton
                width={wp('85')}
                height={hp('8')}
                backgroundColor={AppColor.primary}
                borderRadius={wp('7')}>
                <Text style={MyProfileStyle.buttonText}>Save</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default MyProfile;
