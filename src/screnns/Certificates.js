import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../assets/styles/DashboardStyle/DashboardStyle';
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColors';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/core';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import {CertificatesStyle} from '../assets/styles/CertificatesStyle';

const Certificates = () => {
  const navigation = useNavigation();
  const [uploadImageList, setUploadImageList] = useState([]);
  const [uploadImageListForZoom, setUploadImageListForZoom] = useState([]);
  const [selectedImageUri, setSelectedImageUri] = useState('');

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
    <SafeAreaView style={CertificatesStyle.mainView}>
      <ScrollView>
        <View style={CertificatesStyle.headCont}>
          <View style={CertificatesStyle.headContInnerCont}>
            <TouchableOpacity
              style={CertificatesStyle.headContMenuCont}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
              <Text style={CertificatesStyle.textStyle1}>Go To Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={CertificatesStyle.textCont}>
              <Text style={CertificatesStyle.textStyle}>Certificates</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={CertificatesStyle.imageViewCard}>
          <Neomorph style={CertificatesStyle.imageNeumorphCard}>
            {selectedImageUri === '' ? (
              <View style={CertificatesStyle.noImageView}>
                <Feather
                  name="camera-off"
                  size={wp('50')}
                  color={AppColor.black}
                />
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
            {/* <View
              style={{
                display: 'flex',
                flex: 1.5,
                flexDirection: 'row',
                width: wp('70'),
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log(uploadImageList);
                }}>
                <NeoButton
                  width={wp('25')}
                  height={hp('6')}
                  borderRadius={wp('6')}
                  backgroundColor={AppColor.whiteShade}>
                  <Text
                    style={{fontFamily: 'Poppins-Bold', fontSize: wp('3.5')}}>
                    Remove
                  </Text>
                </NeoButton>
              </TouchableOpacity>
              <NeoButton
                width={wp('25')}
                height={hp('6')}
                borderRadius={wp('6')}
                backgroundColor={AppColor.whiteShade}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('3.5')}}>
                  Approved
                </Text>
              </NeoButton>
            </View> */}
          </Neomorph>
        </View>

        <FlatList
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Certificates;
