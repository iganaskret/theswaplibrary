let book = window.location.href.slice(window.location.href.indexOf("?") + 1);
console.log(book);

document.querySelector(".book-cover #book-cover-img").src =
  "books/" + book + ".jpg";

let author, title, genre, hashtags;

if (book == "the-unsplash-book") {
  author = "Dann Petty";
  title = "The Unsplash Book";
  genre = "Photobook";
  hashtags = "photo";
}
console.log(author);
document.querySelector(".book-data #book-title").textContent = title;
document.querySelector(".book-data #book-author span").textContent = author;
document.querySelector(".book-data #book-genre span").textContent = genre;
document.querySelector(".book-data #book-hashtags span").textContent = hashtags;
