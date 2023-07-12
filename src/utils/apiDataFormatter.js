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
  } )

}

// async function formatData() {
//   const data = await fetchData()
//   if (data) {
//     // Effectuez le formatage des données selon vos besoins

//     // Retournez les données formatées si nécessaire

//   }
//   // Gérez le cas où les données n'ont pas pu être récupérées
//   return null
// }

// export default formatData;

