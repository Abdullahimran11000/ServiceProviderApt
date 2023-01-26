import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DoctorInfoStyle} from '../assets/styles/DashboardStyle/DoctorInfoStyle';
import {StyleSheet} from 'react-native';
import DoctorHeader from '../components/DoctorCardHeader/DoctorHeader';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import NeoButton from '../components/NeoMorphButton/NeoButton';

const DoctorInfo = props => {
  const navigation = useNavigation();
  const {item} = props.route.params;
  const mapStyle = [
    {
      featureType: 'administrative.country',
      elementType: 'geometry.fill',
      stylers: [
        {
          weight: 1,
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#cb95e6',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#c28cde',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#cda6e0',
        },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: item.color}}>
          <View style={DoctorInfoStyle.flexView}>
            <ImageBackground
              style={DoctorInfoStyle.imageStyle}
              source={item.source}
              resizeMode="cover">
              <DoctorHeader
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </ImageBackground>

            <View style={DoctorInfoStyle.dropDownView}>
              <View style={DoctorInfoStyle.infoView}>
                <Text style={DoctorInfoStyle.nameText}>{item.name}</Text>
                <Text style={DoctorInfoStyle.deptText}>
                  {item.dept} Speciallist
                </Text>
                <View style={DoctorInfoStyle.addressView}>
                  <Fontisto
                    name={'map-marker-alt'}
                    size={wp('5')}
                    color={item.color}
                  />
                  <Text
                    style={[DoctorInfoStyle.addressText, {color: item.color}]}>
                    750-B Satellite Town
                  </Text>
                </View>
              </View>

              <View style={DoctorInfoStyle.recordView}>
                <View style={DoctorInfoStyle.patientView}>
                  <Text style={DoctorInfoStyle.patientText1}>Patients</Text>
                  <Text
                    style={[DoctorInfoStyle.patientText2, {color: item.color}]}>
                    550+
                  </Text>
                </View>

                <View style={DoctorInfoStyle.patientView}>
                  <Text style={DoctorInfoStyle.patientText1}>Experience</Text>
                  <Text
                    style={[DoctorInfoStyle.patientText2, {color: item.color}]}>
                    {item.experience}+
                  </Text>
                </View>

                <View style={DoctorInfoStyle.patientView}>
                  <Text style={DoctorInfoStyle.patientText1}>Rate</Text>
                  <View style={DoctorInfoStyle.ratingView}>
                    <AntDesign name="star" size={wp('4')} color="#FFD700" />
                    <Text
                      style={[
                        DoctorInfoStyle.ratingNumericText,
                        {color: item.color},
                      ]}>
                      {item.star}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={DoctorInfoStyle.biographyView}>
                <Text style={DoctorInfoStyle.biographyHeaderText}>
                  Biography
                </Text>
                <Text style={DoctorInfoStyle.biographyParaText}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </Text>
              </View>

              <View style={DoctorInfoStyle.locationView}>
                <Text style={DoctorInfoStyle.locationText}>Location</Text>
              </View>

              <View style={DoctorInfoStyle.mapView}>
                <MapView
                  style={DoctorInfoStyle.map}
                  customMapStyle={mapStyle}
                  initialRegion={{
                    latitude: 32.163611,
                    longitude: 74.190833,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}></MapView>
              </View>

              <View style={DoctorInfoStyle.buttonView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Schedule');
                  }}>
                  <NeoButton
                    width={wp('90')}
                    height={hp('8')}
                    backgroundColor={item.color}
                    borderRadius={wp('15')}>
                    <Text style={DoctorInfoStyle.buttonText}>
                      Make an Appointment
                    </Text>
                  </NeoButton>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorInfo;