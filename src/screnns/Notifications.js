import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ii from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import ad from 'react-native-vector-icons/AntDesign';
import fi from 'react-native-vector-icons/Feather';
import {NotificationStyle} from '../assets/styles/AnimatedDrawerStyle/NotificationStyle';
import {CertificatesStyle} from '../assets/styles/CertificatesStyle';
import {AppColor} from '../assets/colors/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import CustomModal from '../components/Modal/CustomModal';
const Notifications = () => {
  const [notify, setNotify] = useState(true);
  const [readNotificationInModal, setReadNotificationInModal] = useState('');
  const [showModal, setShowModal] = useState(false);
const Notifications = props => {
  const navigation = useNavigation();
  const TodayData = [
    {
      id: 1,
      title: 'You have an appointment with Dr.Manskurt Slauddin at 10pm today',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
      iconprovider: ad,
      iconname: 'solution1',
      iconColor: '#a18eab',
    },
    {
      id: 2,
      title: 'You have an private message from Dr.Adam Jordan',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'ios-chatbox-ellipses-sharp',
      iconColor: '#708eb3',
    },
    {
      id: 3,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
      iconColor: '#a582b8',
    },
    {
      id: 4,
      title: 'you have not uploaded your certificates yet so go & upload them',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'documents-sharp',
      iconColor: '#997679',
    },
    {
      id: 5,
      title: 'you have completed the audio call with Dr.Asnan Dhillon',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'call',
      iconColor: '#3c754b',
      // iconname: 'ios-chatbox-ellipses-sharp',
    },
    {
      id: 6,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: fi,
      iconname: 'menu',
      iconColor: '#a18eab',
    },
    {
      id: 7,
      title: 'you have 20 pending Appointments, go & see them',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
      iconColor: '#a582b8',
    },
    {
      id: 8,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
          setReadNotificationInModal(item.title)
        }}>
        <Neomorph style={NotificationStyle.innerItems}>
          <View style={NotificationStyle.headContImageCont}>
            <item.iconprovider
              style={NotificationStyle.iconstyle}
              name={item.iconname}
              size={wp('6')}
              color={item.iconColor}
            />
          </View>
      <Neomorph style={NotificationStyle.innerItems}>
        <TouchableOpacity
          style={NotificationStyle.headContImageCont}
          onPress={props.onPress}>
          <item.iconprovider
            style={NotificationStyle.iconstyle}
            name={item.iconname}
            size={wp('6')}
          />
          <View style={NotificationStyle.headContMiddleCont}>
            <View style={NotificationStyle.middleInnerFirstCont}>
              <Text style={NotificationStyle.middleInnerContFirstHeading}>
                {item.title}
              </Text>
            </View>
            <View style={NotificationStyle.middleInnerSecondCont}>
              <Text style={NotificationStyle.middleInnerContSecondHeading}>
                {item.time}
              </Text>
            </View>
            {notify ? (
              <View style={NotificationStyle.iconstyle2}>
                <Icon
                  name="checkmark-done-circle-outline"
                  size={wp('5')}
                  color={'blue'}
                />
              </View>
            ) : null}
          </View>
        </Neomorph>
      </TouchableOpacity>
            </View>
            <View style={NotificationStyle.middleInnerSecondCont}>
              <Text style={NotificationStyle.middleInnerContSecondHeading}>
                {item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Neomorph>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.whiteShade}}>
      <Header buttonColor={AppColor.whiteShade}>{'Notification'}</Header>
      <ScrollView>
    <SafeAreaView>
      <View style={NotificationStyle.mainView}>
        <Header
          buttonColor={AppColor.whiteShade}
          styles={{color: AppColor.black}}
          stylesText={{color: AppColor.black}}
          backgroundColor={AppColor.whiteShade}>
          {'Notification'}
        </Header>
        {/* 1st render  */}
        <View style={NotificationStyle.firstContainerOfMainView}>
          <View style={NotificationStyle.innerViewOfFirstContainer}>
            <TouchableOpacity
              onPress={() => {
                setNotify(false);
              }}>
              <Text style={NotificationStyle.renderItemHeaderFontFirst}>
                Mark All As Read
              </Text>
            </TouchableOpacity>
          </View>
            <Text style={NotificationStyle.renderItemHeaderFontFirst}>
              {' '}
              Today{' '}
            </Text>
            <TouchableOpacity
              style={NotificationStyle.renderItemHeaderFontSecond}
              onPress={() => setShow(!show)}></TouchableOpacity>
          </View>
          <FlatList
            data={TodayData}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        </View>
        <CustomModal
          isVisible={showModal}
          onBackdropPress={() => {
            setShowModal(false);
          }}
          modalButtonPress={() => {
            setShowModal(false);
          }}
          buttonBackgroundColor={AppColor.primary}
          source={require('../assets/animations/success.json')}
          text={readNotificationInModal}
          style={{marginTop:wp(10)}}
        />
      </ScrollView>

        {/* 2nd render  */}

        <View style={NotificationStyle.secondContainerOfMainView}>
          <View style={NotificationStyle.innerViewOfSecondContainer}>
            <Text style={NotificationStyle.renderItemHeaderFontFirst}>
              {' '}
              Yesterday{' '}
            </Text>
            <TouchableOpacity
              style={
                NotificationStyle.renderItemHeaderFontSecond
              }></TouchableOpacity>
          </View>
          <FlatList
            data={TodayData}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Notifications;

