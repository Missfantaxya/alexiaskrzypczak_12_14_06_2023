import "./ProfilTemplate.css"
import Header from "../../organisms/Header/Header"
import NavVertical from "../../organisms/NavVertical/NavVertical"
import Dashboard from "../../organisms/Dashboard/Dashboard"

export default function ProfileTemplate ( props )
{
  // console.log("props de ProfilTemplate: ",props)//~
  return (
    <div className="profilTemplate">
      <Header />
      <main className="main">
        <NavVertical />
        <Dashboard
          firstname={ props.firstname }
          calories={ props.calories }
          proteins={ props.proteins }
          carbs={ props.carbs }
          fats={ props.fats }
          activity={ props.activity }
          score={ props.score }
          performances={ props.performances }
          kind={ props.kind }
          sessions={ props.sessions }
        />
      </main>
    </div>
    )
}
