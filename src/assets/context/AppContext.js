import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [openCam, setOpenCam] = useState(false);
  const [callStatus, setCallStatus] = useState('');

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
        //function
        storeOpenCam,
        storeCallStatus,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
