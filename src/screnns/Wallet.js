import React, {useState} from 'react';
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
import Foundation from 'react-native-vector-icons/Foundation';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/core';

const Wallet = () => {
  const navigation = useNavigation();
  const [amountInput, setAmountInput] = useState('');
  const [availableBalance, setAvailableBalance] = useState('409');
  const [completedWithdrawl , setCompletedWithdrawl] = useState('428')
  const [modalTypeOpen, setModalTypeOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const amountHandler = () => {
    if (Number(amountInput) > Number(availableBalance)) {
      setModalOpen(true);
      setModalTypeOpen(false);
      setAmountInput('');
    } else {
      setModalOpen(true);
      setModalTypeOpen(true);
      setAmountInput('');
      setAvailableBalance(Number(availableBalance) - Number(amountInput));
      setCompletedWithdrawl(Number(completedWithdrawl)+Number(amountInput))
    }
  };
  return (
    <SafeAreaView style={WalletStyle.mainView}>
      <ScrollView>
        <Modal
          isVisible={modalOpen}
          onBackdropPress={() => {
            setModalOpen(false);
          }}>
          <View
            style={{
              width: wp('80'),
              height: hp('70'),
              borderRadius: wp('15'),
              backgroundColor: AppColor.whiteShade,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            {modalTypeOpen ? (
              <Lottie
                source={require('../assets/animations/paymentDone.json')}
                style={{width: wp('60'), height: wp('60'), marginTop: wp('3')}}
                loop
                autoPlay
              />
            ) : (
              <Lottie
                source={require('../assets/animations/paymentError.json')}
                style={{width: wp('60'), height: wp('60'), marginTop: wp('3')}}
                loop
                autoPlay
              />
            )}
            {modalTypeOpen ? (
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: wp('4'),
                  textAlign: 'center',
                  color: AppColor.black,
                  width: wp('70'),
                  marginTop: wp('5'),
                }}>
                Your transaction is successfully placed.
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: wp('4'),
                  textAlign: 'center',
                  color: AppColor.black,
                  width: wp('70'),
                  marginTop: wp('5'),
                }}>
                Your balance is insufficient for this transaction.
              </Text>
            )}

            <TouchableOpacity
              style={{marginTop: wp('20')}}
              onPress={() => {
                setModalOpen(false);
              }}>
              <NeoButton
                width={wp('35')}
                height={hp('7')}
                backgroundColor={modalTypeOpen ? "#00B46E" : AppColor.primary}
                borderRadius={wp('7')}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: wp('4'),
                    color: AppColor.white,
                  }}>
                  Close
                </Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={WalletStyle.headCont}>
          <View style={WalletStyle.headContInnerCont}>
            <TouchableOpacity
              style={WalletStyle.headContMenuCont}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="menu" color={AppColor.black} size={wp('7')} />
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
              height={hp(12)}
              width={wp(42)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <View
                style={{
                  width: wp('20'),
                  height: hp('7'),
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Foundation
                  name={'dollar'}
                  size={wp('6.5')}
                  color={AppColor.railFillColor}
                  style={{marginRight: wp('1')}}
                />
                <Text style={WalletStyle.cardAmountText}>718</Text>
              </View>
              <Text style={WalletStyle.cardText}>Net Income</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={WalletStyle.SecondCard}>
            <NeoButton
              height={hp(12)}
              width={wp(42)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <View
                style={{
                  width: wp('20'),
                  height: hp('7'),
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Foundation
                  name={'dollar'}
                  size={wp('6.5')}
                  color={AppColor.railFillColor}
                  style={{marginRight: wp('1')}}
                />
                <Text style={WalletStyle.cardAmountText}>
                  {availableBalance}
                </Text>
              </View>
              <Text style={WalletStyle.cardText}>Available Balance</Text>
            </NeoButton>
          </TouchableOpacity>
        </View>

        <View style={[WalletStyle.CardView, , {marginTop: wp('1.5')}]}>
          <TouchableOpacity style={WalletStyle.OpacityStyle}>
            <NeoButton
              height={hp(12)}
              width={wp(42)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <View
                style={{
                  width: wp('20'),
                  height: hp('7'),
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Foundation
                  name={'dollar'}
                  size={wp('6.5')}
                  color={AppColor.railFillColor}
                  style={{marginRight: wp('1')}}
                />
                <Text style={WalletStyle.cardAmountText}>48</Text>
              </View>

              <Text style={WalletStyle.cardText}>Requested Income</Text>
            </NeoButton>
          </TouchableOpacity>

          <TouchableOpacity style={[WalletStyle.SecondCard]}>
            <NeoButton
              height={hp(12)}
              width={wp(42)}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp(5)}>
              <View
                style={{
                  width: wp('20'),
                  height: hp('7'),
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Foundation
                  name={'dollar'}
                  size={wp('6.5')}
                  color={AppColor.railFillColor}
                  style={{marginRight: wp('1')}}
                />
                <Text style={WalletStyle.cardAmountText}>{completedWithdrawl}</Text>
              </View>
              <Text style={WalletStyle.cardText}>Compeleted Withdrawl</Text>
            </NeoButton>
          </TouchableOpacity>
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
            placeholder={'Enter Amount'}
            onChangeText={value => {
              setAmountInput(value);
            }}
            returnKeyType={'go'}
            onSubmitEditing={amountHandler}
          />

          <TouchableOpacity style={WalletStyle.sendOpacity} onPress={amountHandler}>
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
            fontSize: wp(5),
            marginTop: wp('8'),
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
