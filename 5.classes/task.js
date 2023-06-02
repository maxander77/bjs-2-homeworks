class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  get state(){
    return this._state;
  }

  set state(newState){
    if (newState < 0){
      this._state = 0;
    } else if (newState >= 100){
      this._state = 100;
    } else{
      this._state = newState;
    }
  }



  fix() {
    this.state += 0.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state = 100, type = "magazine"){
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state = 100, type = "book"){
    super(name, releaseDate, pagesCount, state, type);
  }
}

class NovelBook extends Book {
  constructor (name, releaseDate, pagesCount, state = 100, type = "novel", author){
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount, state = 100, type = "fantastic", author){
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount, state = 100, type = "detective", author){
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}


class Library{
  constructor(name){
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if (book.state > 30){
      this.books.push(book);
    }
  }

  findBookBy(type, value){
    for (const book of this.books){
      if (book[type] === value){
        return book;
      }
    }

    return null;
  }

  giveBookByName(bookName){
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].name === bookName){
        const foundBook = this.book[i];
        this.books.splice(i, 1);
        return foundBook;
      }
    }

    return null;
  }
}


const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
