import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DoctorBarStyle} from '../../assets/styles/DashboardStyle/DoctorBarStyle';

const DoctorBar = props => {
  return (
    <View style={DoctorBarStyle.mainView}>
      <View style={DoctorBarStyle.textView}>
        <Text style={DoctorBarStyle.textStyle}>{props.One}</Text>
      </View>
      <View style={DoctorBarStyle.touchableView}>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={DoctorBarStyle.touchableText}>{props.Two}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorBar;
