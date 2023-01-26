import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapsStyle} from '../assets/styles/DashboardStyle/MapsStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppColor } from '../assets/colors/AppColors';

const Maps = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 32.166351,
            longitude: 74.1959,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={MapsStyle.mainView}>
          <View style={MapsStyle.firstView}>
            <Neomorph style={MapsStyle.innerFirstView}>
              <TouchableOpacity  onPress={() => props.navigation.goBack()}  style={MapsStyle.backbutton}>
                <Ionicons name="chevron-back-sharp" size={wp('6')} />
              </TouchableOpacity>
              <Icon style={MapsStyle.iconStyle}  name="search"  color={'grey'}  size={wp('4.5')}/>
              <TextInput style={MapsStyle.textinput} placeholder="Search Address" fontFamily={'Poppins-SemiBold'}></TextInput>
            </Neomorph>
          </View>
          <View style={MapsStyle.middleView}></View>
          <View style={MapsStyle.lastView}>
            <Neomorph inner style={MapsStyle.lastViewContainer}>
              <Card mode="contained" style={MapsStyle.cardMainView}>
                <View style={MapsStyle.cardView}>
                  <Card.Cover source={require('../assets/images/selfie.jpg')} style={MapsStyle.cardcover}/>
                  <Card.Title style={MapsStyle.cardTitleStyle} title="Dr. Rana Hamad" titleStyle={{fontFamily: 'Poppins-SemiBold', fontSize: 15}}/>
                  <Card.Content style={MapsStyle.cardContent}>
                    <Paragraph style={MapsStyle.cardParagraph}>
                      <AntDesign name="star" size={wp('4')} color="#FFD700" />
                      <Text style={MapsStyle.textFirst}>4.5</Text>
                      <Text style={MapsStyle.textSecond}> &nbsp;(1560 reviews) {'\n'} Hospital </Text>
                    </Paragraph>
                    <Neomorph style={MapsStyle.innerLastViewFirstButton}>
                      <TouchableOpacity>
                        <Text style={MapsStyle.cardInnerButtonTextStyle}> 500m </Text>
                        <Icon name="location-arrow" color={AppColor.primary} size={wp('3')} style={MapsStyle.locationArrowIcon} />
                      </TouchableOpacity>
                    </Neomorph>
                  </Card.Content>
                  <Neomorph style={MapsStyle.innerLastViewSecondButton}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Schedule')}>
                      <Icon name="chevron-right" size={wp('3.5')} color={'white'}/>
                    </TouchableOpacity>
                  </Neomorph>
                </View>
              </Card>
            </Neomorph>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Maps;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: Dimensions.get('window').height,
  },
});
