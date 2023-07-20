// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default async function formatData()
{
  const data = await fetchData()
  console.log( "data du formatter : ", data ) //*
  const user = data.users
  console.log( "users de formatter : ", user ) //*
  

  // identity--------------------------------
  const firstname = "coucou"
  console.log( "firstname de formatter : ", firstname )

  // nutirtion cards------------------------
  console.log("counterValues du formatter : ", counterValues)
  const calories = user.keyData.calorieCount
  const proteins = user.keyData.proteinCount
   const carbs =user.keyData.carbohydrateCount
  const fats = user.keyData.lipidCount

  // activity graph-----------------
  const activities = data.activities
  const activity = activities
  // const dayActivities = activity.sessions  // mock

  //sessions graph------------------------
  const sessions = data.sessions
  
  // performances Graph--------------------
  const performances = data.performances.performanceValues
  const kind = data.performances.kindValues

  // score graph---------------------------
  const hasTodayScore = user.hasOwnProperty( "todayScore" )
  const userScore = hasTodayScore ? user.todayScore : user.score
  
  const score = userScore


  return ( {
    user,
    firstname,
    calories,
    proteins,
    carbs,
    fats,
    activity,
    sessions,
    performances,
    kind,
    score
  } )

}

