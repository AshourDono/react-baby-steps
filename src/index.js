import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

let info = [
  {
    id: 1,
    title: 'Vrienden voor het leven',
    author: 'Maeve Binchy',
    image: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/5/3/6/6/1001004011806635.jpg',
  },
  {
    id: 2,
    title: 'Deception point',
    author: 'Dan Brown',
    image: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg',
  },
  {
    id: 3,
    title: 'Magic staff',
    author: 'Terry Brooks',
    image: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg',
  },
  {
    id: 4,
    title: 'De wereld volgens Garp',
    author: 'John Irving',
    image: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/6/3/6/7/1001004005997636.jpg',
  },
];

function App() {
  return (
    <div>
      {info.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
}

function Book(props) {
  const { title, author, image } = props;

  const clickHandler = () => {
    console.log(title);
  };

  const mouseHandler = author => {
    console.log(author);
  };
  return (
    <div>
      <p style={{ textAlign: 'center', width: 300 }}>{title}</p>
      <p style={{ textAlign: 'center', width: 300 }} onMouseOver={()=>mouseHandler(author)}>
        {author}
      </p>
      <img width={300} src={image} onClick={clickHandler}></img>
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(<App />);
