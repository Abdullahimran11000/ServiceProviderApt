import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {WalletStyle} from '../../assets/styles/WalletStyle';
import {AppColor} from '../../assets/colors/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {Neomorph} from 'react-native-neomorph-shadows';
import Header from '../../components/ScreenHeader/Header';
import CustomModal from '../../components/Modal/CustomModal';
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
  const navigation = useNavigation();
  const [amountInput, setAmountInput] = useState('');
  const [availableBalance, setAvailableBalance] = useState('409');
  const [completedWithdrawl, setCompletedWithdrawl] = useState('428');
  const [modalTypeOpen, setModalTypeOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [amountAlert, setAmountAlert] = useState(AppColor.blackOpacity3)
  const [labelShow, setLabelShow] = useState('Enter Amount');

  const amountHandler = () => {
    if (Number(amountInput) > Number(availableBalance)) {
      setModalOpen(true);
      setModalTypeOpen(false);
      setAmountInput('');
      setAmountAlert(AppColor.blackOpacity3)
    } else if (amountInput === '') {
      setAmountAlert(AppColor.red);
      setLabelShow("Please Enter Amount!")
    } else {
      setModalOpen(true);
      setModalTypeOpen(true);
      setAmountInput('');
      setAvailableBalance(Number(availableBalance) - Number(amountInput));
      setCompletedWithdrawl(Number(completedWithdrawl) + Number(amountInput));
      setLabelShow("Enter Amount");
      setAmountAlert(AppColor.blackOpacity3)
    }
  };
  return (
    <SafeAreaView style={WalletStyle.mainView}>
      <Header
        buttonColor={AppColor.whiteShade}
        styles={{color: AppColor.black}}
        stylesText={{color: AppColor.black}}
        backgroundColor={AppColor.whiteShade}>
        {'Wallet'}
      </Header>
      <ScrollView style={{width: wp('100')}}>
        <CustomModal
          isVisible={modalOpen}
          onBackdropPress={() => {
            setModalOpen(false);
          }}
          source={
            modalTypeOpen
              ? require('../../assets/animations/paymentDone.json')
              : require('../../assets/animations/paymentError.json')
          }
          lottieStyle={{width: wp('35'), height: wp('35')}}
          text={
            modalTypeOpen
              ? 'Your transaction is successfully placed.'
              : 'Your balance is insufficient for this transaction.'
          }
          style={{marginTop: modalTypeOpen ? wp('12') : wp('10')}}
          modalButtonPress={() => {
            setModalOpen(false);
          }}
          buttonBackgroundColor={modalTypeOpen ? '#00B46E' : AppColor.primary}
          buttonText={'Close'}
        />

        <View style={WalletStyle.CardView}>
          <NeoButton
            height={hp(12)}
            width={wp(42)}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp(5)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Foundation
                name={'dollar'}
                size={wp('6.5')}
                color={AppColor.railFillColor}
              />
              <Text style={WalletStyle.cardAmountText}> 718</Text>
            </View>
            <Text style={WalletStyle.cardText}>Net Income</Text>
          </NeoButton>

          <NeoButton
            height={hp(12)}
            width={wp(42)}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp(5)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Foundation
                name={'dollar'}
                size={wp('6.5')}
                color={AppColor.railFillColor}
              />
              <Text style={WalletStyle.cardAmountText}>
                {' '}
                {availableBalance}
              </Text>
            </View>
            <Text style={WalletStyle.cardText}>Available Balance</Text>
          </NeoButton>
        </View>

        <View style={WalletStyle.CardView}>
          <NeoButton
            height={hp(12)}
            width={wp(42)}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp(5)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Foundation
                name={'dollar'}
                size={wp('6.5')}
                color={AppColor.railFillColor}
              />
              <Text style={WalletStyle.cardAmountText}> 48</Text>
            </View>

            <Text style={WalletStyle.cardText}>Requested Income</Text>
          </NeoButton>

          <NeoButton
            height={hp(12)}
            width={wp(42)}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp(5)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Foundation
                name={'dollar'}
                size={wp('6.5')}
                color={AppColor.railFillColor}
              />
              <Text style={WalletStyle.cardAmountText}>
                {' '}
                {completedWithdrawl}
              </Text>
            </View>
            <Text style={WalletStyle.cardText}>Compeleted Withdrawl</Text>
          </NeoButton>
        </View>

        <Neomorph style={WalletStyle.TextInputNeo}>
          <Foundation
            name="dollar"
            color={AppColor.primary}
            size={wp('9')}
            style={WalletStyle.dollarIconStyle}
          />
          <TextInput
            value={amountInput}
            style={WalletStyle.TextinputStyle}
            keyboardType={'decimal-pad'}
            placeholder={labelShow}
            placeholderTextColor={amountAlert}
            onChangeText={value => {
              setAmountInput(value);
            }}
            returnKeyType={'go'}
            onSubmitEditing={amountHandler}
          />

          <TouchableOpacity
            onPress={amountHandler}>
            <NeoButton
              width={wp('12')}
              height={wp('12')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('3')}>
              <Feather
                name="send"
                color={AppColor.whiteOpacity}
                size={wp('8')}
              />
            </NeoButton>
          </TouchableOpacity>
        </Neomorph>

        <Text
          style={{
            width: wp('90'),
            alignSelf: 'center',
            fontFamily: 'Poppins-Medium',
            fontSize: wp('5'),
            color: AppColor.blackOpacity3,
          }}>
          All Withdrawl Requests:
        </Text>

        <Neomorph style={WalletStyle.withdrawlMainNeo}>
          <View
            style={{
              width: wp('85'),
              height: hp('17'),
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={WalletStyle.amountNeo}>
              <NeoButton
                height={hp('13')}
                width={wp('25')}
                backgroundColor={AppColor.whiteShade}
                borderRadius={wp(5)}>
                <Text style={WalletStyle.amountText}>$48</Text>
                <Text style={[WalletStyle.cardText, {marginTop: wp('3')}]}>
                  Amount
                </Text>
              </NeoButton>
            </TouchableOpacity>

            <TouchableOpacity style={WalletStyle.amountNeo1}>
              <NeoButton
                height={hp('13')}
                width={wp('30')}
                backgroundColor={AppColor.whiteShade}
                borderRadius={wp(5)}>
                <Text style={WalletStyle.amountText}>2023-01-12</Text>
                <Text style={[WalletStyle.cardText, {marginTop: wp('3')}]}>
                  Withdraw Date
                </Text>
              </NeoButton>
            </TouchableOpacity>

            <TouchableOpacity style={WalletStyle.amountNeo}>
              <NeoButton
                height={hp('13')}
                width={wp('25')}
                backgroundColor={AppColor.whiteShade}
                borderRadius={wp(5)}>
                <Text style={WalletStyle.amountText}>Requested</Text>
                <Text style={[WalletStyle.cardText, {marginTop: wp('3')}]}>
                  {' '}
                  Status
                </Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </Neomorph>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
