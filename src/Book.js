import React from 'react';

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img onClick={() => console.log(title)} src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        EXAMPLE
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
