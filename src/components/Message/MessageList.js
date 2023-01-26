import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {MessageStyle} from '../../assets/styles/AnimatedDrawerStyle/MessageStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Neomorph} from 'react-native-neomorph-shadows';
import Swipeable from 'react-native-swipeable';

const MessageList = ({item, onPress}) => {

  
  const rightButtons = [
    <TouchableOpacity onPress={onPress}>
      <Neomorph style={MessageStyle.rightButtonsViews}>
        <MaterialIcons
          name="delete-outline"
          size={wp('8')}
          style={MessageStyle.rightButtonIcons}
        />
      </Neomorph>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightButtons}>
      <View style={MessageStyle.cardView}>
        <Neomorph style={MessageStyle.headCont}>
          <View style={MessageStyle.headContInnerCont}>
            <TouchableOpacity style={MessageStyle.headContImageCont}>
              <Image
                style={MessageStyle.headContImageStyle}
                source={item.source}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={MessageStyle.headContMiddleCont}>
              <View style={MessageStyle.middleInnerFirstCont}>
                <Text style={MessageStyle.middleInnerContFirstHeading}>
                  {item.from}
                </Text>
              </View>
              <View style={MessageStyle.middleInnerSecondCont}>
                <Text
                  style={MessageStyle.middleInnerContSecondHeading}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.message}
                </Text>
              </View>
            </View>
            <View style={MessageStyle.headContLastCont}>
              <Text style={MessageStyle.headContLastContText}>{item.time}</Text>
            </View>
          </View>
        </Neomorph>
      </View>
    </Swipeable>
  );
};

export default MessageList;
