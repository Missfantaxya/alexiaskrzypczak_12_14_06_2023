import "./ResultsNutrition.css"
import Card from "../../atoms/Card/Card"


export default function ResultsNutrition ({ nutrition })
{

  return (
    <ul className="nutrition__list">
      { nutrition.map( ( item ) => (
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

