import React from 'react';

import AppIntro from './src/screnns/Splash/AppIntro';
import LogIn from './src/screnns/Login/LogIn';
import SignUp from './src/screnns/SignUp/SignUp';
import PasswordManagement from './src/screnns/Drawer/PasswordManagement';
import RecoverPassword from './src/screnns/ForgotPassword/RecoverPassword';
import ForgotPassword from './src/screnns/ForgotPassword/ForgotPassword';
import Verification from './src/screnns/ForgotPassword/Verification';
import Congratulation from './src/screnns/ForgotPassword/Congratulation';
import Drawer from './src/screnns/Drawer/Drawer';
import Dashboard from './src/screnns/Drawer/Dashboard';
import MyProfile from './src/screnns/Drawer/MyProfile';
import VideoCalling from './src/screnns/Drawer/AppointmetCard/PatientAppointment/VideoCalling';
import Chat from './src/screnns/Drawer/AppointmetCard/PatientAppointment/Chat';
import NewSchedule from './src/screnns/Drawer/AppointmetCard/NewSchedule';
import Wallet from './src/screnns/Drawer/Wallet';
import Certificates from './src/screnns/Drawer/Certificates';
import AppointmentsCards from './src/screnns/Drawer/AppointmetCard/AppointmentsCards';
import Notifications from './src/screnns/Drawer/Notifications';
import PatientProfile from './src/screnns/Drawer/AppointmetCard/PatientAppointment/PatientProfile';
import TryAnotherWay from './src/screnns/ForgotPassword/TryAnotherWay';
import CancelledApp from './src/screnns/Drawer/AppointmetCard/PatientAppointment/CancelledApp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppProvider} from './src/assets/context/AppContext';
import UpcomingApp from './src/screnns/Drawer/AppointmetCard/PatientAppointment/UpcomingApp';
import CompletedApp from './src/screnns/Drawer/AppointmetCard/PatientAppointment/CompletedApp';
import TotalAppSlots from './src/screnns/Drawer/AppointmetCard/TotalAppSlots';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppIntro" component={AppIntro} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen name="Congratulation" component={Congratulation} />
          <Stack.Screen name="PasswordManagement" component={PasswordManagement} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="Dashboard" component={Dashboard}/>
          <Stack.Screen name="Certificates" component={Certificates}/>
          <Stack.Screen name="Wallet" component={Wallet}/>
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="VideoCalling" component={VideoCalling} />
          <Stack.Screen name="AppointmentsCards" component={AppointmentsCards}/>
          <Stack.Screen name="NewSchedule" component={NewSchedule}/>
          <Stack.Screen name="Notifications" component={Notifications}/>
          <Stack.Screen name="PatientProfile" component={PatientProfile} />
          <Stack.Screen name="TryAnotherWay" component={TryAnotherWay} />
          <Stack.Screen name="TotalAppSlots" component={TotalAppSlots} />
          <Stack.Screen name="CancelledApp" component={CancelledApp} />
          <Stack.Screen name="UpcomingApp" component={UpcomingApp} />
          <Stack.Screen name="CompletedApp" component={CompletedApp} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
