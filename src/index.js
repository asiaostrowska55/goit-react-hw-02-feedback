import React from 'react';
import ReactDOM from 'react-dom/client';
import { Feedback } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Feedback />
    <Statistics />
  </React.StrictMode>
);
