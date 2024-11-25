'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Assigment 1
const [firstBook, secondBook] = books;

// Assigment 2
const [, , thirdBook] = books;

// Assigment 3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// Assigment 4
const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Assigment 5
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// Assigment 6
const { keywords: tags } = books[0];
console.log(tags);

// Assigment 7
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(programmingLanguage);

// Assigment 8
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
// bookTitle = title;
// bookAuthor = author;
console.log(bookTitle, bookAuthor);

// Assigment 9
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(rating);

// Assigment 10
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo(books[0]);
printBookInfo(books[6]);

// Assigment 11
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// Assigment 12
function spellWord(str) {
  console.log(...str);
}
spellWord('JavaScript');

// Assigment 13
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// Assigment 14
const { publisher: bookPublisher = '', ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

// Assigment 15
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors.`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short Circuitiing
// Assigment 16

function hasExamplesInJava(obj) {
  return obj.programmingLanguage === 'Java' || 'no data available';
}
console.log(hasExamplesInJava(books[1]));

// Assigment 17
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

// The Nullish Coalescing Operator (??)
// Assigment 18
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}

// Logical Assignments Operators
// Assigment 19
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
console.log(books);

// Assigment 20
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
console.log(books);

// The for-of loop
// Assigment 21

let pageSum = 0;
for (let obj of books) {
  pageSum += obj.pages;
}
console.log(pageSum);

// Assigment 22
const allAuthors = [];
for (let obj of books) {
  if (typeof obj.author === 'string') {
    allAuthors.push(obj.author);
  } else {
    allAuthors.push(...obj.author);
  }
}
console.log(allAuthors);

// Assigment 23
for (let [i, obj] of books.entries()) {
  console.log(`${i + 1}. ${obj.author}`);
}

// Enhanced Object Literals
// Assigment 24
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// Assigment 25
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log('-------------------BREAK-------------------');
// Optional Chaining (?.)
// Assigment 26
function getFirstKeyword(obj) {
  return obj?.keywords?.[0] ?? 'undefined ';
}

console.log(getFirstKeyword(books[3]));

console.log('-------------------BREAK-------------------');
// Looping Objects: Object Keys, Values and Entries
// Assigment 27
const entries = [];

console.log(books[0].thirdParty.goodreads);
for (let objName of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([objName]);
}
console.log(entries);

// Assigment 28
for (let [i, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[i].push(value);
}

// Assigment 29
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// Assigment 30
console.log(entries);
console.log(entries2);

console.log('-------------------BREAK-------------------');
// Sets
// Assigment 31
const allKeywords = [];
for (let obj of books) {
  allKeywords.push(...obj.keywords);
}
console.log(allKeywords);

// Assigment 32
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// Assigment 33
uniqueKeywords.add('coding');
uniqueKeywords.add('science bitch');
console.log(uniqueKeywords);

// Assigment 34
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

// Assgiment 35
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// Assigment 36
uniqueKeywords.clear();
console.log(uniqueKeywords);

console.log('-------------------BREAK-------------------');
// Maps
// Assigment 37
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

// Assigment 38
bookMap.set('pages', 464);

// Assigment 39
console.log(`"${bookMap.get('title')} by ${bookMap.get('author')}"`);

// Assigment 40
console.log(bookMap.size);

// Assigment 41
bookMap.has('author') && console.log('The author of the book is known');

console.log('-------------------BREAK-------------------');
// Maps: iteration
// Assigment 42
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// Assigment 43
for (const [key, value] of firstBookMap)
  typeof value === 'number' &&
    console.log(`${key} with value ${value} as number`);
console.log('-------------------BREAK-------------------');
