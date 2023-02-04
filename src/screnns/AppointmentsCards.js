import React from "react";
import { Text , SafeAreaView, View ,TextInput, ScrollView, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen";
import { AppColor } from "../assets/colors/AppColors";
import { Neomorph } from "react-native-neomorph-shadows";
import { AppointmentStyle } from "../assets/styles/AppointmentStyle";
import NeoButton from "../components/NeoMorphButton/NeoButton";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const AppointmentsCards = () => {
    const navigation = useNavigation();
    return(
        
        <SafeAreaView>
            <ScrollView>
                <View  style={AppointmentStyle.mainView}>
                    <View style={AppointmentStyle.viewOneContainer}>
                        <TouchableOpacity>
                            <NeoButton  height={hp(18)} width={wp(90)}  borderRadius={20} backgroundColor={AppColor.whiteOpacity}  darkShadowColor={AppColor.black}>
                                <View style={AppointmentStyle.viewOneContainerInnerView}>               
                                    <View style={AppointmentStyle.viewOneContainerInnerViewOne}>
                                        <Text style={AppointmentStyle.viewOneContainerInnerViewFirstText}>105</Text>
                                        <Text style={AppointmentStyle.viewOneContainerInnerViewSecondText}>Total Appointment Slots</Text>
                                    </View>
                                    <View style={{flex:3 , width:wp(30), height:hp(20)}}>
                                        <Lottie style={{alignSelf:"center"}} source={require('../assets/animations/slots.json')} loop autoPlay/>
                                    </View>
                                </View>
                                </NeoButton>
                        </TouchableOpacity>
                    </View>
                    <View style={AppointmentStyle.viewTwoContainer}>
                        <TouchableOpacity>
                            <NeoButton  height={hp(18)} width={wp(90)}  borderRadius={20} backgroundColor={AppColor.whiteOpacity} darkShadowColor={AppColor.black}>
                                <View style={AppointmentStyle.viewTwoContainerInnerView}>               
                                    <View style={AppointmentStyle.viewTwoContainerInnerViewOne}>
                                        <Text style={AppointmentStyle.viewTwoContainerInnerViewOneTextOne}>10</Text>
                                        <Text style={AppointmentStyle.viewTwoContainerInnerViewOneTextTwo}>Upcoming Appointments</Text>
                                    </View>
                                    <View style={AppointmentStyle.viewTwoContainerInnerViewTwo}>
                                        <Lottie style={{alignSelf:"center" , width:wp(18) , height: hp(13), top:hp(2)}}  source={require('../assets/animations/UpcomingAppointments.json')} loop autoPlay/>
                                    </View>
                                </View>
                            </NeoButton>
                        </TouchableOpacity>
                    </View>
                    <View style={AppointmentStyle.viewThreeContainer}>
                        <TouchableOpacity>
                            <NeoButton  height={hp(18)} width={wp(90)}  borderRadius={20} backgroundColor={AppColor.whiteOpacity} darkShadowColor={AppColor.black} >
                                <View style={AppointmentStyle.viewThreeContainerInnerView}>               
                                    <View style={AppointmentStyle.viewThreeContainerInnerViewOne}>
                                        <Text style={AppointmentStyle.viewThreeContainerInnerViewOneTextOne}>20</Text>
                                        <Text style={AppointmentStyle.viewThreeContainerInnerViewOneTextTwo}>Completed Appointments</Text>
                                    </View>
                                    <View style={AppointmentStyle.viewThreeContainerInnerViewTwo}>
                                        <Lottie style={{alignSelf:"center"}} source={require('../assets/animations/completedAppointments.json')} loop autoPlay/>
                                    </View>
                                </View>
                            </NeoButton>
                        </TouchableOpacity>
                    </View>
                    <View style={AppointmentStyle.viewFourContainer}>
                        <TouchableOpacity>
                            <NeoButton  height={hp(18)} width={wp(90)} borderRadius={20} backgroundColor={AppColor.whiteOpacity} darkShadowColor={AppColor.black}>
                                <View style={AppointmentStyle.viewFourContainerInnerView}>               
                                    <View style={AppointmentStyle.viewFourContainerInnerViewOne}>
                                        <Text style={AppointmentStyle.viewFourContainerInnerViewOneTextOne}>105</Text>
                                        <Text style={AppointmentStyle.viewFourContainerInnerViewOneTextTwo}>Cancelled Appointments</Text>
                                    </View>
                                    <View style={AppointmentStyle.viewFourContainerInnerViewTwo}>
                                        <Lottie style={{alignSelf:"center" , width: wp(20) , height: hp(15) , top:hp(1)}}  source={require('../assets/animations/cancelledAppointments.json')} loop autoPlay/>
                                    </View>
                                </View>
                            </NeoButton>
                        </TouchableOpacity>
                    </View>   
                    <View style={AppointmentStyle.viewFiveContainer}>
                        <TouchableOpacity onPress={() => {navigation.navigate('NewSchedule')}}>
                            <NeoButton  height={hp(18)} width={wp(90)} borderRadius={20} backgroundColor={AppColor.whiteOpacity}  darkShadowColor={AppColor.black} marginBottom={hp(5)} >
                                <View style={AppointmentStyle.viewFiveContainerInnerView}>               
                                    <View style={AppointmentStyle.viewFiveContainerInnerViewOne}>
                                        <Text style={AppointmentStyle.viewFiveContainerInnerViewOneTextOne}>Add New Schedule</Text>
                                    </View>
                                    <View style={AppointmentStyle.viewFiveContainerInnerViewTwo}>
                                        <Lottie style={{alignSelf:"center" , width: wp(20) , height: hp(15) , top:hp(1)}} source={require('../assets/animations/addNewSchedule.json')} loop autoPlay/>
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
export default AppointmentsCards;