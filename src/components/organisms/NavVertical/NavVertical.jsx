import "./NavVertical.css"
import NavButtons from "../../molecules/NavButtons/NavButtons"
import Copyright from "../../atoms/Copyright/Copyright"

export default function NavVertical () 
{
  // la date du jour
  const date = new Date()

  // l'année de la date
  const year = date.getFullYear()

  return(
    <div className="navVertical" >
      <NavButtons />
      <Copyright year={year} />
    </div>
  )
}
