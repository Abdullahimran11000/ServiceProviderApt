import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../../assets/colors/AppColors';
import NeoButton from '../../../components/NeoMorphButton/NeoButton';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/core';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import {CertificatesStyle} from '../../../assets/styles/CertificatesStyle';
import Header from '../../../components/ScreenHeader/Header';

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
          {id: uploadImageList.length + 1, url: arr.assets[0].uri},
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
      <View style={CertificatesStyle.headerCont}>
        <Header
          buttonColor={AppColor.whiteShade}
          styles={{color: AppColor.black}}
          stylesText={{color: AppColor.black}}
          backgroundColor={AppColor.whiteShade}>
          {'Certificate'}
        </Header>
      </View>
      <View style={CertificatesStyle.bodyCont}>
        <ScrollView contentContainerStyle={CertificatesStyle.scrollView}>
          <Neomorph style={CertificatesStyle.imageNeumorphCard}>
            {selectedImageUri === '' ? (
              <Feather
                name="camera-off"
                size={wp('50')}
                color={AppColor.black}
              />
            ) : (
              <ImageViewer
                imageUrls={uploadImageListForZoom}
                style={CertificatesStyle.imageView}
                backgroundColor={AppColor.whiteShade}
              />
            )}
          </Neomorph>

          <View style={CertificatesStyle.flatListView}>
            <FlatList
              renderItem={renderImageList}
              data={uploadImageList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <TouchableOpacity
            style={CertificatesStyle.buttonView}
            onPress={imagePickerHandler}>
            <NeoButton
              width={wp('55')}
              height={hp('6')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('10')}>
              <Text style={CertificatesStyle.buttonText}>UPLOAD</Text>
            </NeoButton>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Certificates;
