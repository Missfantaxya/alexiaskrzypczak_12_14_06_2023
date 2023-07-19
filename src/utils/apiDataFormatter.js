// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default function formatData()
{
  const data = fetchData()
  const users = data.users
  console.log( "users : ", users )
  const user = users[0]
  // construction avec l'utilisateur 12 (id 0 dans les tableaux)

  // identity
  const firstname = user.userInfos.firstName

  // nutirtion cards
  const calories = user.keyData.calorieCount
  const proteins = user.keyData.proteinCount
   const carbs =user.keyData.carbohydrateCount
  const fats = user.keyData.lipidCount

  // activity graph
  const activities = data.activities
  const activity = activities[0]
  const dayActivities = activity.sessions 

  //sessions graph
  const sessions = data.sessions
  
  // performances Graph 
  const performances = data.performances
  // console.log( "performances : ", performances ) //*

  // score graph
  const hasTodayScore = user.hasOwnProperty( "todayScore" )
  const userScore = hasTodayScore ? "todayScore" : "score"
  // FIXME score = number|undefined
  const score = user.userScore //~
  console.log("score de apiDataFormatter : ",score) //*

  return ( {
    users,
    user,
    firstname,
    calories,
    proteins,
    carbs,
    fats,
    dayActivities,
    sessions,
    performances,
    score
  } )

}

