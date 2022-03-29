import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

let greeting = 'Hello';

let info = {
  name: 'Ahmed',
  age: 29,
  job: 'engineer',
};

function App() {
  return (
    <div>
      <Message name={info.name} age={info.age} job={info.job}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perspiciatis.
      </Message>
    </div>
  );
}

function Message({ name, age, job, children }) {
  // const { name, age, job } = props;
  return (
    <div>
      <h1>{greeting} there</h1>
      <p>{children}</p>
      <p>my name is {name}</p>
      <p>my name is {age}</p>
      <p>my name is {job}</p>
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(<App />);
