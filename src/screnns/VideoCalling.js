import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {VideoCallingStyle} from '../assets/styles/VideoCallingStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import { AppColor } from '../assets/colors/AppColors';
import BackButton from '../components/ScrennHeader/BackButton';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../assets/context/AppContext';
import Lottie from 'lottie-react-native';

const VideoCalling = () => {
  const navigation = useNavigation();
  const [openMic, setOpenMic] = useState(false);
  const {openCam, storeOpenCam} = useContext(AppContext);
  const {callStatus} = useContext(AppContext);
  let display;
  if (callStatus === 'Audio') {
    display = 'none';
  } else {
    display = 'flex';
  }
  return (
    <SafeAreaView
      style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
      <BackButton onPress={() => navigation.goBack()}></BackButton>

      <View style={VideoCallingStyle.nameTimeView}>
        <Text style={VideoCallingStyle.text}>Dr.Elisbeth</Text>
        <Text style={[VideoCallingStyle.text, {fontFamily: 'Poppins-Light'}]}>
          10:33pm
        </Text>
      </View>

      <View style={VideoCallingStyle.LottieView}>
        <Lottie
          style={{width: wp('50'), height: hp('50'), alignSelf: 'center'}}
          autoPlay
          source={require('../assets/animations/pulse.json')}></Lottie>

        <Image
          style={VideoCallingStyle.imageStyle}
          source={require('../assets/images/profile.jpg')}
        />
      </View>

      <View style={VideoCallingStyle.footerView}>
        
          <NeoButton
            width={wp('17')}
            height={wp('17')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('25')}>
            <TouchableOpacity
              onPress={() => {
                setOpenMic(!openMic);
              }}>
              {!openMic ? (
                <FontAwesome
                  style={{color: AppColor.black}}
                  name={'microphone-slash'}
                  size={wp('7')}
                />
              ) : (
                <FontAwesome
                  style={{color: AppColor.black}}
                  name={'microphone'}
                  size={wp('7')}
                />
              )}
            </TouchableOpacity>
          </NeoButton>
          <NeoButton
            width={wp('17')}
            height={wp('17')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('25')}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialIcon
                style={{color: AppColor.red}}
                name="call-end"
                size={wp('9')}
              />
            </TouchableOpacity>
          </NeoButton>
        

        <View style={{display: display}}>
          <NeoButton
            width={wp('17')}
            height={wp('17')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('10')}>
            <TouchableOpacity
              onPress={() => {
                storeOpenCam(!openCam);
              }}>
              {openCam ? (
                <FontAwesome
                  style={{color: AppColor.black}}
                  name="video-camera"
                  size={wp('7')}
                />
              ) : (
                <MaterialIcon
                  style={{color: AppColor.black}}
                  name="videocam-off"
                  size={wp('9')}
                />
              )}
            </TouchableOpacity>
          </NeoButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VideoCalling;
