import "./NavVertical.css"
import NavButtons from "../../molecules/NavButtons/NavButtons"
import Copyright from "../../atoms/Copyright/Copyright"

export default function NavVertical ( props )
{
  // Get today's date
  const date = new Date()

  // Get the year of the current date
  const year = date.getFullYear()

  return(
    <div className="navVertical">
      <NavButtons />
      <Copyright year={year}/>
    </div>
  )
}
