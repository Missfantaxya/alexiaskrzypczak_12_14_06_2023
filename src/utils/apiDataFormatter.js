// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default async function formatData()
{
  const data = await fetchData()
  const user = data.users

  // identity--------------------------------
  const firstname = user.userInfos.firstName

  // nutirtion cards------------------------
  const count = user.keyData
  const calories = count.calorieCount
  const proteins = count.proteinCount
  const carbs = count.carbohydrateCount
  const fats = count.lipidCount

  // activity graph-----------------
  const activity = data.activities.sessions
 
  activity.map( ( element ) =>
  //permet d'avoir les labels numérique à la dte du jour du mois sur les abcisses
  {
    const daysOfWeek = [
    "D",
    "L",
    "M",
    "M",
    "J",
    "V",
    "S"
    ]
    let date = new Date( element.day )
    let dayDate = date.getDate()
    let dayOfWeek = date.getDay()
    element.dayDate = dayDate
    element.dayWeek = daysOfWeek[ dayOfWeek ]
  }
  )

  console.log( "activity : ", activity )

  //sessions graph------------------------
  const sessions = data.sessions.sessions
  const formatedDay = []

  // activity.forEach( element =>
  // {
  //   const daysOfWeek = [
  //   "D",
  //   "L",
  //   "M",
  //   "M",
  //   "J",
  //   "V",
  //   "S"
  //   ]
  //   //conversion en date
  //   let date = new Date( element.day )
  //   // récupération du jour du mois
  //   let dayDate = date.getDate()
  //    // récupération du jour de la semaine
  //   let dayOfWeek = date.getDay()
  //   // console.log("dayOfWeek : ",dayOfWeek)
  //   formatedDay.push( { dayDate: dayDate, dayOfWeek: daysOfWeek[ dayOfWeek ] } )
  // } )
  // console.log("formatedDay : ",formatedDay)

  // const arrayLabelsSession = []
  // sessions.forEach( session =>
  // {
  //   let sessionDay = session.day
  //   formatedDay.forEach( day => 
  //   {
  //     let isSameDay = day.dayDate === sessionDay
  //     isSameDay && arrayLabelsSession.push( [sessionDay ,day.dayOfWeek ])
  //   } )
  // } )
  // const labelsSession = Object.fromEntries( arrayLabelsSession )
  
  // performances Graph--------------------
  const performances = data.performances.data
  const kind = data.performances.kind

  function reverseKindOrder(kind) {
    const kindOrderChanged = {}
    const keys = Object.keys(kind)
    for (let i = keys.length - 1; i >= 0; i--) {
      kindOrderChanged[ keys.length - i ] = kind[ keys[ i ] ]
    }
    return kindOrderChanged
  }
  
  const kindOrderChanged = reverseKindOrder( kind )

  const labelsKind = {}

  function translateToFrench(label) {
    const translations = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité'
    }
    return translations[label] || label;
  }

  for (let key in kindOrderChanged) {
    const translatedLabel = translateToFrench(kindOrderChanged[key])
    labelsKind[key] = translatedLabel
  }

  // score graph---------------------------
  const hasTodayScore = user.hasOwnProperty( "todayScore" ) 
  const scoreValue = hasTodayScore ? user.todayScore : user.score
  const userScore = [ user ]
  const progressInPercentage = scoreValue * 100
  const progressBar = 180 - ( scoreValue * 180 )

  return ( {
    userScore,
    firstname,
    calories,
    proteins,
    carbs,
    fats,
    activity,
    sessions,
    // labelsSession,
    performances,
    labelsKind,
    progressInPercentage,
    progressBar
  } )

}

