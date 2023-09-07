import "./NavButtons.css"
import ActivityButton from "../../atoms/ActivityButton/ActivityButton"

export default function NavButtons ( props )
{
  const buttons = [
    {
      id: 1,
      name: "zen",
      src: "src/assets/zen.svg"
    },
    {
      id: 2,
      name: "swimming",
      src: "src/assets/swimming.svg"
    },
    {
      id: 3,
      name: "bike",
      src: "src/assets/bike.svg"
    },
    {
      id: 4,
      name: "strengthTraining",
      src: "src/assets/strengthTraining.svg"
    }
  ]
  return (
      <ul className="navButtons">
        { buttons.map( ( item ) => (
            <li key={ item.id }>
              <ActivityButton
                src={ item.src }
                alt={ item.name }
              />
            </li>
          ) ) }
      </ul>
    )
}
