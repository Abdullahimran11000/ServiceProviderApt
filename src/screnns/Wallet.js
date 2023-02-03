import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {WalletStyle} from '../assets/styles/WalletStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColor} from '../assets/colors/AppColors';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../assets/styles/DashboardStyle/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {height} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {Neomorph} from 'react-native-neomorph-shadows';

const Wallet = () => {
  return (
    <SafeAreaView style={WalletStyle.mainView}>
      <ScrollView>
        <View style={WalletStyle.headCont}>
          <View style={WalletStyle.headContInnerCont}>
            <TouchableOpacity
              style={WalletStyle.headContMenuCont}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="menu" color={AppColor.red} size={wp('7')} />
              <Text
                style={[
                  WalletStyle.textStyle,
                  {width: wp('50'), position: 'absolute', left: wp('8')},
                ]}>
                Go To Dashboard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={WalletStyle.textCont}>
              <Text style={[WalletStyle.textStyle, {width: wp('20')}]}>
                Wallet
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={WalletStyle.CardView}>
          <TouchableOpacity style={WalletStyle.OpacityStyle}>
            <NeoButton
              height={hp(15)}
              width={wp(45)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.cardAmountText}>$718.9</Text>
              <Text style={WalletStyle.cardText}>Net Income</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={WalletStyle.SecondCard}>
            <NeoButton
              height={hp(15)}
              width={wp(45)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.cardAmountText}>$618.9</Text>
              <Text style={WalletStyle.cardText}>Available Balance</Text>
            </NeoButton>
          </TouchableOpacity>
        </View>

        <View style={WalletStyle.CardView}>
          <TouchableOpacity style={WalletStyle.OpacityStyle}>
            <NeoButton
              height={hp(15)}
              width={wp(45)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.cardAmountText}>$48</Text>
              <Text style={WalletStyle.cardText}>requested Income</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={WalletStyle.SecondCard}>
            <NeoButton
              height={hp(15)}
              width={wp(45)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.cardAmountText}>$0</Text>
              <Text style={WalletStyle.cardText}>Compeleted Withdrawl!</Text>
            </NeoButton>
          </TouchableOpacity>
        </View>

        <Neomorph style={WalletStyle.TextInputNeo}>
          <TextInput
            style={WalletStyle.TextinputStyle}
            placeholder={'enter your amount'}></TextInput>
          <Feather
            name="dollar-sign"
            color={AppColor.primary}
            size={wp('7')}
            style={WalletStyle.dollarIconStyle}
          />
          <TouchableOpacity
            style={WalletStyle.sendOpacity}>
            <NeoButton
              width={wp(18)}
              height={hp(10)}
              backgroundColor={AppColor.primary}
              borderRadius={wp(3)}>
              <Feather
                name="send"
                color={AppColor.whiteOpacity}
                size={wp('8')}
                style={WalletStyle.sendIconStyle}
              />
            </NeoButton>
          </TouchableOpacity>
        </Neomorph>

           <Text style={{fontFamily:"Poppins-SemiBold",marginLeft:wp(5),fontSize:wp(5)}}>
            All Withdrawl Request</Text>       
        
        <Neomorph style={WalletStyle.withdrawlMainNeo}>
          
        <TouchableOpacity style={WalletStyle.amountNeo}>
            <NeoButton
              height={hp(15)}
              width={wp(28)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.amountText}>$48</Text>
              <Text style={WalletStyle.cardText}>Amount</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={WalletStyle.amountNeo}>
            <NeoButton
              height={hp(15)}
              width={wp(28)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.amountText}>2023-01-12</Text>
              <Text style={WalletStyle.cardText}>withdraw date</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={WalletStyle.amountNeo}>
            <NeoButton
              height={hp(15)}
              width={wp(28)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <Text style={WalletStyle.amountText}>Requested</Text>
              <Text style={WalletStyle.cardText}> status</Text>
            </NeoButton>
          </TouchableOpacity>
       
        </Neomorph>

        {/* </View> */}






      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
