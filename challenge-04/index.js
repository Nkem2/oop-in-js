Book = class book{
  constructor(Title,Author,ISBN,NumberofCopies,availability,CopiesSold){
    this.Title=Title;
    this.Author=Author;
    this.ISBN=ISBN;
    this.NumberofCopies
    this.availability=()=>{
      if(NumberofCopies===0)
      return "out of Stock"
    }
    if(NumberofCopies<10){
      return "low on stock"
    }

    this.CopiesSold=CopiesSold
    this.Restock=[5]
    this.edition=edition
  }
 }
 class TechnicalBook extends Book{
  constructor(edition){
  this.edition=edition
  }
}
function getEdition