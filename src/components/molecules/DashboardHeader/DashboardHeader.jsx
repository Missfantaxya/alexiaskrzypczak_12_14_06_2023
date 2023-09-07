import "./DashboardHeader.css"
import WelcomeTitle from "../../atoms/WelcomeTitle/WelcomeTitle"

export default function DashboardHeader ( { firstname } )
{
  return (
    <header className="dashboard__header">
      <WelcomeTitle firstname={ firstname } />
      <p>
        Félicitaion ! Vous avez exploseé vos objectifs hier 👏
      </p>
    </header>
  )
}
