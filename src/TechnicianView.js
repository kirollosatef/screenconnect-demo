import React, { useState } from 'react';
import { getSessionBySessionId } from './api';

const TechnicianView = () => {
  const [sessionId, setSessionId] = useState('');
  const [sessionData, setSessionData] = useState(null);

  const handleGetSession = async () => {
    try {
      const session = await getSessionBySessionId(sessionId);
      setSessionData(session);
    } catch (error) {
      console.error('Error getting session:', error);
    }
  };

  return (
    <div>
      <h2>Technician View</h2>
      <div>
        <label>Session ID:</label>
        <input type="text" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
      </div>
      <button onClick={handleGetSession}>Get Session</button>
      {sessionData && (
        <div>
          <h3>Session Details</h3>
          <pre>{JSON.stringify(sessionData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TechnicianView;