import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')!;

createRoot(container).render(<div children='test 123' />);
