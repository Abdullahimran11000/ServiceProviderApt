import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ChatStyle} from '../../assets/styles/DashboardStyle/ChatStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AppColor} from '../../assets/colors/AppColor';
import {Neomorph} from 'react-native-neomorph-shadows';
import { AppointmentStyle } from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';

const CompleteAppointmentCard = ({item, onPress}) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <View
      style={{
        width: wp(95),
        height: showButton ? hp(33) : hp(25),
        margin: 10,
        marginTop: 2,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.02)',
      }}>
      <View
        style={{
          borderRadius: wp('10'),

          width: wp('20'),
          height: wp('20'),
          marginLeft: 20,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={AppointmentStyle.doctorImage}
          source={require('../../assets/images/doctorsInfo.png')}></Image>
      </View>

      <View
        style={{
          marginHorizontal: wp(28),
          marginVertical: wp(-17),
          marginLeft: wp(30),
        }}>
        <View style={{position: 'absolute', right: wp('-20')}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('6'),
              height: wp('6'),
              borderRadius: wp('6'),
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}
            onPress={() => setShowButton(!showButton)}>
            <Icon name="angle-down" size={15}></Icon>
          </TouchableOpacity>
        </View>
        <Text style={AppointmentStyle.doctorText}>{item.name}</Text>

        <View>
          <Text>{item.deptName}</Text>
        </View>
      </View>

      <View style={AppointmentStyle.secondFooterView}>
        <Icon size={12} name="calendar"></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.date}</Text>

        <Icon size={12} name="clock-o"></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.time}</Text>

        <Icon size={12} name="wechat"></Icon>
        <TouchableOpacity onPress={onPress}>
          <Text style={AppointmentStyle.secondDoctorText}>
            {item.appDestination}
          </Text>
        </TouchableOpacity>
      </View>
      {showButton ? (
        <View style={AppointmentStyle.footerOpcaityView}>
          <TouchableOpacity style={AppointmentStyle.footerOpacityButton}>
            <Text style={AppointmentStyle.footerButtonText}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={AppointmentStyle.footerOpacityButton}>
            <Text style={AppointmentStyle.footerButtonText}>Reshcedule</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default CompleteAppointmentCard;
