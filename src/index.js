import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Book from './Book';
import { info } from './info';

function App() {
  return (
    <div>
      {info.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(<App />);
