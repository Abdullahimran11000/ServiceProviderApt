import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CertificatesStyle} from '../assets/styles/CertificatesStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import {AppColor} from '../assets/colors/AppColors';
import {useRoute} from '@react-navigation/native';
import {Neomorph} from 'react-native-neomorph-shadows';
import Lottie from 'lottie-react-native';
import {AppointmentStyle} from '../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import {ScrollView} from 'react-native-virtualized-view';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import {Dimensions} from 'react-native';
const PatientProfile = () => {
  const route = useRoute();
  const {name, age, gender, date, time, appDes} = route.params;
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [uploadImageList, setUploadImageList] = useState([]);

  const imagePickerHandler = async () => {
    await launchImageLibrary({includeExtra: true}, arr => {
      if (arr.assets != undefined) {
        setUploadImageList(oldImageList => [
          ...oldImageList,
          {
            id: Math.random(),
            url: arr.assets[0].uri,
            date: JSON.stringify(arr.assets[0].timestamp).substring(1, 11),
          },
        ]);
        setSelectedImageUri(arr.assets[0].uri);
      }
    });
  };

  const flatListUpdation = (id, url) => {
    let filtereImagedArray = [];
    if ((id != '') & (url != '')) {
      uploadImageList.map((item, index) => {
        if (item.id === id) {
          filtereImagedArray = uploadImageList.filter(item => item.id !== id);
          setUploadImageList([...filtereImagedArray]);
          if (filtereImagedArray.length === 0) {
            setSelectedImageUri('');
          }
        }
      });
    }
  };

  const renderImageList = ({item}) => {
    return (
      <Neomorph style={CertificatesStyle.neumorphListView}>
        <ImageBackground
          imageStyle={{borderRadius: wp('5')}}
          source={{uri: item.url}}
          style={CertificatesStyle.listImageView}
          resizeMode={'contain'}>
          <View style={CertificatesStyle.crossSign}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp('3.7'),
                color: AppColor.white,
                marginLeft: wp('0.5'),
              }}>
              {item.date}
            </Text>
            <TouchableOpacity
              onPress={() => {
                flatListUpdation(item.id, item.url);
              }}>
              <Neomorph
                style={{
                  width: wp('8'),
                  height: wp('8'),
                  borderRadius: wp('8'),
                  backgroundColor: AppColor.red,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowRadius: 0,
                  marginRight: wp('-1'),
                }}>
                <Foundation
                  name="x"
                  size={wp('4.5')}
                  color={AppColor.whiteShade}
                />
              </Neomorph>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Neomorph>
    );
  };

  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <View>
        <View style={CertificatesStyle.headCont}>
          <View style={CertificatesStyle.headContInnerCont}>
            <TouchableOpacity style={CertificatesStyle.headContMenuCont}>
              <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
              <Text style={CertificatesStyle.textStyle1}>Go To Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CertificatesStyle.textCont}>
              <Text style={CertificatesStyle.textStyle}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <SafeAreaView
          style={{
            display: 'flex',
            backgroundColor: AppColor.whiteShade,
          }}>
          <Neomorph
            style={[
              AppointmentStyle.neoCard2Upcoming,
              {marginLeft: wp('5'), height: hp('20'), marginTop: wp('7')},
            ]}
            darkShadowColor={AppColor.black}>
            <View style={AppointmentStyle.patientCard}>
              <View style={AppointmentStyle.patientProfileImageCont}>
                <Image
                  style={AppointmentStyle.patientProfileImage}
                  source={require('../assets/images/selfieOne.jpg')}
                  resizeMode="cover"
                />
              </View>
              <View style={AppointmentStyle.patientInfoView}>
                <Text style={AppointmentStyle.patientNameText}>{name}</Text>
                <Text style={AppointmentStyle.patientGenderText}>
                  {gender}, {age} years old
                </Text>
              </View>
              <View style={AppointmentStyle.lottieViewUpcoming}>
                <Lottie
                  style={AppointmentStyle.lottieStyleUpcoming}
                  source={require('../assets/animations/upcomingTag.json')}
                  autoPlay
                />
              </View>
            </View>
            <View style={AppointmentStyle.detailView}>
              <Icon
                size={wp('4')}
                name="calendar"
                color={AppColor.black}></Icon>
              <Text style={AppointmentStyle.dateStyle}>{date}</Text>
              <Icon
                size={wp('4')}
                name="clock-o"
                style={AppointmentStyle.timeIconStyle}></Icon>
              <Text style={AppointmentStyle.timeStyle}>{time}</Text>
              <Icon
                size={wp('4')}
                name="wechat"
                style={AppointmentStyle.callIconStyle}></Icon>
              <TouchableOpacity>
                <Text style={AppointmentStyle.destinationStyle}>{appDes}</Text>
              </TouchableOpacity>
            </View>
          </Neomorph>         
          {selectedImageUri === '' ? (
            <View
              style={[CertificatesStyle.imageViewCard, {marginTop: wp('8')}]}>
              <Neomorph
                style={[
                  CertificatesStyle.imageNeumorphCard,
                  {height: hp('50')},
                ]}>
                <View style={CertificatesStyle.noImageView}>
                  <Feather
                    name="camera-off"
                    size={wp('30')}
                    color={AppColor.black}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-Bold',
                      fontSize: wp('4'),
                      color: AppColor.blackOpacity7,
                      marginTop: wp('2'),
                    }}>
                    No History Found!
                  </Text>
                </View>
              </Neomorph>
            </View>
          ) : (
            <View
              style={{
                height: hp('52'),
                width: wp('100'),
                overflow: 'hidden',
                marginTop: wp('10'),
                marginBottom: wp('6'),
                backgroundColor: AppColor.whiteShade,
              }}>
                  <FlatList
                    renderItem={renderImageList}
                    data={uploadImageList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />   
            </View>
          )}

          <Neomorph
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: wp('90'),
              height: hp('17'),
              marginBottom: wp('10'),
              marginLeft: wp('5'),
              shadowRadius: 4,
              backgroundColor: AppColor.whiteShade,
              borderRadius: wp(5),
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: AppColor.black,
                fontSize: wp('4'),
              }}>
              Upload Prescription
            </Text>
            <TouchableOpacity onPress={imagePickerHandler}>
              <Neomorph
                style={{
                  width: wp('30'),
                  height: hp('12'),
                  backgroundColor: AppColor.whiteShade,
                  borderRadius: wp('5'),
                  shadowRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Lottie
                  style={{width: wp('15'), height: wp('20')}}
                  source={require('../assets/animations/Upload.json')}
                  loop
                  autoPlay
                />
              </Neomorph>
            </TouchableOpacity>
          </Neomorph>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientProfile;
