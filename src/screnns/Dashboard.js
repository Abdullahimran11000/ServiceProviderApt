import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
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
const Dashboard = ({pressHandler}) => {
  const navigation = useNavigation();
  const {storeAllCategoriesFromContext} = useContext(AppContext);
  const {storeYearsOfExperienceFromContext} = useContext(AppContext);
  const {storeConsultationPriceFromContext} = useContext(AppContext);

  const loadAllCategories = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos', {
      'Content-type': 'application/json',
    })
      .then(resp => resp.json())
      .then(response => {
        let responsee = [
          {
            id: 1,
            deptName: 'Radiology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.1)',
          },
          {
            id: 2,
            deptName: 'radiology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.2)',
          },
          {
            id: 3,
            deptName: 'Cardiology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.3)',
          },
          {
            id: 4,
            deptName: 'Dentist',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.4)',
          },
          {
            id: 5,
            deptName: 'Psychology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.5)',
          },
          {
            id: 6,
            deptName: 'Neradiology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.6)',
          },
          {
            id: 7,
            deptName: 'Gynacology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.7)',
          },
          {
            id: 8,
            deptName: 'Radiology',
            source: require('../assets/images/radiology.png'),
            color: 'rgba(195, 140, 222, 0.8)',
          },
        ];

        storeAllCategoriesFromContext(responsee);
      });
  };

  const loadDoctorsByFilters = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos', {
      'Content-type': 'application/json',
    })
      .then(resp => resp.json())
      .then(response => {
        storeAllCategoriesFromContext(response.allCategories);
      });
  };

  const loadSingleCategoryDoctors = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos', {
      'Content-type': 'application/json',
    })
      .then(resp => resp.json())
      .then(response => {
        storeAllCategoriesFromContext(response.allCategories);
      });
  };

  const loadYearsOfExperience = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos', {
      'Content-type': 'application/json',
    })
      .then(resp => resp.json())
      .then(response => {
        let data = [
          {key: '1', value: '5-10 years'},
          {key: '2', value: '10-15 years'},
          {key: '3', value: '15-20 years'},
          {key: '4', value: '20-25 years'},
        ];
        storeYearsOfExperienceFromContext(data);
      });
  };

  const loadConsultationPrice = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos', {
      'Content-type': 'application/json',
    })
      .then(resp => resp.json())
      .then(response => {
        let price = [
          {key: '1', value: '5-100 Dollars'},
          {key: '2', value: '100-1160 Dollars'},
          {key: '3', value: '160-210 years'},
          {key: '4', value: '210-260 years'},
        ];
        storeConsultationPriceFromContext(price);
      });
  };

  useEffect(() => {
    loadAllCategories();
    loadYearsOfExperience();
    loadConsultationPrice();
  }, []);

  return (
    <ScrollView style={DashboardStyle.scrollViewStyle}>
      <SafeAreaView>
        <ScrollView>
          <View style={DashboardStyle.headCont}>
            <View style={DashboardStyle.headContInnerCont}>
            <TouchableOpacity
                style={DashboardStyle.headContMenuCont}
                onPress={pressHandler}>
               <Ionicons name='menu' color={AppColor.black} size={wp("7")} />
              </TouchableOpacity>
              <TouchableOpacity
                style={DashboardStyle.headContImageCont}>
                <Image
                  style={DashboardStyle.headContImageStyle}
                  source={require('../assets/images/selfieOne.jpg')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View style={DashboardStyle.headContMiddleCont}>
                <View style={DashboardStyle.middleInnerFirstCont}>
                  <Text style={DashboardStyle.middleInnerContFirstHeading}>
                    Hello Dara
                  </Text>
                </View>
                <View style={DashboardStyle.middleInnerSecondCont}>
                  <Text style={DashboardStyle.middleInnerContSecondHeading}>
                    How can you today?
                  </Text>
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

          <SearchBar />

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
          </View>

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
