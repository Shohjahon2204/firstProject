/*jshint esversion: 6 */
/*let number = 5;
const leftBoderWidth = 1;
number = 10;
console.log(number);
const obj = {
a: 50
};
obj.a = 10;
console.log(obj);


var name = 'Ivan';

{
    var ss = 4;
}

console.log(ss);

const result = confirm("are you here?");


const answer = prompt("are you 18?", "");
console.log(typeof(answer));*/

/*const answers = [];
answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your surename?", "");
answers[2] = prompt("What is your address?", "");
answers[3] = prompt("What is your age?", "");

console.log(answers);*/

/*const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'shoh';
alert(`Privet ${user}`);*/

/* 12 lesson*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько oцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      e = prompt('На сколько oцените его?', '');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = e;
      console.log(personalMovieDB);