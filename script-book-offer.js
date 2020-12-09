let book = window.location.href.slice(window.location.href.indexOf("?") + 1);
console.log(book);

document.querySelector(".book-cover #book-cover-img").src =
  "books/" + book + ".png";

let author, title, genre, hashtags, description;

if (book == "the-unsplash-book") {
  author = "Dann Petty";
  title = "The Unsplash Book";
  genre = "Photobook";
  hashtags = "photo";
  description =
    "Every single aspect of The Unsplash Book was chosen by its community from the photos to the paper style to the cover design.";
} else if (book == "1984") {
  author = "George Orwell";
  title = "1984";
  genre = "Science Fiction";
  hashtags = "dystopia, politics";
  description =
    "Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.";
} else if (book == "the-great-gatsby") {
  author = "F. Scott Fitzgerald";
  title = "The Great Gatsby";
  genre = "Novel";
  hashtags = "classic";
  description =
    "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. Many literary critics consider The Great Gatsby to be one of the greatest novels ever written.";
} else if (book == "invisible-man") {
  author = "Ralph Ellison";
  title = "Invisible Man";
  genre = "Novel";
  hashtags = "african-american";
  description =
    "Invisible Man is a novel by Ralph Ellison, published by Random House in 1952. It addresses many of the social and intellectual issues faced by the African Americans in the early twentieth century, including black nationalism.";
}

console.log(author);
document.querySelector(".book-data #book-title").textContent = title;
document.querySelector(".book-data #book-author span").textContent = author;
document.querySelector(".book-data #book-genre span").textContent = genre;
document.querySelector(".book-data #book-hashtags span").textContent = hashtags;
document.querySelector(
  ".book-data #book-description-p"
).textContent = description;
