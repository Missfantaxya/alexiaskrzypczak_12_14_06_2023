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
  console.log( "activities : ", activities )
  console.log( "activity : ", activity )
  const dayLabels = {
      '2020-07-01': '1',
      '2020-07-02': '2',
      '2020-07-03': '3',
      '2020-07-04': '4',
      '2020-07-05': '5',
      '2020-07-06': '6',
      '2020-07-07': '7'
    }
    // FIXME gérer les labels :
    // const labels = activity.map( ( element, index ) => ( { [ element.day ]:
    // index + 1 } ) ) 
    // console.log( "labels : ", labels ) //~ 
    //TODO convertir [labels] en {labels}
  
    
  

  //sessions graph------------------------
  const sessions = data.sessions
  
  // performances Graph--------------------
  const performances = data.performances.performanceValues
  const kind = data.performances.kindValues
   // TODO reconstruire le [] de data (dans le formatage) pour avoir le bon sens des étiquettes deu graphe de performance.

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

