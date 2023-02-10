class Book{
  constructor(title,author,ISBN,NumberofCopies,){
    this.Title=Title;
    this.Author=Author;
    this.ISBN=ISBN;
    this.NumberofCopies=NumberofCopies;
  }
    get getavailability() {
      this.NumberofCopies===0
        ? console.log("out of stock")
        : this.NumberofCopies < 10
        ? console.log("low stock")
        :console.log("in stock");

    }
    sell(NumberSold =1) {
      return NumberSold - this.NumberofCopies;
    }
    restock(NumberSold =5) {
      return NumberSold + this.NumberofCopies;
    }

  }