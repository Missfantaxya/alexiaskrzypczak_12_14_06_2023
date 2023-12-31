import "./ProfilTemplate.css"
import Header from "../../organisms/Header/Header"
import NavVertical from "../../organisms/NavVertical/NavVertical"
import Dashboard from "../../organisms/Dashboard/Dashboard"

export default function ProfileTemplate ( props )
{
  return (
    <div className="profilTemplate" >
      <Header />
      <main className="main" >
        <NavVertical />
        <Dashboard
          firstname={ props.firstname }
          nutrition={ props.nutrition}
          activity={ props.activity }
          sessions={ props.sessions }
          performances={ props.performances }
          labelsKind={ props.labelsKind }
          userScore={ props.userScore }
          progressInPercentage={ props.progressInPercentage }
        />
      </main>
    </div>
  )
}
