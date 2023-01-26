import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColor';

const Splash = () => {
  const [responseData, setResponseData] = useState([]);
  //   const [showPost, setShowPost] = useState(false);

  const loadSingleToDos = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/posts', {
      'Content-Type': 'application/json',
    }).then(resp => {
      setResponseData(resp.json);
    });
  };

  const pressHandler = () => {
    loadSingleToDos();
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 20,
          padding: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          height: 150,
          backgroundColor: AppColor.primary,
        }}>
        <ScrollView>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <NeoButton
        width={wp('40')}
        height={hp('10')}
        backgroundColor={AppColor.primary}
        borderRadius={wp('10')}>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={{fontFamily: 'Poppins-Bold'}}>Hello Splash</Text>
        </TouchableOpacity>
      </NeoButton>

      <FlatList
        // style={{height: 300, }}
        data={responseData}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Splash;
