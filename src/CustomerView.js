import React, { useState } from 'react';
import { createSession } from './api';

const CustomerView = () => {
  const [sessionName, setSessionName] = useState('');
  const [sessionCode, setSessionCode] = useState('');
  const [sessionId, setSessionId] = useState('');

  const handleCreateSession = async () => {
    try {
      const sessionData = {
        sessionType: 1, // Replace with the appropriate session type
        name: sessionName,
        isPublic: true,
        code: sessionCode,
        customPropertyValues: [],
      };

      const createdSession = await createSession(sessionData);
      setSessionId(createdSession.sessionId);
    } catch (error) {
      console.error('Error creating session:', error);
    }
  };

  return (
    <div>
      <h2>Customer View</h2>
      <div>
        <label>Session Name:</label>
        <input type="text" value={sessionName} onChange={(e) => setSessionName(e.target.value)} />
      </div>
      <div>
        <label>Session Code:</label>
        <input type="text" value={sessionCode} onChange={(e) => setSessionCode(e.target.value)} />
      </div>
      <button onClick={handleCreateSession}>Create Session</button>
      {sessionId && <p>Session ID: {sessionId}</p>}
    </div>
  );
};

export default CustomerView;