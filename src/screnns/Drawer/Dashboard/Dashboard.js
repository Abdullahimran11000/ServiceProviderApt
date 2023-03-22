import React, {useState, useContext} from 'react';
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
import {DashboardStyle} from '../../../assets/styles/DashboardStyle/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DoctorBar from '../../../components/Bar/DoctorBar';
import {AppColor} from '../../../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import RNFetchBlob from 'rn-fetch-blob';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PatientAppCard from '../../../components/Appointments/PatientAppCard';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../../../assets/context/AppContext';

const Dashboard = ({pressHandler}) => {
  const navigation = useNavigation();
  const [warningCardShow, setWarningCardShow] = useState(true);
  const {upcomingAppointmentsInfo, storeUpcomingAppointmentsInfo} =
    useContext(AppContext);
  const {compeletdAppointmentsInfo} = useContext(AppContext);

  const updateArray = id => {
    const filteredArray = upcomingAppointmentsInfo.filter(
      item => item.id !== id,
    );
    storeUpcomingAppointmentsInfo(filteredArray);
  };

  const renderItemUpcomingAppointments = ({item}) => (
    <PatientAppCard
      item={item}
      buttonShow={true}
      nextButtonShow={true}
      buttonColor={'#dafccf'}
      rescheduleBtn={() => {
        navigation.navigate('TotalAppSlots', {
          check: true,
          date: item.date,
          time: item.time,
        });
      }}
      onPressYes={() => {
        updateArray(item.id);
      }}
    />
  );

  const renderItemCompeletedAppointments = ({item}) => (
    <PatientAppCard item={item} nextButtonShow={true} buttonColor={'#e4bef7'} />
  );

  return (
    <SafeAreaView style={DashboardStyle.mainView}>
      <View style={DashboardStyle.headCont}>
        <TouchableOpacity onPress={pressHandler}>
          <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
        </TouchableOpacity>
        <Text style={DashboardStyle.textStyle}>Dashboard</Text>
      </View>
      <View style={{flex: 9.2}}>
        <ScrollView contentContainerStyle={DashboardStyle.scrollView}>
          <View style={DashboardStyle.doctorInfoCard}>
            <Image
              style={DashboardStyle.doctorProfileImage}
              source={require('../../../assets/images/selfieOne.jpg')}
              resizeMode="cover"
            />
            <View style={DashboardStyle.nameCont}>
              <Text
                style={DashboardStyle.doctorNameTextStyle}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                Muhammad Imran
              </Text>
              <Text style={DashboardStyle.doctorCertificatesTextStyle}>
                M.B.B.S, R.D.B.S
              </Text>
              <View style={DashboardStyle.professionCont}>
                <Text style={DashboardStyle.doctorSpecialistTextStyle}>
                  Dentist
                </Text>
                <View style={DashboardStyle.ratingCont}>
                  <TouchableOpacity>
                    <AntDesign name="star" size={wp('4')} color="#FFD700" />
                  </TouchableOpacity>
                  <Text style={DashboardStyle.doctorLowerFlexTextOne}>
                    {' '}
                    4.5
                  </Text>
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
                  style={DashboardStyle.certificateButton}>
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
            icon={true}
            onPress={() => {
              navigation.navigate('UpcomingApp');
            }}
          />

          {upcomingAppointmentsInfo.length > 0 ? (
            <FlatList
              data={upcomingAppointmentsInfo}
              renderItem={renderItemUpcomingAppointments}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Neomorph style={DashboardStyle.noDataCont}>
              <Text style={DashboardStyle.noDataText}>No Data Found!</Text>
            </Neomorph>
          )}

          <DoctorBar
            One={'Completed Appointment'}
            icon={true}
            onPress={() => {
              navigation.navigate('CompletedApp');
            }}
          />

          <FlatList
            data={compeletdAppointmentsInfo}
            renderItem={renderItemCompeletedAppointments}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
