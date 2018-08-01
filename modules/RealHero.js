class RealHero extends Hero{
    constructor(fn,ln,city, movies){
        super(fn,ln,city);
        this.movies = movies;
    }
    movieslist(){
        return this.movies;
    }
};