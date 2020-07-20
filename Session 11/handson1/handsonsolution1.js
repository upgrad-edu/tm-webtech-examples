// movies object
const movie = {
    /**
     * DONE: Setter method to set the title and director of the movie
     */
    set: function(title, director) {
        this.title = title;
        this.director = director;
    },
    /**
     * Getter method to print the title and director of the movie
     */
    get: function () {
        /* DONE: Wrote an arrow function so that the output from this function is:
        Title = Inception, Director = Christopher Nolan
        */
        var print = () => {
            console.log("Title = " + this.title + ", Director = " + this.director);
        }
        print();
    }
}

let title = "Inception", director = "Christopher Nolan";
movie.set(title, director); // setting the keys title and director of the movie object as the ones defined in the above line
movie.get();
