import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './router/router.js';

const domNode = document.getElementById('react-root');

createRoot(domNode).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)