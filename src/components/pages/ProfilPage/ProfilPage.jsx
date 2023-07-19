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
    score
  }
)
{
  // console.log( "firstname : ", firstname ) //*
  // console.log( "calories : ", calories ) //*
  // console.log( "proteins : ", proteins ) //*
  // console.log( "carbs : ", carbs ) //*
  // console.log( "fats : ", fats ) //*
  // console.log( "activities : ", activities ) //*
  // console.log("score de ProfilPage: ",score) //*
  
  
  // Data pour le graph Performance ----------------------
   // TODO reconstruire le [] de data (dans le formatage) pour avoir le bon sens des étiquettes.
  // TODO retirer la data des composants. 
  const dataPerformances = [
      {
          "value": 80,
          "kind": 1
      },
      {
          "value": 120,
          "kind": 2
      },
      {
          "value": 140,
          "kind": 3
      },
      {
          "value": 50,
          "kind": 4
      },
      {
          "value": 200,
          "kind": 5
      },
      {
          "value": 90,
          "kind": 6
      }
  ]

  const kind = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
  }
  // TODO construire un nouvel objet à partir de kind
  // TODO avec une propriété order = le  number de kind (voir code d'Yves)

  // Data du graphe SessionDuration ---------------------------
  const dataSessions= [
    {
      "day": 1,
      "sessionLength": 30
    },
    {
      "day": 2,
      "sessionLength": 23
    },
    {
      "day": 3,
      "sessionLength": 45
    },
    {
      "day": 4,
      "sessionLength": 50
    },
    {
      "day": 5,
      "sessionLength": 0
    },
    {
      "day": 6,
      "sessionLength": 0
    },
    {
      "day": 7,
      "sessionLength": 60
    }
  ]

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
        performances={ dataPerformances }
        kind={ kind }
        sessions={ dataSessions }
      />
    </>
    )
}
