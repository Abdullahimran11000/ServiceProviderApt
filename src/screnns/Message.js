import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import {MessageStyle} from '../assets/styles/AnimatedDrawerStyle/MessageStyle';
import {useNavigation} from '@react-navigation/native';
import MessageList from '../components/Message/MessageList';
import RNFetchBlob from 'rn-fetch-blob';

const Message = () => {
  const navigation = useNavigation();
  const [messageData, setMessageData] = useState([
    {
      id: 1,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Amanda',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
    },
    {
      id: 2,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Khawar',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
    },
    {
      id: 3,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Aletta',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
    },
    {
      id: 4,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Miranda',
      message: 'Hello doc! i want to consult',
      time: '15m ago',
    },
    {
      id: 5,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Pasha',
      message: 'Hello doc! i want to consult',
      time: '25m ago',
    },
    {
      id: 6,
      source: require('../assets/images/selfieOne.jpg'),
      from: 'Dr. Pasha',
      message: 'Hello doc! i want to consult',
      time: '25m ago',
    },
  ]);

  const loadAllMessage = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setMessageData(resp.json()),
    );
  };

  const delHandler = id => {
    const filteredMessages = messageData.filter(item => item.id !== id);
    setMessageData(filteredMessages);
  };

  const renderItem = ({item}) => {
    return (
      <MessageList
        item={item}
        onPress={() => {
          delHandler(item.id);
        }}
      />
    );
  };
  return (
    <SafeAreaView style={MessageStyle.mainView}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        Messages
      </BackButton>
      <View style={MessageStyle.flatListView}>
        <FlatList
          data={messageData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Message;
