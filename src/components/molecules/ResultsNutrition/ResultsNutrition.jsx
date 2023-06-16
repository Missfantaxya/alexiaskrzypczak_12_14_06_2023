import "./ResultsNutrition.css"
import Card from "../../atoms/Card/Card"


export default function ResultsNutrition ( props )
{
const cardArray = [
  {
    id: 1,
    title: "Calories",
    unity: "kCal",
    src: "src/assets/calories-icon.svg",
    alt: "calorie-icon",
    quantity: props.calories 
  },
  {
    id: 2,
    title: "Protéines",
    unity: "g",
    src: "src/assets/protein-icon.svg",
    alt: "protein-icon",
    quantity: props.proteins
  },
  {
    id: 3,
    title: "Glucides",
    unity: "g",
    src: "src/assets/carbs-icon.svg",
    alt: "crabs-icon",
    quantity: props.carbs
  },
  {
    id: 4,
    title: "Lipides",
    unity: "g",
    src: "src/assets/fat-icon.svg",
    alt: "fat-icon",
    quantity: props.fats
  }
]
  return (
    <ul className="nutrition__list">
      { cardArray.map( ( item ) => (
        <li className="card__item" key={item.id}>
          <Card
            src={ item.src }
            alt={ item.alt }
            quantity={ item.quantity }
            unity={ item.unity }
            title={ item.title }
          />
        </li>
        ) ) }
    </ul>
    )
}  

