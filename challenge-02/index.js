movie = classMovie{
  constructor(title,Director,Genre,ReleaseYear,Rating){
    this.title= title;
    this.Director= Director;
    this.Genre= Genre;
    this.ReleaseYear= ReleaseYear;
    this.Rating=Rating;
  }
}
function getOverview(){
  console.log(${movie},"a" ${Genre} "film directed by" )
}