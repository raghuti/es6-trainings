"use strict";
var Hero = (function () {
    function Hero(fname, lname, title, city) {
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.city = city;
        this.movies = [];
    }
    Hero.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    Hero.prototype.addMovie = function (newmovie) {
        this.movies.push(newmovie);
    };
    return Hero;
}());
;
var hero = new Hero("Peter", "Parker", "Spiderman", "New York");
hero.addMovie("Spiderman part1");
hero.addMovie("Spiderman part2");
hero.addMovie("Spiderman part3");
window.onload = function () {
    document.body.innerHTML += hero.fullname();
    document.body.innerHTML += hero.movies;
};
//# sourceMappingURL=two.js.map