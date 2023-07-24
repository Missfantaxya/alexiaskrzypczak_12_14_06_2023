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
    labelsActivity,
    sessions,
    labelsSession,
    performances,
    labelsKind,
    userScore,
    progressInPercentage,
    progressBar
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
        labelsActivity={ labelsActivity }
        sessions={ sessions }
        labelsSession={ labelsSession }
        performances={ performances }
        labelsKind={labelsKind}
        userScore={ userScore }
        progressInPercentage={ progressInPercentage }
        progressBar={ progressBar }
        
      />
    </>
    )
}
