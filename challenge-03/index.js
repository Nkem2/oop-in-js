const dishes =[
  {
    name:"eggplant paremesan",
    vegetarian:"true"
  }
  {
    name:"spagetti & meatballs",
    vegetarian:"true"
  }
]

function vegetarian(){
  const dish = dishes.filter((dishes=> dishes.vegetarian))
  return <li>$</li>
}
