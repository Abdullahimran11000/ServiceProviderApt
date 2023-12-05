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
import {NotificationStyle} from '../../../assets/styles/AnimatedDrawerStyle/NotificationStyle';
import {AppColor} from '../../../assets/colors/AppColors';
import Entypo from 'react-native-vector-icons/Entypo';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/ScreenHeader/Header';
import {ScrollView} from 'react-native-virtualized-view';
import CustomModal from '../../../components/Modal/CustomModal';
import NotificationRender from '../../../components/RenderFunction/NotificationRender';
const Notifications = () => {
  const [readNotificationInModal, setReadNotificationInModal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const [TodayData, setTodayData] = useState([
    {
      id: 1,
      title: 'You have an appointment with Dr.Manskurt Slauddin at 10pm today',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
      iconprovider: ad,
      iconname: 'solution1',
      iconColor: '#a18eab',
      open: false,
    },
    {
      id: 2,
      title: 'You have an private message from Dr.Adam Jordan',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'ios-chatbox-ellipses-sharp',
      iconColor: '#708eb3',
      open: false,
    },
    {
      id: 3,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
      iconColor: '#a582b8',
      open: false,
    },
    {
      id: 4,
      title: 'you have not uploaded your certificates yet so go & upload them',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'documents-sharp',
      iconColor: '#997679',
      open: false,
    },
    {
      id: 5,
      title: 'you have completed the audio call with Dr.Asnan Dhillon',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'call',
      iconColor: '#3c754b',
      open: false,
    },
    {
      id: 6,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: fi,
      iconname: 'menu',
      iconColor: '#a18eab',
      open: false,
    },
    {
      id: 7,
      title: 'you have 20 pending Appointments, go & see them',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
      iconColor: '#a582b8',
      open: false,
    },
    {
      id: 8,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
      open: false,
    },
  ]);

  const submitHandler = (
    id,
    check,
    title,
    message,
    time,
    iconname,
    iconColor,
    iconprovider,
  ) => {
    if (check === false) {
      setShowModal(true);
      setReadNotificationInModal(title);
      const filteredArray = TodayData.filter(item => item.id !== id);
      setTodayData([
        ...filteredArray,
        {
          id: id,
          title: title,
          message: message,
          time: time,
          iconprovider: iconprovider,
          iconname: iconname,
          iconColor: iconColor,
          open: true,
        },
      ]);
    } else {
      setShowModal(true);
      setReadNotificationInModal(title);
    }
  };

  const renderItem = ({item}) => {
    return (
      <NotificationRender
        item={item}
        onPress={() => {
          submitHandler(
            item.id,
            item.open,
            item.title,
            item.message,
            item.time,
            item.iconname,
            item.iconColor,
            item.iconprovider,
          );
        }}/>
    );
  };

  const submitHandlerTwo = () => {
    let updatedArray = [];
    TodayData.map(item => {
      item.open = true;
      updatedArray.push(item);
    });
    setTodayData(updatedArray);
  };

  return (
    <SafeAreaView
      style={NotificationStyle.mainView}>
      <View style={NotificationStyle.headerCont}>
        <Header
          buttonColor={AppColor.whiteShade}
          styles={{color: AppColor.black}}
          stylesText={{color: AppColor.black}}>
          {'Notification'}
        </Header>
      </View>
      
        <TouchableOpacity style={NotificationStyle.middleCont} onPress={submitHandlerTwo}>
          <Text style={NotificationStyle.renderItemHeaderFontFirst}>
            Mark All As Read
          </Text>
        </TouchableOpacity>
      <View style={NotificationStyle.bodyCont}>
        <ScrollView style={{width: wp('100')}}>
          <FlatList data={TodayData} renderItem={renderItem} />

          <CustomModal
            isVisible={showModal}
            onBackdropPress={() => {
              setShowModal(false);
            }}
            modalButtonPress={() => {
              setShowModal(false);
            }}
            buttonBackgroundColor={AppColor.primary}
            source={require('../../../assets/animations/sms.json')}
            lottieStyle={{width: wp('35'), height: wp('35')}}
            text={readNotificationInModal}
            style={{marginTop: wp(10)}}
            buttonText={'Close'}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Notifications;
