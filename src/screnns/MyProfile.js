import React, {useState} from 'react';
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
import {
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  Menu,
} from 'react-native-popup-menu';

const MyProfile = () => {
  const [neumorphHeight, setNeumorphHeight] = useState(true);
  const [optionShow, setOptionShow] = useState('Gender');
  const [uploadImageList, setUploadImageList] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

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
        <View>
          <Header buttonColor={AppColor.whiteShade}>{'Profile'}</Header>
          <View style={MyProfileStyle.ProfileView}>
            <View style={MyProfileStyle.innerProfileView}>
              {selectedImageUrl === '' ? (
                <FontAwesome
                  name={'user-o'}
                  size={wp('10')}
                  color={AppColor.black}
                />
              ) : (
                <ImageBackground
                  imageStyle={{borderRadius: wp('15')}}
                  style={MyProfileStyle.imageStyle}
                  source={{uri: uploadImageList[0].url}}
                  resizeMode="cover"></ImageBackground>
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
              width={wp('90')}
              marginBottom={wp('5')}
              placeholder={'Enter your name'}
              keyboardType={'default'}
            />
          </View>
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Date of Birth</Text>

            <NeoTextInput
              width={wp('90')}
              marginBottom={wp('5')}
              placeholder={'Enter your birth'}
              keyboardType={'numeric'}
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
                    style={{
                      fontFamily: 'Poppins-Light',
                      marginLeft: wp('3'),
                      color: AppColor.blackOpacity6,
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
              marginBottom={wp('5')}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
            />
          </View>

          <View style={[MyProfileStyle.inputFeildsView]}>
            <Text style={MyProfileStyle.TextStyle}>Mobile Number</Text>
            <NeoTextInput
              width={wp('90')}
              marginBottom={wp('8')}
              keyboardType={'number-pad'}
              placeholder={'Enter your number'}
            />
          </View>

          <View style={MyProfileStyle.buttonView}>
            <TouchableOpacity>
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
