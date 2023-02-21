import React from "react";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Text , SafeAreaView , ScrollView , View , TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { AppColor } from "../assets/colors/AppColors";
import { Neomorph } from "react-native-neomorph-shadows";
import Lottie from "lottie-react-native";
import NeoButton from "../components/NeoMorphButton/NeoButton";
const TryAnotherWay = () => {
    return(
        <SafeAreaView style={{backgroundColor:AppColor.whiteShade , flex:1}}>
            <View style={{alignItems:"center",marginTop:hp('10')}}>
                <Neomorph style={{width:wp('50'),height:hp('25'),borderRadius:wp('30'),backgroundColor:AppColor.whiteShade,shadowRadius:4}}>
                    <Lottie style={{alignSelf:"center",height:hp('38'),bottom:hp('3'),left:wp(.5)}}  source={require('../assets/animations/phone_number.json')} autoPlay/>
                </Neomorph>
            </View>
            <View style={{width:wp('68'),alignItems:"center" , marginTop:hp(5)}}>
                <Text style={{fontFamily:'Poppins-SemiBold' , fontSize:wp(4.5), color:AppColor.black}}>Enter Your Phone Number</Text>
            </View>
            <View style={{alignSelf:"center"}}>
                <Neomorph style={{width:wp(90) , marginTop:hp(1),height:hp(13),alignItems:"center" ,justifyContent:"center",borderRadius:20,overflow:"hidden",backgroundColor:AppColor.whiteShade,shadowRadius:4}}>
                    <PhoneInput defaultCode="PK" autoFocus textInputStyle={{fontFamily:'Poppins-SemiBold',fontSize:wp(4),top:hp(.8),}}
                                        textContainerStyle={{borderRadius:20,backgroundColor:AppColor.white}}
                                        containerStyle={{backgroundColor:AppColor.whiteShade,width:wp(80),height:hp(10)}}
                                        codeTextStyle={{fontSize:wp(4)}}/>
                </Neomorph>
            </View>
            <View style={{alignItems:"center",marginTop:hp(5)}}>
               <TouchableOpacity>
                    <NeoButton width={wp(90)} height={hp(8)}  backgroundColor={AppColor.primary} borderRadius={30}>
                        <Text style={{fontFamily:'Poppins-SemiBold',color:AppColor.white,fontSize:wp(5)}}>Send</Text>
                    </NeoButton>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TryAnotherWay;