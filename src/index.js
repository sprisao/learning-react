import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
import { books } from "./books";
import SpecialBook from "./Book";
import { greeting } from "./testing/testing";

// Setup vars

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecialBook key={book.id} {...book}></SpecialBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
