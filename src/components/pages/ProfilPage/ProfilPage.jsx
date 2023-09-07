import "./ProfilPage.css"
import ProfilTemplate from "../../templates/ProfilTemplate/ProfilTemplate"

export default function ProfilPage ( {
  firstname,
  nutrition,
  activities,
  sessions,
  performances,
  labelsKind,
  userScore,
  progressInPercentage
} )
{ 
  return (
    <>
      <ProfilTemplate
        firstname={ firstname }
        nutrition={nutrition}
        activity={ activities }
        sessions={ sessions }
        performances={ performances }
        labelsKind={labelsKind}
        userScore={ userScore }
        progressInPercentage={ progressInPercentage }
      />
    </>
    )
}
