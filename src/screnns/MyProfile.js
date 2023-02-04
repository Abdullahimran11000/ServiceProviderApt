import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
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
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColors';
import {launchImageLibrary} from 'react-native-image-picker';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {useNavigation} from '@react-navigation/native';
import {MyProfileStyle} from '../assets/styles/DashboardStyle/MyProfileStyle';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const MyProfile = () => {
  const navigation = useNavigation();
  const gender = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'FeMale'},
  ];

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
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            My Profile
          </BackButton>

          <View style={MyProfileStyle.ProfileView}>
            <View style={MyProfileStyle.innerProfileView}>
              {selectedImageUrl === '' ? (
                <Feather
                  name="camera-off"
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
            <Text style={MyProfileStyle.TextStyle}>Gendre</Text>
          </View>
          <SelectList
            fontFamily="Poppins-Medium"
            boxStyles={MyProfileStyle.SelectPriceListBoxStyle}
            dropdownStyles={{borderColor: AppColor.whiteShade}}
            placeholder="gender"
            data={gender}
          />

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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default MyProfile;
