import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {AppIntroStyle} from '../assets/styles/AuthStyle/AppIntroStyle';
import Lottie from 'lottie-react-native';
import SwipeButton from './SwipeButton';

const AppIntro = (props) => {
  const slides = [
    {
      key: 1,
      image: require('../assets/animations/appIntroSearch.json'),
      heading: 'Find a doctor near you',
    },
    {
      key: 2,
      image: require('../assets/animations/appIntroLogin.json'),
      heading: 'Get yourself register',
    },
  ];

  const renderSlide = ({item}) => {
    return (
      <View>
        <View style={AppIntroStyle.animationView}>
          <Lottie
            style={AppIntroStyle.animationStyle}
            source={item.image}
            autoPlay
          />
        </View>
        <View style={AppIntroStyle.headingView}>
          <Text style={AppIntroStyle.headingText}>{`${item.heading}`}</Text>
        </View>
        <View style={AppIntroStyle.paraView}>
          <Text style={AppIntroStyle.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={AppIntroStyle.mainView}>
          <View style={AppIntroStyle.sliderView}>
            <AppIntroSlider
              renderItem={renderSlide}
              data={slides}
              onDone={true}
              nextLabel=""
              doneLabel=""
            />
          </View>
          <SwipeButton navigation={props.navigation}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AppIntro;
