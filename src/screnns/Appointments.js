import React from "react";
import { Text , SafeAreaView, View ,TextInput, ScrollView, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen";
import { AppColor } from "../assets/colors/AppColors";
import { Neomorph } from "react-native-neomorph-shadows";
import { AppointmentStyle } from "../assets/styles/AppointmentStyle";
import NeoButton from "../components/NeoMorphButton/NeoButton";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const Appointments = () => {
    const navigation = useNavigation();
    return(
        
        <SafeAreaView>
            <ScrollView>
            <View  style={{display: 'flex', flex: 1 , backgroundColor:AppColor.whiteShade}}>
                <View style={{alignSelf:"center" ,marginTop: hp(5), marginBottom:hp(5)}}>
                    <TouchableOpacity>
                    <NeoButton  height={hp(18)} width={wp(90)} 
                                borderRadius={20} backgroundColor={AppColor.whiteOpacity} 
                                darkShadowColor={AppColor.black}
                                >
                     <View style={{flexDirection:"row" , backgroundColor:AppColor.primary , borderRadius:20}}>               
                        <View style={{flex:5 , top:hp(4)}}>
                            <Text style={{fontSize:wp(10), left:wp(5) , color:AppColor.white}}>105</Text>
                            <Text style={{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white}}>Total Appointment Slots</Text>
                        </View>
                     <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                        <Lottie style={{alignSelf:"center"}} 
                        source={require('../assets/animations/slots.json')}
                        loop autoPlay/>
                     </View>
                     </View>
                    </NeoButton>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:"center"}}>
                    <TouchableOpacity>
                    <NeoButton  height={hp(18)} width={wp(90)} 
                                borderRadius={20} backgroundColor={AppColor.whiteOpacity} 
                                darkShadowColor={AppColor.black}>
                     <View style={{flexDirection:"row" , backgroundColor:"#c3e0f7" , borderRadius:20}}>               
                        <View style={{flex:5 , top:hp(4)}}>
                            <Text style={{fontSize:wp(10), left:wp(5) , color:AppColor.white}}>10</Text>
                            <Text style={{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white}}>Upcoming Appointments</Text>
                        </View>
                     <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                        <Lottie style={{alignSelf:"center" , width:wp(18) , height: hp(13), top:hp(2)}} 
                        source={require('../assets/animations/UpcomingAppointments.json')}
                        loop autoPlay/>
                     </View>
                     </View>
                    </NeoButton>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:"center" ,marginTop: hp(5),}}>
                    <TouchableOpacity>
                    <NeoButton  height={hp(18)} width={wp(90)} 
                                borderRadius={20} backgroundColor={AppColor.whiteOpacity} 
                                darkShadowColor={AppColor.black}
                                >
                     <View style={{flexDirection:"row" , backgroundColor:"#81c5fc" , borderRadius:20}}>               
                        <View style={{flex:5 , top:hp(4)}}>
                            <Text style={{fontSize:wp(10), left:wp(5) , color:AppColor.white}}>20</Text>
                            <Text style={{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white}}>Completed Appointments</Text>
                        </View>
                     <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                        <Lottie style={{alignSelf:"center"}} 
                        source={require('../assets/animations/completedAppointments.json')}
                        loop autoPlay/>
                     </View>
                     </View>
                    </NeoButton>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:"center" ,marginTop: hp(5)}}>
                <TouchableOpacity>
                    <NeoButton  height={hp(18)} width={wp(90)} 
                                borderRadius={20} backgroundColor={AppColor.whiteOpacity} 
                                darkShadowColor={AppColor.black}
                                >
                     <View style={{flexDirection:"row" , backgroundColor:"#fcc2c2" , borderRadius:20}}>               
                        <View style={{flex:5 , top:hp(4)}}>
                            <Text style={{fontSize:wp(10), left:wp(5) , color:AppColor.white}}>105</Text>
                            <Text style={{fontFamily:'Poppins-SemiBold', left:wp(6), color:AppColor.white}}>Cancelled Appointments</Text>
                        </View>
                     <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                        <Lottie style={{alignSelf:"center" , width: wp(20) , height: hp(15) , top:hp(1)}} 
                        source={require('../assets/animations/cancelledAppointments.json')}
                        loop autoPlay/>
                     </View>
                     </View>
                    </NeoButton>
                </TouchableOpacity>
                </View>   
                <View style={{alignSelf:"center" ,marginTop: hp(5)}}>
                <TouchableOpacity onPress={() => {navigation.navigate('NewSchedule')}}>
                    <NeoButton  height={hp(18)} width={wp(90)} 
                                borderRadius={20} backgroundColor={AppColor.whiteOpacity} 
                                darkShadowColor={AppColor.black}
                                marginBottom={hp(5)}
                                >
                     <View style={{flexDirection:"row" , backgroundColor:"#e6b39e" , borderRadius:20}}>               
                        <View style={{flex:5 , top:hp(4)}}>
                            <Text style={{fontSize:wp(5), fontFamily:'Poppins-SemiBold', left:wp(6), top: hp(5),color:AppColor.white}}>Add New Schedule</Text>
                        </View>
                        <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                            <Lottie style={{alignSelf:"center" , width: wp(20) , height: hp(15) , top:hp(1)}} 
                            source={require('../assets/animations/addNewSchedule.json')}
                            loop autoPlay/>
                        </View>
                     </View>
                    </NeoButton>
                </TouchableOpacity>
                </View>               
            </View>
            </ScrollView>
            </SafeAreaView>
            
        
    )
}
export default Appointments;