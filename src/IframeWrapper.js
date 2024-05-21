// IframeWrapper.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const IframeWrapper = ({ children }) => {
  return (
    <iframe
      style={{
        width: '100%',
        height: '500px',
        border: 'none',
      }}
      title="iframe"
    >
      <div dangerouslySetInnerHTML={{ __html: ReactDOMServer.renderToString(children) }} />
    </iframe>
  );
};

export default IframeWrapper;
