import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

let greeting = 'Hello';

let info = [
  {
    name: 'Ahmed',
    age: 29,
    job: 'engineer',
  },
  {
    name: 'Ali',
    age: 27,
    job: 'pharmacist',
  },
  {
    name: 'Amr',
    age: 26,
    job: 'engineer',
  },
  {
    name: 'Ayman',
    age: 23,
    job: 'engineer',
  },
];

function App() {
  return (
    <div>
      <Message />
    </div>
  );
}

function Message() {
  return (
    <div>
      {info.map(info => {
        const { name, age, job } = info;
        return (
          <div>
            <h1>
              {greeting}, {name}
            </h1>
            <p>your name is {name}</p>
            <p>your name is {age}</p>
            <p>your name is {job}</p>
          </div>
        );
      })}
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(<App />);
