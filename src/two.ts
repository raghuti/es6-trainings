interface IHero{
    title:string;
    city:string;
}
interface IMovieHero{
    movies:string[]
}

class Hero implements IHero, IMovieHero{

    title:string;
    city:string;
    movies:string[];
    constructor(private fname:string, public lname:string, title:string, city:string){
        this.title = title;
        this.city = city;
        this.movies = [];
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
    addMovie(newmovie:string){
        this.movies.push(newmovie);
    }
};
var hero = new Hero("Peter","Parker","Spiderman","New York");
    hero.addMovie("Spiderman part1");
    hero.addMovie("Spiderman part2");
    hero.addMovie("Spiderman part3");

window.onload = ()=>{
    document.body.innerHTML += hero.fullname();
    document.body.innerHTML += hero.movies;
}