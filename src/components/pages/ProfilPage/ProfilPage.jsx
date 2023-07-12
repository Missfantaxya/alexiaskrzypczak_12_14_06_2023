import "./ProfilPage.css"
import ProfilTemplate from "../../templates/ProfilTemplate/ProfilTemplate"

export default function ProfilPage ( props )
{
  // Data pour les étiquettes de nutrition------------
  const firstname = "Thomas"
  const calories = "850"
  const proteins = "40"
  const carbs = "60"
  const fats = "50"

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

  // Data pour le graph Score ----------------------------
  const dataScore = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
      }
    }
  ]

  // Data pour le graphDailyActivity --------------
  const dataActivity = [
    {
      "day": '2020-07-01',
      "kilogram": 80,
      "calories": 240
    },
    {
      "day": '2020-07-02',
      "kilogram": 80,
      "calories": 220
    },
    {
      "day": '2020-07-03',
      "kilogram": 81,
      "calories": 280
    },
    {
      "day": '2020-07-04',
      "kilogram": 81,
      "calories": 290
    },
    {
      "day": '2020-07-05',
      "kilogram": 80,
      "calories": 160
    },
    {
      "day": '2020-07-06',
      "kilogram": 78,
      "calories": 162
    },
    {
      "day": '2020-07-07',
      "kilogram": 76,
      "calories": 390
    }
  ]

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
        firstname = { firstname}
        calories = { calories }
        proteins = { proteins }
        carbs = { carbs }
        fats={ fats }
        activity={ dataActivity }
        score={ dataScore }
        performances={ dataPerformances }
        kind={ kind }
        sessions={ dataSessions }
      />
    </>
    )
}
