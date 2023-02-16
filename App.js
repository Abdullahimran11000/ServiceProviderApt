import React from 'react';

import AppIntro from './src/screnns/AppIntro';
import LogIn from './src/screnns/LogIn';
import SignUp from './src/screnns/SignUp';
import RecoverPassword from './src/screnns/RecoverPassword';
import ForgotPassword from './src/screnns/ForgotPassword';
import Verification from './src/screnns/Verification';
import Congratulation from './src/screnns/Congratulation';
import Drawer from './src/screnns/Drawer';
import Dashboard from './src/screnns/Dashboard';
import MyProfile from './src/screnns/MyProfile';
import MyAppointment from './src/screnns/MyAppointment';
import Message from './src/screnns/Message';
import VideoCalling from './src/screnns/VideoCalling';
import Chat from './src/screnns/Chat';
import NewSchedule from './src/screnns/NewSchedule';
import Wallet from './src/screnns/Wallet';
import Certificates from './src/screnns/Certificates';
import AppointmentsCards from './src/screnns/AppointmentsCards';
import Notifications from './src/screnns/Notifications';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppProvider} from './src/assets/context/AppContext';

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
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Congratulation" component={Congratulation} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="Dashboard" component={Dashboard}/>
          <Stack.Screen name="Certificates" component={Certificates}></Stack.Screen>
          <Stack.Screen name="Wallet" component={Wallet}></Stack.Screen>
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="MyAppointment" component={MyAppointment} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="VideoCalling" component={VideoCalling} />
          <Stack.Screen name="AppointmentsCards" component={AppointmentsCards}/>
          <Stack.Screen name="NewSchedule" component={NewSchedule}/>
          <Stack.Screen name="Notifications" component={Notifications}/>
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
