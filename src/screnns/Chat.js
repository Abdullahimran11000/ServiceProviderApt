import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ChatStyle} from '../assets/styles/DashboardStyle/ChatStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../assets/colors/AppColors';
import {Neomorph} from 'react-native-neomorph-shadows';
import RightChatCard from '../components/Chats/RightChatCard';
import LeftChatCard from '../components/Chats/LeftChatCard';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../assets/context/AppContext';

const Chat = () => {
  const navigation = useNavigation();
  const {storeOpenCam} = useContext(AppContext);
  const {storeCallStatus} = useContext(AppContext)
  const [allChats, setAllChats] = useState([
    {
      id: 1,
      message: 'Hello doc! i want to consult',
      time: '09:40 am',
      sender_id: 1,
      sender_type: 'customer',
    },
    {
      id: 2,
      message: 'Yes! How can i help you',
      time: '09:50 am',
      sender_id: 2,
      sender_type: 'serviceProvider',
    },
  ]);

  const loadAllChats = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setAllChats(resp.json()),
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade}}>
      <ScrollView>
        <View style={ChatStyle.mainView}>
          <View style={ChatStyle.SearchBar}>
            <TouchableOpacity  onPress={() => navigation.goBack()} style={ChatStyle.backbutton}>
              <Ionicons name="chevron-back-sharp" size={wp('6')} />
            </TouchableOpacity>
          </View>
          <View style={ChatStyle.headerView}>
            <Image style={ChatStyle.image} source={require('../assets/images/profile.jpg')} />
            <Text style={ChatStyle.nameText}>Dr.Adam Jordan</Text>
            <Text style={ChatStyle.status}>Online</Text>
            <View style={ChatStyle.headerInnerViewIcons}>
              <Neomorph lightShadowColor="rgba(255,255,255,0.2)" style={ChatStyle.videoCamButtonStyle}>
                <TouchableOpacity onPress={() => { navigation.navigate('VideoCalling'); storeOpenCam(true); storeCallStatus('Video') }}>
                  <Ionicons size={wp('5.5')} name="videocam" color={AppColor.primary} />
                </TouchableOpacity>
              </Neomorph>
              <Neomorph lightShadowColor="rgba(255,255,255,0.1)" style={ChatStyle.callButtonStyle}>
                <TouchableOpacity onPress={() => { navigation.navigate('VideoCalling'); storeOpenCam(false); storeCallStatus('Audio') }}>
                  <Ionicons size={wp('5.5')} name="call" color={AppColor.primary} />
                </TouchableOpacity>
              </Neomorph>
            </View>
          </View>
          <View style={ChatStyle.messageContainerView}>
            <View style={ChatStyle.sendMessageContainerHeaderTextView}>
              <Text style={ChatStyle.sendMessageContainerHeaderTextStyle}>Today</Text>
            </View>
            <FlatList
              data={allChats}
              renderItem={({item}) => {
                if (item.sender_id == 1) {
                  return <RightChatCard item={item} />;
                } else {
                  return <LeftChatCard item={item} />;
                }
              }}
            />
          </View>
          <View style={ChatStyle.sendMessageContainerView}>
            <Neomorph inner style={ChatStyle.sendMessageContainerStyle}>
              <TextInput style={ChatStyle.sendMessageContainerTextStyle}  placeholder="Write your Message"/>
            </Neomorph>
            <TouchableOpacity style={ChatStyle.sendMessageTouchableOpacityView}>
              <View style={ChatStyle.sendMessageIconView}>
                <Icon name="location-arrow" color={AppColor.white} size={wp('6')} style={ChatStyle.Icon}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
