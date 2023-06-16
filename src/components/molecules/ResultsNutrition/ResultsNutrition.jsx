import "./ResultsNutrition.css"
import Card from "../../atoms/Card/Card"

// quand retour d'internet :
// voir pour transmettre les data des qté dans le tableau cardArray par héritage.
const cardArray = [
    { id: 1, title: "Calories", unity: "kCal", src:"src/assets/calories-icon.svg", alt:"calorie-icon" },
    { id: 2, title: "Protéines", unity: "g", src:"src/assets/protein-icon.svg", alt:"protein-icon" },
    { id: 3, title: "Glucides", unity: "g", src:"src/assets/carbs-icon.svg", alt:"crabs-icon" },
    { id: 4, title: "Lipides", unity: "g", src:"src/assets/fat-icon.svg", alt:"fat-icon" }
  ]

  
export default function ResultsNutrition(props) {
  return (
    <ul className="nutrition__list">
      { cardArray.map( ( item ) => (
        <li className="card__item" key={item.id}>
          <Card src={item.src} alt={item.alt} nutriData={props.nutriData} unity={item.unity} title={item.title}/>
        </li>
        ) ) }
    </ul>
    )
}  

