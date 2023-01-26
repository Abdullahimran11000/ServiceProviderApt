import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import NeoButton from '../NeoMorphButton/NeoButton';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { AppColor } from '../../assets/colors/AppColors';
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';
import {SearchDoctorStyle} from '../../assets/styles/DashboardStyle/SearchDoctorStyle';
import {SelectList} from 'react-native-dropdown-select-list';
import AppContext from '../../assets/context/AppContext';

const SearchBar = () => {
  const {yearsOfExperienceFromContext} = useContext(AppContext);
  const {consultationPriceFromContext} = useContext(AppContext);

  const gender = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'FeMale'},
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <View style={DashboardStyle.searchCont}>
      <View style={DashboardStyle.searchInnerCont}>
        <Neomorph
          inner
          lightShadowColor={AppColor.white}
          style={DashboardStyle.searchNeoView}>
          <View style={DashboardStyle.seacrhIconOneInnerCont}>
            <Feather
              name="search"
              size={wp('6')}
              color={AppColor.blackOpacity4}
            />
          </View>
          <View style={DashboardStyle.searchTextInputCont}>
            <TextInput
              placeholder="Search Doctor"
              maxLength={20}
              style={DashboardStyle.searchTextInput}
            />
          </View>
        </Neomorph>
        <View style={DashboardStyle.searchIconTwoCont}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Neomorph
              lightShadowColor={AppColor.white}
              style={DashboardStyle.filterButton}>
              <SimpleLineIcons
                name="equalizer"
                color={AppColor.black}
                size={wp('4')}
              />
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>

      <View style={DashboardStyle.searchIconTwoCont}>
        <Modal isVisible={modalVisible} style={SearchDoctorStyle.ModalStyle}>
          <ScrollView>
            <View style={SearchDoctorStyle.ModalViewStyle}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <FontAwesome
                  name="close"
                  size={wp('8')}
                  color={AppColor.primary}
                />
              </TouchableOpacity>
              <Text style={SearchDoctorStyle.ModalText}>Experience</Text>
              <SelectList
                fontFamily="Poppins-Medium"
                boxStyles={SearchDoctorStyle.SelectListBoxStyle}
                dropdownStyles={{
                  borderColor: AppColor.whiteShade,
                  width: wp('75'),
                  marginBottom: wp('2'),
                }}
                placeholder="Experience"
                setSelected={val => setSelected(val)}
                save="value"
                data={yearsOfExperienceFromContext}
              />
            </View>
            <View style={SearchDoctorStyle.DoneButtonView}>
              <NeoButton
                width={wp('60')}
                height={hp('7.7')}
                backgroundColor={'rgba(240, 122, 199,0.7)'}
                borderRadius={wp('5')}>
                <TouchableOpacity style={SearchDoctorStyle.DoneButtonStyle}>
                  <View style={SearchDoctorStyle.DoneButtonTextView}>
                    <Text style={SearchDoctorStyle.DoneButtonTextStyle}>
                      Done
                    </Text>
                  </View>
                </TouchableOpacity>
              </NeoButton>
            </View>
            <View style={{marginHorizontal: wp('5')}}>
              <Text style={SearchDoctorStyle.ModalText}>
                Consultation Price
              </Text>
            </View>
            <SelectList
              fontFamily="Poppins-Medium"
              boxStyles={[
                SearchDoctorStyle.SelectListBoxStyle,
                {marginLeft: wp('8')},
              ]}
              dropdownStyles={{
                borderColor: AppColor.whiteShade,
                width: wp('75'),
                marginLeft: wp('5'),
              }}
              placeholder="Price"
              setSelected={val => setSelected(val)}
              data={consultationPriceFromContext}
            />
            <View style={{marginHorizontal: wp('5')}}>
              <Text style={SearchDoctorStyle.ModalText}>Gender</Text>
            </View>
            <SelectList
              fontFamily="Poppins-Medium"
              boxStyles={[
                SearchDoctorStyle.SelectListBoxStyle,
                {marginLeft: wp('8')},
              ]}
              dropdownStyles={{
                borderColor: AppColor.whiteShade,
                width: wp('75'),
                marginLeft: wp('5'),
                marginBottom: wp('2'),
              }}
              placeholder="Gender"
              setSelected={val => setSelected(val)}
              data={gender}
            />
            <View style={SearchDoctorStyle.DoneButtonView}>
              <NeoButton
                width={wp('60')}
                height={hp('7.7')}
                backgroundColor={AppColor.primary}
                borderRadius={wp('5')}>
                <TouchableOpacity
                  style={SearchDoctorStyle.DoneButtonStyle}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <View style={SearchDoctorStyle.DoneButtonTextView}>
                    <Text style={SearchDoctorStyle.DoneButtonTextStyle}>
                      Apply
                    </Text>
                  </View>
                </TouchableOpacity>
              </NeoButton>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </View>
  );
};

export default SearchBar;
