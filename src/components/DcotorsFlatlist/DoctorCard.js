import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppColor } from '../../assets/colors/AppColors';
import {DoctorCardStyle} from '../../assets/styles/DoctorCardStyle';

const DoctorCard = ({
  colors,
  source,
  name,
  dept,
  star,
  experience,
  backColor,
  onPress,
  marginRight,
}) => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#FFFFFF');
  return (
    <SafeAreaView>
      <View style={[DoctorCardStyle.parentView, {marginRight: marginRight}]}>
        <View style={DoctorCardStyle.childView1}>
          <View style={[DoctorCardStyle.boxView, {backgroundColor: colors}]}>
            <ImageBackground
              style={DashboardStyle.doctorCardImage}
              source={source}
              resizeMode="cover">
              <View style={DashboardStyle.doctorHeaderCont}>
                <View style={DashboardStyle.doctorHeaderContInnerCont}>
                  <TouchableOpacity
                    style={DashboardStyle.doctorHeaderContTouchable}
                    onPress={() => {
                      if (fill === 'heart') {
                        setFill('hearto');
                        setColor('#FFFFFF');
                      } else {
                        setFill('heart');
                        setColor('#f56262');
                      }
                    }}>
                    <AntDesign name={fill} size={12} color={color} />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={DashboardStyle.doctorLowerContFirstHeading}>
            <Text style={DashboardStyle.doctorLowerContFirstHeadingText}>
              {name}
            </Text>
          </View>
          <View style={DoctorCardStyle.deptView}>
            <Text style={DashboardStyle.doctorLowerContSecondHeadingText}>
              {dept}
            </Text>
            <TouchableOpacity
              style={[DoctorCardStyle.buttonView, {backgroundColor: backColor}]}
              onPress={onPress}>
              <AntDesign
                name={'right'}
                size={wp('4')}
                style={DoctorCardStyle.buttonIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={DashboardStyle.doctorLowerFlexView}>
            <View style={DashboardStyle.doctorLowerFlexViewInnerView}>
              <TouchableOpacity>
                <AntDesign name="star" size={wp('4')} color="#FFD700" />
              </TouchableOpacity>
              <Text style={DashboardStyle.doctorLowerFlexTextOne}>{star}</Text>
            </View>

            <View style={{position: 'absolute', right: 0}}>
              <View style={DashboardStyle.doctorLowerFlexViewInnerView}>
                <MaterialIcons
                  name="work"
                  size={wp('4')}
                  color={AppColor.black}></MaterialIcons>
                <Text style={DashboardStyle.doctorLowerFlexTextTwo}>
                  {experience}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorCard;
