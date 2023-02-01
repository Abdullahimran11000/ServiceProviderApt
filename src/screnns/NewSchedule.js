import React from "react";
import { Text , TouchableOpacity , SafeAreaView  ,ScrollView, View } from "react-native";
import { AppColor } from "../assets/colors/AppColors";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import DateTimePicker from "react-native-modal-datetime-picker";
const NewSchedule = () => {
    return(
        <SafeAreaView>
            <View>
                <View style={{height: hp(8) , width: wp(80)}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold' , color:AppColor.black , fontSize:wp(8) , left: wp(5)}}>Add New Schedule</Text>
                </View>
                <View>
                    <DateTimePicker mode="date" isVisible={true}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewSchedule;