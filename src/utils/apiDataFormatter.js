// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default async function formatData()
{
  const data = await fetchData()
  const ThisUser = data.users
  const hasTodayScore = ThisUser.hasOwnProperty( "todayScore" ) 
  const scoreValue = hasTodayScore ? ThisUser.todayScore : ThisUser.score 
  const user = {
    id: ThisUser.id,
    keyData: ThisUser.keyData,
    scoreValue: scoreValue,
    userInfos:ThisUser.userInfos
  }

  // identity--------------------------------
  const firstname = ThisUser.userInfos.firstName

  // nutirtion cards------------------------
  const count = ThisUser.keyData
  const calories = count.calorieCount
  const proteins = count.proteinCount
  const carbs = count.carbohydrateCount
  const fats = count.lipidCount

  // activity graph-----------------
  const activity = data.activities.sessions
 
  activity.map( ( element ) =>
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

  //sessions graph------------------------
  const sessions = data.sessions.sessions
  sessions.map( element =>
  {
    activity.forEach( el =>
    {
      el.dayDate === element.day && ( element.dayWeek = el.dayWeek ) 
    } )
  } )

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
    performances,
    labelsKind,
    progressInPercentage,
    progressBar
  } )
}

