import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image, ImageBackground, FlatList} from 'react-native';
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
import ImageViewer from 'react-native-image-zoom-viewer';

const PatientProfile = () => {
  const route = useRoute();
  const {name, age, gender, date, time, appDes} = route.params;
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [uploadImageList, setUploadImageList] = useState([]);
  const [uploadImageListForZoom, setUploadImageListForZoom] = useState([]);

  const imagePickerHandler = async () => {
    await launchImageLibrary({}, arr => {
      if (arr.assets != undefined) {
        setUploadImageList(oldImageList => [
          ...oldImageList,
          {id: Math.random(), url: arr.assets[0].uri},
        ]);
        setSelectedImageUri(
          setUploadImageListForZoom([{url: arr.assets[0].uri}]),
        );
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
        }
      });

      uploadImageListForZoom.map(item => {
        if (item.url === url) {
          if (uploadImageList.length === 1) {
            setUploadImageListForZoom([]);
            setSelectedImageUri('');
          } else {
            setUploadImageListForZoom([{url: filtereImagedArray[0].url}]);
          }
        }
      });
    }
  };

  const renderImageList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedImageUri(setUploadImageListForZoom([{url: item.url}]));
        }}>
        <Neomorph style={CertificatesStyle.neumorphListView}>
          <ImageBackground
            imageStyle={{borderRadius: wp('5')}}
            source={{uri: item.url}}
            style={CertificatesStyle.listImageView}>
            <TouchableOpacity
              style={CertificatesStyle.crossSign}
              onPress={() => {
                flatListUpdation(item.id, item.url);
              }}>
              <Foundation name="x" size={wp('4')} color={AppColor.whiteShade} />
            </TouchableOpacity>
          </ImageBackground>
        </Neomorph>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: AppColor.whiteShade,
        }}>
        <View>
          <View style={CertificatesStyle.headCont}>
            <View style={CertificatesStyle.headContInnerCont}>
              <TouchableOpacity style={CertificatesStyle.headContMenuCont}>
                <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
                <Text style={CertificatesStyle.textStyle1}>
                  Go To Dashboard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={CertificatesStyle.textCont}>
                <Text style={CertificatesStyle.textStyle}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

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
                autoPlay></Lottie>
            </View>
          </View>

          <View style={AppointmentStyle.detailView}>
            <Icon size={wp('4')} name="calendar" color={AppColor.black}></Icon>
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

        <View style={[CertificatesStyle.imageViewCard, {marginTop: wp('8')}]}>
          <Neomorph
            style={[CertificatesStyle.imageNeumorphCard, {height: hp('50')}]}>
            {selectedImageUri === '' ? (
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
            ) : (
              <View style={CertificatesStyle.noImageView}>
                <ImageViewer
                  imageUrls={uploadImageListForZoom}
                  style={{width: wp('90'), height: hp('60')}}
                  backgroundColor={AppColor.whiteShade}
                />
              </View>
            )}
          </Neomorph>
        </View>

        <FlatList
        style={{width: wp('60')}}
          renderItem={renderImageList}
          data={uploadImageList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={CertificatesStyle.buttonView}>
          <TouchableOpacity onPress={imagePickerHandler}>
            <NeoButton
              width={wp('60')}
              height={hp('8')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('7')}>
              <Text style={CertificatesStyle.buttonText}>UPLOAD</Text>
            </NeoButton>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PatientProfile;
