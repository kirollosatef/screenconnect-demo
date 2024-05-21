import React from 'react';
import CustomerView from './CustomerView';
import TechnicianView from './TechnicianView';
import IframeWrapper from './IframeWrapper';

const App = () => {
  return (
    <div>
      <h1>Customer View</h1>
      <IframeWrapper>
        <CustomerView />
      </IframeWrapper>
      
      <h1>Technician View</h1>
      <IframeWrapper>
        <TechnicianView />
      </IframeWrapper>
    </div>
  );
};

export default App;
