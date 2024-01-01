import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
