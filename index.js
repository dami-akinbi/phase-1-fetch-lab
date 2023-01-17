function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });

  // 5th book
  const p = document.createElement("p");
  p.textContent = `The 5th book: ${books[4]["name"]}`;
  main.appendChild(p);

  // total number of pages
  const p2 = document.createElement("p");
  let total = 0;
  books.map((book) => (total += book["numberOfPages"]));
  p2.textContent = `The total number of pages of all the books: ${total}`;
  main.appendChild(p2);
}

document.addEventListener("DOMContentLoaded", () => fetchBooks());
