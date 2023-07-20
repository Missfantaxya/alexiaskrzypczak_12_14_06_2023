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
  // Data pour le graph Performance ----------------------
   // TODO reconstruire le [] de data (dans le formatage) pour avoir le bon sens des étiquettes.
  // TODO retirer la data des composants. 

  return (
    <>
      <ProfilTemplate
        // users = {users}
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
