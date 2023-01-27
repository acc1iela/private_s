import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import lectures from './lectures';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(<App lectures={lectures} />);

reportWebVitals();
