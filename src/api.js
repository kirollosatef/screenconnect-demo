import axios from 'axios';

const API_BASE_URL = 'https://geeeeker.screenconnect.com';

export const createSession = async (sessionData) => {
  try {
    // Requests from the extension must include an additional HTTP Header named CTRLAuthHeader with a value that matches the string set in RESTfulAuthenticationSecret = keroatef2002
    // If a value was specified in the RESTfulAllowedOrigin setting, it must also match the request’s Origin header
    const response = await axios.post(
      `${API_BASE_URL}/App_Extensions/2d558935-686a-4bd0-9991-07539f5fe749/Service.ashx/session`,
      sessionData,
      {
        headers: {
          'Content-Type': 'application/json',
          'CTRLAuthHeader': 'keroatef2002',
          'Origin': 'http://localhost:3001',
        },
      }
    );
    return response.data;
  }
  catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
}

export const getSessionBySessionId = async (sessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/App_Extensions/2d558935-686a-4bd0-9991-07539f5fe749/Service.ashx/session-by-session-id?sessionID=${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting session:', error);
    throw error;
  }
};

// Add more API functions as needed