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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import DoctorBar from '../components/Bar/DoctorBar';
import { AppColor } from '../assets/colors/AppColors';
import CategoriesFlatList from '../components/CategoriesFlatlist/CategoriesFlatList';
import DoctorsFlatList from '../components/DcotorsFlatlist/DoctorsFlatList';
import {Neomorph} from 'react-native-neomorph-shadows';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-virtualized-view';
import {DoctorDepartmentStyle} from '../assets/styles/DashboardStyle/DoctorDepartmentStyle';
import AppContext from '../assets/context/AppContext';
import BackButton from '../components/ScrennHeader/BackButton';
import RNFetchBlob from 'rn-fetch-blob';
import SearchBar from '../components/SearchBar/SerachBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import NeoButton from '../components/NeoMorphButton/NeoButton'
import CompleteAppointmentCard from '../components/Appointments/CompleteAppointmentCard';
import UpcomingAppointmentCard from '../components/Appointments/UpcomingAppointment';

const Dashboard = ({pressHandler}) => {
  const navigation = useNavigation();
  const [warningCardShow , setWarningCardShow] = useState(true)

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
      name: 'Johnson james',
      gender: 'Male',
      age: '32',
      date: '24 March 2022',
      time: '10:30',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Elizbeth',
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
        console.log("Hello")
      }}
    />
  );

  const renderItemCompeletedAppointments = ({item}) => (
    <CompleteAppointmentCard
      item={item}
      onPress={() => {
        console.log("Hello")
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
               <Ionicons name='menu' color={AppColor.black} size={wp("7")} />
              </TouchableOpacity>
              <TouchableOpacity style={DashboardStyle.textCont}><Text style={DashboardStyle.textStyle} >Dashboard</Text></TouchableOpacity>
              
            </View>
          </View>
          <View style={DashboardStyle.doctorInfoCard}>
            <View style={DashboardStyle.doctorInfoInnerCont}>
              <TouchableOpacity
                style={DashboardStyle.doctorProfileImageCont}>
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
                      <Text style={DashboardStyle.doctorLowerFlexTextOne}>4.5</Text>
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
          
          {warningCardShow ? <View style={DashboardStyle.warningCard}>
            <Neomorph style={DashboardStyle.neoCard} darkShadowColor={AppColor.black}>
              <LinearGradient style={DashboardStyle.dashCard} colors={[
                  'rgba(181, 27, 27, 0.3)',
                  'rgba(181, 27, 27, 0.4)',
                  'rgba(181, 27, 27,0.5)',
                ]}
                start={{x: 0.3, y: 0}}
                end={{x: 0.7, y: 1}}
                locations={[0.1, 0.3, 0.9]}>

                  <View style={DashboardStyle.warningParaCont}>
                    <Ionicons name="md-warning" color={AppColor.white} size={wp('12')}/>
                    <View style={DashboardStyle.warningTextCont}>
                     <Text style={DashboardStyle.warningParaText} numberOfLines={4} ellipsizeMode={'tail'}>We have found that you have not uploaded your certificates. Please upload and verify your documents!</Text>
                    </View>
                  </View>

                  <View style={DashboardStyle.certificatesButtonView}>
                    <Neomorph
                      lightShadowColor={AppColor.whiteShade}
                      darkShadowColor={AppColor.blackOpacity4}
                      style={DashboardStyle.neoCertificatesButton}>
                      <TouchableOpacity style={DashboardStyle.neoCertificatesButton}>
                        <Text style={DashboardStyle.certificatesButtonText}>
                          Go To Certificates
                        </Text>
                      </TouchableOpacity>
                    </Neomorph>
                  </View>
              </LinearGradient>
            </Neomorph>
          </View>
          : null}
          
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
            One={"Completed Appointment"}
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
          

          {/* <View style={DashboardStyle.appCard}>
            <Neomorph style={DashboardStyle.neoCard2} darkShadowColor={AppColor.black}>
                <View style={{display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', marginTop: wp('3')}}>
                  <View style={DashboardStyle.patientProfileImageCont}>
                    <Image
                      style={DashboardStyle.patientProfileImage}
                      source={require('../assets/images/selfieOne.jpg')}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{position: 'absolute', left: wp('18'), top: wp('1.5'), display: 'flex', flexDirection: 'column'}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('4.8'), color: AppColor.black}}>Hira Mani</Text>
                    <Text style={{fontFamily: 'Poppins-Medium', fontSize: wp('3'), color: AppColor.blackOpacity6, marginTop: wp("-1.5")}}>Female, 25 years old</Text>
                  </View>
                  <View style={{position: 'absolute', right: wp('3'), top: wp('1.5')}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('6'), height: wp('6'), borderRadius: wp('6')}} onPress={() => console.log()}>
                      <NeoButton inner={false} width={wp('6')} height={wp('6')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}><Icon name="angle-down" size={15}/></NeoButton> 
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', width: wp('80'), alignSelf: 'center', top: hp('11.5')}}>
                  <Icon size={wp('4')} name="calendar" color={AppColor.black}></Icon>
                  <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('5')}}>28 Jan 2023</Text>
                  <Icon size={wp('4')} name="clock-o" color={AppColor.black} style={{left: wp('36'), position: 'absolute'}}></Icon>
                  <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('41')}}>10:30</Text>
                  <Icon size={wp('4')} name="wechat" color={AppColor.black} style={{position: 'absolute', left: wp('63')}}></Icon>
                  <TouchableOpacity><Text style={{fontFamily: "Poppins-Medium", fontSize: wp('3'), position: 'absolute', left: wp('66')}}>Call</Text></TouchableOpacity>
                </View>

                <View style={{width: wp('90'), display: 'flex', flexDirection: 'row', marginTop: wp('27'), justifyContent: 'space-evenly'}}>
                  <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} onPress={() => console.log()}>
                    <NeoButton inner={false} width={wp('30')} height={hp('5')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}>
                      <LinearGradient style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} colors={[
                          'rgba(181, 27, 27, 0.4)',
                          'rgba(181, 27, 27, 0.5)',
                          'rgba(181, 27, 27,0.5)',
                        ]}
                        start={{x: 0.3, y: 0}}
                        end={{x: 0.7, y: 1}}
                        locations={[0.1, 0.3, 0.9]}>
                        <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black}}>Cancel</Text>
                      </LinearGradient>
                    </NeoButton> 
                  </TouchableOpacity>
                  <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: wp('30'), height: hp('5'), borderRadius: wp('6')}} onPress={() => console.log()}>
                    <NeoButton inner={false} width={wp('30')} height={hp('5')} borderRadius={wp('6')} backgroundColor={AppColor.whiteShade} lightShadowColor={AppColor.white}>
                      <Text style={{fontFamily: "Poppins-Medium", fontSize: wp('4'), color: AppColor.black}}>Reschedule</Text>
                    </NeoButton> 
                  </TouchableOpacity>
                </View>
            </Neomorph>
          </View> */}

         
        
          {/* <SearchBar />

          <Neomorph
            darkShadowColor={AppColor.black}
            style={DashboardStyle.neoCard}>
            <LinearGradient
              style={DashboardStyle.dashCard}
              colors={[
                'rgba(195, 140, 222, 0.4)',
                'rgba(195, 140, 222, 0.6)',
                'rgba(195, 140, 222,1)',
              ]}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              locations={[0.1, 0.3, 0.9]}>
              <View style={DashboardStyle.leftCont}>
                <View style={DashboardStyle.leftContInnerCont}>
                  <View style={DashboardStyle.leftContFirstHeading}>
                    <Text style={DashboardStyle.leftContFirstHeadingText}>
                      Healthy or expensive
                    </Text>
                  </View>
                  <View style={DashboardStyle.leftContSecondHeading}>
                    <Text style={DashboardStyle.leftContSecondHeadingText}>
                      Protect your family from virus before it's too late
                    </Text>
                  </View>
                  <View style={DashboardStyle.touchableView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Maps')}>
                      <Neomorph
                        lightShadowColor={AppColor.whiteShade}
                        darkShadowColor={AppColor.blackOpacity4}
                        style={DashboardStyle.neoDiscoverButton}>
                        <Text style={DashboardStyle.discoverButtonText}>
                          Discover
                        </Text>
                      </Neomorph>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Image
                    style={DashboardStyle.dashContImage}
                    source={require('../assets/images/doctorsInfo.png')}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </LinearGradient>
          </Neomorph>

          <DoctorBar
            One={'Categories'}
            Two={'See all'}
            onPress={() => {
              navigation.navigate('DoctorSpecialist');
            }}
          />

          <View style={DashboardStyle.categoriesView}>
            <CategoriesFlatList
              outerWidth={wp('20')}
              outerHeight={hp('17')}
              outerRadius={wp('7')}
              outerMargin={wp('5')}
              alignItems={'center'}
              justifyContent={'center'}
              innerWidth={wp('21')}
              innerHeight={wp('21')}
              innerRadius={wp('7')}
              boxWidth={wp('18')}
              boxHeight={wp('18')}
              boxRadius={wp('7')}
              textWidth={wp('24')}
              horizontal={true}
            />
          </View>

          <DoctorBar
            One={'Nearby Doctor'}
            Two={'See all'}
            onPress={() => {
              navigation.navigate('SearchDoctor');
            }}
          />

          <View style={DashboardStyle.doctorsView}>
            <DoctorsFlatList horizontal={true} marginRight={wp('5')} />
          </View> */}

          {/* <Modal isVisible={categoriesModalOpen}>
            <SafeAreaView style={DoctorDepartmentStyle.mainView}>
              <View>
                <BackButton
                  onPress={() => {
                    storeCategoriesModalOpen(false);
                  }}>
                  {'Categories'}
                </BackButton>
                <View style={DoctorDepartmentStyle.flatListView}>
                  <CategoriesFlatList
                    outerWidth={wp('20')}
                    outerHeight={hp('13')}
                    outerRadius={wp('7')}
                    outerMargin={wp('5.5')}
                    alignItems={'center'}
                    justifyContent={'center'}
                    innerWidth={wp('24')}
                    innerHeight={wp('24')}
                    innerRadius={wp('8')}
                    boxWidth={wp('21')}
                    boxHeight={wp('21')}
                    boxRadius={wp('7')}
                    textWidth={wp('24')}
                    marginBottom={wp('10')}
                    numColumns={3}
                  />
                </View>
              </View>
            </SafeAreaView>
          </Modal> */}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;
