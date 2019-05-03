import Book from './model/book'

const book: Book = new Book('Dom Quixote', 108.80, 0.10)

console.log(book.discountPrice())