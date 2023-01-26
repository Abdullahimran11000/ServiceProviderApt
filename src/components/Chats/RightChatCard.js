import React from 'react';
import {View, Text, Image} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {TextInputStyle} from '../../assets/styles/ComponentStyle/CustomTextInputStyle/TextInputStyle';
import {ChatStyle} from '../../assets/styles/DashboardStyle/ChatStyle';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../assets/colors/AppColors';
const RightChatCard = ({item}) => {
  return (
    <View>
      <Neomorph
        style={{
          left: wp(20),
          top: hp(4.5),
          backgroundColor: AppColor.whiteShade,
          width: wp(55),
          height: hp(6),
          justifyContent: 'center',
          borderRadius: 20,
          shadowRadius: 4,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={ChatStyle.textRight}>{item.message}</Text>
        </View>
        <View>
          <Text style={ChatStyle.subHeadingTextOne}>{item.time}</Text>
        </View>
      </Neomorph>
      <Image
        style={ChatStyle.messageImage1}
        source={require('../../assets/images/profile.jpg')}
      />
    </View>
  );
};

export default RightChatCard;
