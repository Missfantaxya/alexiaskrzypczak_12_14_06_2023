// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default async function formatData()
{
  const data = await fetchData()
  const user = data.users
  

  // identity--------------------------------
  const firstname = user.firstname

  // nutirtion cards------------------------
  const count = user.counterValues
  const calories = count.calorieCount
  const proteins = count.proteinCount
   const carbs =count.carbohydrateCount
  const fats = count.lipidCount

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
  const score = user.scoreValues


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

