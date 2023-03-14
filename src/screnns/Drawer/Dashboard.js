import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorBar from '../../components/Bar/DoctorBar';
import {AppColor} from '../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import RNFetchBlob from 'rn-fetch-blob';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PatientAppCard from '../../components/Appointments/PatientAppCard';
import {useNavigation} from '@react-navigation/native';

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
      appDestination: 'Call',
    },
  ]);

  const renderItemUpcomingAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      buttonShow={true}
      nextButtonShow={true}
      buttonColor={'#dafccf'}
      nav={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        }
        if (item.appDestination === 'Call') {
          navigation.navigate('VideoCalling');
        }
      }}
      rescheduleBtn={() => {
        navigation.navigate('TotalAppSlots', {check: true});
      }}
    />
  );

  const renderItemCompeletedAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      nextButtonShow={true}
      buttonColor={'#e4bef7'}
      nav={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        }
        if (item.appDestination === 'Call') {
          navigation.navigate('VideoCalling');
        }
      }}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColor.whiteShade,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={DashboardStyle.headCont}>
        <TouchableOpacity onPress={pressHandler}>
          <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
        </TouchableOpacity>
        <Text style={DashboardStyle.textStyle}>Dashboard</Text>
      </View>

      <ScrollView style={{width: wp('100')}}>
        <View style={DashboardStyle.doctorInfoCard}>
          <Image
            style={DashboardStyle.doctorProfileImage}
            source={require('../../assets/images/selfieOne.jpg')}
            resizeMode="cover"
          />
          <View>
            <Text style={DashboardStyle.doctorNameTextStyle}>
              Muhammad Imran
            </Text>
            <Text style={DashboardStyle.doctorCertificatesTextStyle}>
              M.B.B.S, R.D.B.S
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={DashboardStyle.doctorSpecialistTextStyle}>
                Dentist
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <AntDesign name="star" size={wp('4')} color="#FFD700" />
                </TouchableOpacity>
                <Text style={DashboardStyle.doctorLowerFlexTextOne}> 4.5</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <Neomorph
              lightShadowColor={AppColor.white}
              style={DashboardStyle.notificationButton}>
              <Ionicons
                name="notifications-outline"
                color={AppColor.black}
                size={wp('6')}
              />
            </Neomorph>
          </TouchableOpacity>
        </View>

        {warningCardShow ? (
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
                  size={wp('15')}
                />
                <Text
                  style={DashboardStyle.warningParaText}
                  numberOfLines={4}
                  ellipsizeMode={'tail'}>
                  We have found that you have not uploaded your certificates.
                  Please upload and verify your documents!
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Certificates');
                }}
                style={{alignItems: 'flex-end', paddingVertical: wp('1')}}>
                <Neomorph
                  lightShadowColor={AppColor.whiteShade}
                  darkShadowColor={AppColor.blackOpacity4}
                  style={DashboardStyle.neoCertificatesButton}>
                  <Text style={DashboardStyle.certificatesButtonText}>
                    Go To Certificates
                  </Text>
                </Neomorph>
              </TouchableOpacity>
            </LinearGradient>
          </Neomorph>
        ) : null}

        <DoctorBar
          One={"Today's Appointment"}
          Two={'See all'}
          onPress={() => {
            navigation.navigate('UpcomingApp');
          }}
        />

        <FlatList
          data={todayAppointmentInfo}
          renderItem={renderItemUpcomingAppointments}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        {/* <DoctorBar
          One={'Completed Appointment'}
          Two={'See all'}
          onPress={() => {
            navigation.navigate('CompletedApp');
          }}
        />

        <FlatList
          data={todayAppointmentInfo}
          renderItem={renderItemCompeletedAppointments}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
