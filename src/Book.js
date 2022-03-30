import React from 'react';

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
      <p style={{ textAlign: 'center', width: 300 }} onMouseOver={() => mouseHandler(author)}>
        {author}
      </p>
      <img width={300} src={image} onClick={clickHandler}></img>
    </div>
  );
}

export default Book;
