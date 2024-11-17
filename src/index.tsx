import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 메인 App 컴포넌트

// React 18에서 createRoot 사용
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// StrictMode 활성화
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);