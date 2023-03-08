import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {AppColor} from '../../../../assets/colors/AppColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Neomorph} from 'react-native-neomorph-shadows';
import Lottie from 'lottie-react-native';
import {ScrollView} from 'react-native-virtualized-view';
import NeoButton from '../../../../components/NeoMorphButton/NeoButton';
import {launchImageLibrary} from 'react-native-image-picker';
import {PatientProfileStyle} from '../../../../assets/styles/PatientProfileStyle';
import Header from '../../../../components/ScreenHeader/Header';
import moment from 'moment-timezone';
import CustomModal from '../../../../components/Modal/CustomModal';
import PatientProfileRender from '../../../../components/RenderFunction/PatientProfileRender';
import PatientAppCard from '../../../../components/Appointments/PatientAppCard';

const PatientProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTypeOpen, setModalTypeOpen] = useState(false);
  const {name, age, gender, date, time, appDes, color} = route.params;
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [uploadImageList, setUploadImageList] = useState([]);

  const imagePickerHandler = async () => {
    await launchImageLibrary({includeExtra: true}, arr => {
      if (arr.assets != undefined) {
        setUploadImageList(oldImageList => [
          {
            id: uploadImageList.length + 1,
            url: arr.assets[0].uri,
            date: JSON.stringify(arr.assets[0].timestamp).substring(1, 11),
          },
          ...oldImageList,
        ]);
        setSelectedImageUri(arr.assets[0].uri);
      } else {
        setModalTypeOpen(false);
      }
    });
  };

  const flatListUpdation = (id, url) => {
    let filtereImagedArray = [];
    if ((id != '') & (url != '')) {
      uploadImageList.map(item => {
        if (item.id === id) {
          filtereImagedArray = uploadImageList.filter(item => item.id !== id);
          setUploadImageList([...filtereImagedArray]);
          if (filtereImagedArray.length === 0) {
            setSelectedImageUri('');
            setModalTypeOpen(false);
          }
        }
      });
    }
  };

  const renderImageList = ({item}) => {
    return (
      <PatientProfileRender
        item={item}
        touchPress={() => {
          flatListUpdation(item.id, item.url);
        }}
      />
    );
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Patient Profile screen is focusing right now!');
    });
  }, []);

  return (
    <SafeAreaView style={PatientProfileStyle.parentView}>
      <CustomModal
        isVisible={modalOpen}
        onBackdropPress={() => {
          setModalOpen(false);
        }}
        source={
          modalTypeOpen
            ? require('../../../../assets/animations/success.json')
            : require('../../../../assets/animations/failed.json')
        }
        lottieStyle={{width: wp('35'), height: wp('35')}}
        text={
          modalTypeOpen
            ? 'File upload successfully.'
            : 'You did not upload any photo yet today! Please upload patient prescription.'
        }
        style={{marginTop: modalTypeOpen ? wp('20') : wp('10')}}
        modalButtonPress={() => {
          if (modalTypeOpen === true) {
            setModalOpen(false);
            navigation.goBack();
          } else {
            setModalOpen(false);
          }
        }}
        buttonBackgroundColor={modalTypeOpen ? AppColor.primary : '#FA7070'}
        buttonText={'Close'}
      />
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Detail'}
      </Header>
      <ScrollView>
        <SafeAreaView style={PatientProfileStyle.innerView}>
          <View style={PatientProfileStyle.patientParentCard}>
            <PatientAppCard
              item={''}
              p_name={name}
              p_age={age}
              p_gender={gender}
              p_date={date}
              p_time={time}
              p_appDest={appDes}
              buttonShow={false}
              nextButtonShow={false}
              buttonColor={color}
            />
          </View>

          {uploadImageList.length === 0 ? (
            <View style={PatientProfileStyle.imageViewCard}>
              <Neomorph style={PatientProfileStyle.imageNeumorphCard}>
                <View style={PatientProfileStyle.noImageView}>
                  <Feather
                    name="camera-off"
                    size={wp('30')}
                    color={AppColor.black}
                  />
                  <Text style={PatientProfileStyle.iconTextStyle}>
                    No History Found!
                  </Text>
                </View>
              </Neomorph>
            </View>
          ) : (
            <View style={PatientProfileStyle.flatListView}>
              <FlatList
                renderItem={renderImageList}
                data={uploadImageList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}

          {color === '#e4bef7' ? null : (
            <View>
              <Neomorph style={PatientProfileStyle.uploadParentView}>
                <Text style={PatientProfileStyle.uploadTextStyle}>
                  Upload Prescription
                </Text>
                <TouchableOpacity onPress={imagePickerHandler}>
                  <Neomorph style={PatientProfileStyle.lottieView}>
                    <Lottie
                      style={PatientProfileStyle.lottieStyle}
                      source={require('../../../../assets/animations/Upload.json')}
                      loop
                      autoPlay
                    />
                  </Neomorph>
                </TouchableOpacity>
              </Neomorph>
              <TouchableOpacity
                style={PatientProfileStyle.submitButtonView}
                onPress={() => {
                  if (uploadImageList.length > 0) {
                    uploadImageList.map(item => {
                      if (item.date === moment().toJSON().slice(0, 10)) {
                        setModalOpen(true);
                        setModalTypeOpen(true);
                      } else {
                        setModalOpen(true);
                        setModalTypeOpen(false);
                      }
                    });
                  } else {
                    setModalOpen(true);
                    setModalTypeOpen(false);
                  }
                }}>
                <NeoButton
                  width={wp('55')}
                  height={hp('6')}
                  backgroundColor={AppColor.primary}
                  borderRadius={wp('10')}>
                  <Text style={PatientProfileStyle.buttonText}>Completed</Text>
                </NeoButton>
              </TouchableOpacity>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientProfile;
