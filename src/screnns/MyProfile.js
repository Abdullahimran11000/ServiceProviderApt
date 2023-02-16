import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CertificatesStyle} from '../assets/styles/CertificatesStyle';
import {AppColor} from '../assets/colors/AppColors';
import {launchImageLibrary} from 'react-native-image-picker';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {useNavigation} from '@react-navigation/native';
import {MyProfileStyle} from '../assets/styles/DashboardStyle/MyProfileStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  Menu,
} from 'react-native-popup-menu';

const MyProfile = () => {
  const navigation = useNavigation();
  const gender = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'FeMale'},
  ];

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
          <View style={CertificatesStyle.headCont}>
            <View style={CertificatesStyle.headContInnerCont}>
              <TouchableOpacity
                style={CertificatesStyle.headContMenuCont}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
                <Text style={CertificatesStyle.textStyle1}>
                  Go To Dashboard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={CertificatesStyle.textCont}>
                <Text style={CertificatesStyle.textStyle}>Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

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
              marginBottom={hp('3')}
              placeholder={'Enter your name'}
              keyboardType={'default'}
            />
          </View>
          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Date of Birth</Text>

            <NeoTextInput
              width={wp('90')}
              marginBottom={hp('1')}
              placeholder={'Enter your birth'}
              keyboardType={'numeric'}
            />
          </View>

          <View style={MyProfileStyle.GenderView}>
            <Text style={MyProfileStyle.TextStyle}>Gender</Text>
          </View>

          <MenuProvider>
            <Menu
              onSelect={(value) => {
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
                    height: hp('7'),
                    backgroundColor: AppColor.whiteShade,
                    shadowRadius: 4,
                    marginLeft: wp('5'),
                    borderRadius: wp('3'),
                    marginTop: wp('3'),
                    marginBottom: neumorphHeight ? wp('5') : hp('12'),
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
                  marginTop: hp('10'),
                }}>
                <MenuOption value={"Male"}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      marginLeft: wp('3'),
                      color: AppColor.black,
                    }}>
                    Male
                  </Text>
                </MenuOption>
                <MenuOption value={"Female"}>
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

          {/* <Neomorph
            style={[
              MyProfileStyle.selectListBox,
              {
                shadowRadius: 4,
                height: neumorphHeight? wp('15'): wp('47'),
                marginLeft: wp('5'),
                marginBottom: wp('5'),
              },
            ]}
            inner={false}>
            <SelectList
              onPress={()=>{console.log("Hello")}}
              fontFamily="Poppins-Medium"
              boxStyles={[MyProfileStyle.SelectPriceListBoxStyle]}
              dropdownStyles={{
                borderColor: AppColor.whiteShade,
                width: wp('90'),
                alignSelf: 'center',
                borderRadius: wp('4'),
                marginBottom: wp('5'),
              }}
              placeholder="Gender"
              data={gender}
            />
          </Neomorph> */}

          {/* <SelectList
            fontFamily="Poppins-Medium"
            boxStyles={MyProfileStyle.SelectPriceListBoxStyle}
            dropdownStyles={{borderColor: AppColor.black, width: wp('90'), alignSelf: 'center', borderRadius: wp('4'), marginBottom: wp('5')}}
            placeholder="Gender"
            data={gender}
          /> */}

          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Email</Text>

            <NeoTextInput
              marginBottom={wp('3')}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
            />
          </View>

          <View style={MyProfileStyle.inputFeildsView}>
            <Text style={MyProfileStyle.TextStyle}>Mobile Number</Text>
            <NeoTextInput
              width={wp('90')}
              marginBottom={wp('3')}
              styles={{marginBottom: wp('3')}}
              keyboardType={'number-pad'}
              placeholder={'Enter your number'}
            />
          </View>

          <View style={MyProfileStyle.buttonView}>
            <TouchableOpacity>
              <NeoButton
                width={wp('45')}
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
