import React from 'react';
import {View, Text, Image} from 'react-native';

import {ChatStyle} from '../../assets/styles/DashboardStyle/ChatStyle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import { AppColor } from '../../assets/colors/AppColors';
const LeftChatCard = ({item}) => {
  return (
    <View style={{height: hp(14)}}>
      <Neomorph
        style={{
          left: wp(13),
          top: hp(4.5),
          width: wp(55),
          height: hp(6),
          backgroundColor: AppColor.whiteShade,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(10),
          shadowRadius: 4,
        }}>
        <View>
          <Text style={ChatStyle.textLeft}>{item.message}</Text>
        </View>
        <View>
          <Text style={ChatStyle.subHeadingTextTwo}>{item.time}</Text>
        </View>
      </Neomorph>
      <Image
        style={ChatStyle.messageImage2}
        source={require('../../assets/images/selfie.jpg')}
      />
    </View>
  );
};

export default LeftChatCard;
