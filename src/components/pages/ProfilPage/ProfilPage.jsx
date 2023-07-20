import "./ProfilPage.css"
import ProfilTemplate from "../../templates/ProfilTemplate/ProfilTemplate"

export default function ProfilPage (
  {
    firstname,
    calories,
    proteins,
    carbs,
    fats,
    activities,
    sessions,
    performances,
    kind,
    score
  }
)
{ 
  
  return (
    <>
      <ProfilTemplate
        firstname = { firstname}
        calories = { calories }
        proteins = { proteins }
        carbs = { carbs }
        fats={ fats }
        activity={ activities }
        score={ score }
        performances={ performances }
        kind={ kind }
        sessions={ sessions }
      />
    </>
    )
}
