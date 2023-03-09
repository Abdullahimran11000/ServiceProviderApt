import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {AppIntroStyle} from '../../assets/styles/AuthStyle/AppIntroStyle';
import Lottie from 'lottie-react-native';
import SwipeButton from '../../components/Swiper/SwipeButton';

const AppIntro = () => {
  const slides = [
    {
      key: 1,
      image: require('../../assets/animations/appIntroSearch.json'),
      heading: 'Find a doctor near you',
    },
    {
      key: 2,
      image: require('../../assets/animations/appIntroLogin.json'),
      heading: 'Get yourself register',
    },
  ];

  const renderSlide = ({item}) => {
    return (
      <View>
        <Lottie
          style={AppIntroStyle.animationStyle}
          source={item.image}
          autoPlay loop
        />
        <Text style={AppIntroStyle.headingText}>{`${item.heading}`}</Text>
        <Text style={AppIntroStyle.paraText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={AppIntroStyle.mainView}>
      <View style={AppIntroStyle.sliderView}>
        <AppIntroSlider
          renderItem={renderSlide}
          data={slides}
          onDone={true}
          nextLabel=""
          doneLabel=""
        />
      </View>
      <SwipeButton />
    </SafeAreaView>
  );
};

export default AppIntro;
