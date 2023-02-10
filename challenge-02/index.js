function Movie(title,Director,Genre,ReleaseYear,Rating) {
  
    this.title= title;
    this.Director= Director;
    this.Genre= Genre;
    this.ReleaseYear= ReleaseYear;
    this.Rating=Rating;
  }

Movie.prototype.getOverview = function () {
  console.log(
    `${this.title}, a ${this.Genre} film directed by ${this.Director}, was released in ${this.ReleaseYear}.Received rating of{this.rating}`
  );
};