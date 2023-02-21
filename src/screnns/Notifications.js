import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ii from 'react-native-vector-icons/Ionicons';
import ad from 'react-native-vector-icons/AntDesign';
import {NotificationStyle} from '../assets/styles/AnimatedDrawerStyle/NotificationStyle';
import { CertificatesStyle } from '../assets/styles/CertificatesStyle';
import { AppColor } from '../assets/colors/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Neomorph } from 'react-native-neomorph-shadows';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/ScreenHeader/Header';
const Notifications = props => {
  const navigation = useNavigation()
  const TodayData = [
    {
      id: 1,
      title: 'Yoh have an appointment with Dr.Manskurt Slauddin at 10pm today',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
      iconprovider: ad,
      iconname: 'solution1',
    },
    {
      id: 2,
      title: 'Yoh have an private message from Dr.Adam Jordan',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'ios-chatbox-ellipses-sharp',
    },
    {
      id: 3,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
    },
    {
      id: 4,
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'arrow-back',
    },
  ];

  const renderItem = ({item}) => {
    return (
        <Neomorph style={NotificationStyle.innerItems}>
          <TouchableOpacity style={NotificationStyle.headContImageCont} onPress={props.onPress}>
            <item.iconprovider style={NotificationStyle.iconstyle} name={item.iconname} size={wp('6')} />
            <View style={NotificationStyle.headContMiddleCont}>
              <View style={NotificationStyle.middleInnerFirstCont}>
                <Text style={NotificationStyle.middleInnerContFirstHeading}>
                  {item.title}
                </Text>
              </View>
              <View style={NotificationStyle.middleInnerSecondCont}>
                <Text style={NotificationStyle.middleInnerContSecondHeading} >
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Neomorph>
    );
  };

  return (
    <SafeAreaView>
      <View style={NotificationStyle.mainView}>
        
        <Header buttonColor={AppColor.whiteShade}>{"Notification"}</Header>

        {/* 1st render  */}

        <View style={NotificationStyle.firstContainerOfMainView}>
          <View style={NotificationStyle.innerViewOfFirstContainer}>
            <Text style={NotificationStyle.renderItemHeaderFontFirst}> Today </Text>
            <TouchableOpacity style={NotificationStyle.renderItemHeaderFontSecond} onPress={() => setShow(!show)}>
            </TouchableOpacity>
          </View>
          
            <FlatList data={TodayData} renderItem={renderItem} keyExtractor={item => item.id}> 
            </FlatList>
          
        </View>

        {/* 2nd render  */}

        <View style={NotificationStyle.secondContainerOfMainView}>
          <View style={NotificationStyle.innerViewOfSecondContainer}>
            <Text style={NotificationStyle.renderItemHeaderFontFirst}> Yesterday </Text>
            <TouchableOpacity style={NotificationStyle.renderItemHeaderFontSecond}>
            </TouchableOpacity>
          </View>
          <FlatList data={TodayData} renderItem={renderItem} keyExtractor={item => item.id}>
          </FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Notifications;


