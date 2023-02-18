import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../assets/styles/DashboardStyle/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorBar from '../components/Bar/DoctorBar';
import {AppColor} from '../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import {ScrollView} from 'react-native-virtualized-view';
import RNFetchBlob from 'rn-fetch-blob';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CompleteAppointmentCard from '../components/Appointments/CompleteAppointmentCard';
import UpcomingAppointmentCard from '../components/Appointments/UpcomingAppointment';

const Dashboard = ({pressHandler}) => {
  const navigation = useNavigation();
  const [warningCardShow, setWarningCardShow] = useState(true);
  const [todayAppointmentInfo, setTodayAppointmentInfo] = useState([
    {
      id: 1,
      name: 'Amanda Johnson',
      gender: 'Female',
      age: '23',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '24 March 2022',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Miranda Jones',
      gender: 'Female',
      age: '21',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Video',
    },
  ]);

  const renderItemUpcomingAppointments = ({item}) => (
    <UpcomingAppointmentCard
      item={item}
      onPress={() => {
        console.log('Hello');
      }}
    />
  );

  const renderItemCompeletedAppointments = ({item}) => (
    <CompleteAppointmentCard
      item={item}
      onPress={() => {
        console.log('Hello');
      }}
    />
  );

  return (
    <ScrollView>
      <SafeAreaView style={DashboardStyle.scrollViewStyle}>
        <ScrollView>
          <View style={DashboardStyle.headCont}>
            <View style={DashboardStyle.headContInnerCont}>
              <TouchableOpacity
                style={DashboardStyle.headContMenuCont}
                onPress={pressHandler}>
                <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
              </TouchableOpacity>
              <TouchableOpacity style={DashboardStyle.textCont}>
                <Text style={DashboardStyle.textStyle}>Dashboard</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={DashboardStyle.doctorInfoCard}>
            <View style={DashboardStyle.doctorInfoInnerCont}>
              <TouchableOpacity style={DashboardStyle.doctorProfileImageCont}>
                <Image
                  style={DashboardStyle.doctorProfileImage}
                  source={require('../assets/images/selfieOne.jpg')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View style={DashboardStyle.doctorNameContView}>
                <View style={DashboardStyle.doctorNameCont}>
                  <Text style={DashboardStyle.doctorNameTextStyle}>
                    Muhammad Imran
                  </Text>
                </View>
                <View style={DashboardStyle.doctorCertificatesView}>
                  <Text style={DashboardStyle.doctorCertificatesTextStyle}>
                    M.B.B.S, R.D.B.S
                  </Text>
                </View>
                <View style={DashboardStyle.doctorSpecialistView}>
                  <Text style={DashboardStyle.doctorSpecialistTextStyle}>
                    Dentist
                  </Text>
                  <View style={DashboardStyle.ratingView}>
                    <View style={DashboardStyle.doctorLowerFlexViewInnerView}>
                      <TouchableOpacity>
                        <AntDesign name="star" size={wp('4')} color="#FFD700" />
                      </TouchableOpacity>
                      <Text style={DashboardStyle.doctorLowerFlexTextOne}>
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={DashboardStyle.headContLastCont}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Notifications');
                  }}>
                  <Neomorph
                    lightShadowColor={AppColor.white}
                    style={DashboardStyle.notificationButton}>
                    <Ionicons
                      name="notifications-outline"
                      color="black"
                      size={wp('6')}
                    />
                  </Neomorph>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {warningCardShow ? (
            <View style={DashboardStyle.warningCard}>
              <Neomorph
                style={DashboardStyle.neoCard}
                darkShadowColor={AppColor.black}>
                <LinearGradient
                  style={DashboardStyle.dashCard}
                  colors={[
                    'rgba(181, 27, 27, 0.3)',
                    'rgba(181, 27, 27, 0.4)',
                    'rgba(181, 27, 27,0.5)',
                  ]}
                  start={{x: 0.3, y: 0}}
                  end={{x: 0.7, y: 1}}
                  locations={[0.1, 0.3, 0.9]}>
                  <View style={DashboardStyle.warningParaCont}>
                    <Ionicons
                      name="md-warning"
                      color={AppColor.white}
                      size={wp('12')}
                    />
                    <View style={DashboardStyle.warningTextCont}>
                      <Text
                        style={DashboardStyle.warningParaText}
                        numberOfLines={4}
                        ellipsizeMode={'tail'}>
                        We have found that you have not uploaded your
                        certificates. Please upload and verify your documents!
                      </Text>
                    </View>
                  </View>

                  <View style={DashboardStyle.certificatesButtonView}>
                    <Neomorph
                      lightShadowColor={AppColor.whiteShade}
                      darkShadowColor={AppColor.blackOpacity4}
                      style={DashboardStyle.neoCertificatesButton}>
                      <TouchableOpacity
                        style={DashboardStyle.neoCertificatesButton} onPress={()=>{navigation.navigate("Certificates")}}>
                        <Text style={DashboardStyle.certificatesButtonText}>
                          Go To Certificates
                        </Text>
                      </TouchableOpacity>
                    </Neomorph>
                  </View>
                </LinearGradient>
              </Neomorph>
            </View>
          ) : null}

          <DoctorBar
            One={"Today's Appointment"}
            Two={'See all'}
            onPress={() => {
              navigation.navigate('MyAppointment');
            }}
          />

          <FlatList
            data={todayAppointmentInfo}
            renderItem={renderItemUpcomingAppointments}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <DoctorBar
            One={'Completed Appointment'}
            Two={'See all'}
            onPress={() => {
              navigation.navigate('Splash');
            }}
          />

          <FlatList
            data={todayAppointmentInfo}
            renderItem={renderItemCompeletedAppointments}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;
