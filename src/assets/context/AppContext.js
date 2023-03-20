import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [openCam, setOpenCam] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  // Appointment Array
  const [upcomingAppointmentsInfo, setUpcomingAppointmentsInfo] = useState([
    {
      id: 1,
      name: 'Amanda Johnson',
      gender: 'Female',
      age: '23',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '24 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 3,
      name: 'Miranda Jones',
      gender: 'Female',
      age: '21',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
  ]);

  const [compeletdAppointmentsInfo, setCompeletdAppointmentsInfo] = useState([
    {
      id: 1,
      name: 'Amanda Johnson',
      gender: 'Female',
      age: '23',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Bisma Maroof',
      gender: 'Male',
      age: '32',
      date: '24 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 3,
      name: 'Miranda Jones',
      gender: 'Female',
      age: '21',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
  ]);

  const [cancelledAppointmentsInfo, setCancelledAppointmentsInfo] = useState([
    {
      id: 1,
      name: 'Amanda Johnson',
      gender: 'Female',
      age: '23',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Ellyse Perry',
      gender: 'Male',
      age: '32',
      date: '24 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
    {
      id: 3,
      name: 'Miranda Jones',
      gender: 'Female',
      age: '21',
      date: '22 March 2022',
      time: '10:30',
      appDestination: 'Hospital',
    },
  ]);

  //Available Time Slots
  const [timeSlots, setTimeSlots] = useState([
    {id: 1, day: '08', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 2, day: '07', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 3, day: '07', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 4, day: '07', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 5, day: '18', month: 'March', startTime: '8:00', endTime: '8:25'},
    {id: 6, day: '20', month: 'March', startTime: '8:25', endTime: '8:50'},
  ]);

  const storeUpcomingAppointmentsInfo = val => {
    setUpcomingAppointmentsInfo(val);
  };

  const storeCompletedAppointmentsInfo = val => {
    setCompeletdAppointmentsInfo(val);
  };

  const storeCancelledAppointmentsInfo = val => {
    setCancelledAppointmentsInfo(val);
  };

  const storeTimeSlots = val => {
    setTimeSlots(val);
  };
  const storeOpenCam = val => {
    setOpenCam(val);
  };

  const storeCallStatus = val => {
    setCallStatus(val);
  };

  return (
    <AppContext.Provider
      value={{
        //getter
        openCam,
        callStatus,
        upcomingAppointmentsInfo,
        compeletdAppointmentsInfo,
        cancelledAppointmentsInfo,
        timeSlots,
        //function
        storeOpenCam,
        storeCallStatus,
        storeUpcomingAppointmentsInfo,
        storeCompletedAppointmentsInfo,
        storeCancelledAppointmentsInfo,
        storeTimeSlots,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
