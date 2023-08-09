// Fichier de formatage de données API
import fetchData from '../services/apiServices'

export default async function formatData()
{
  const data = await fetchData()
  const user = data.users
  // const user = {
  //   id: ThisUser.id,
  //   keyData: ThisUser.keyData,
  //   userInfos: ThisUser.userInfos
  // }

  // identity--------------------------------
  const firstname = user.userInfos.firstName

  // nutirtion cards------------------------
  const count = user.keyData
  const calories = count.calorieCount
  const proteins = count.proteinCount
  const carbs = count.carbohydrateCount
  const fats = count.lipidCount

  const nutritionData = [
  {
    id: 1,
    title: "Calories",
    unity: "kCal",
    src: "src/assets/calories-icon.svg",
    alt: "calorie-icon",
    quantity: calories
  },
  {
    id: 2,
    title: "Protéines",
    unity: "g",
    src: "src/assets/protein-icon.svg",
    alt: "protein-icon",
    quantity: proteins
  },
  {
    id: 3,
    title: "Glucides",
    unity: "g",
    src: "src/assets/carbs-icon.svg",
    alt: "crabs-icon",
    quantity: carbs
  },
  {
    id: 4,
    title: "Lipides",
    unity: "g",
    src: "src/assets/fat-icon.svg",
    alt: "fat-icon",
    quantity: fats
  }
]

  // activity graph-----------------
  const activity = data.activities.sessions
 
  activity.map( ( element ) =>
  {
    let date = new Date( element.day )
    let dayDate = date.getDate()
    element.dayDate = dayDate
  }
  )

  //sessions graph------------------------
  const sessions = data.sessions.sessions

  const dayLabels = [
    {dayNumber:1,dayOfWeek:"L"},
    {dayNumber:2,dayOfWeek:"M"},
    {dayNumber:3,dayOfWeek:"M"},
    {dayNumber:4,dayOfWeek:"J"},
    {dayNumber:5,dayOfWeek:"V"},
    {dayNumber:6,dayOfWeek:"S"},
    {dayNumber:7,dayOfWeek:"D"},
    ]
  sessions.map( element =>
  {
    dayLabels.map( el => 
    {
      element.day === el.dayNumber && ( element.dayWeek = el.dayOfWeek )
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
  const hasTodayScore = user.hasOwnProperty( "todayScore" ) 
  const scoreValue = hasTodayScore ? user.todayScore : user.score 
  const progressInPercentage = scoreValue * 100
  const userScore = [
    {
      scoreValue: 100,
      fill: getComputedStyle( document.documentElement ).getPropertyValue( '--circle-background-kpi' ),
      stroke:getComputedStyle( document.documentElement ).getPropertyValue(
      '--circle-background-kpi' )
    },
    {
      scoreValue: progressInPercentage,
      fill: getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-kpi' ),
      stroke: getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-kpi' ),
    }
  ]

  return ( {
    firstname,
    nutritionData,
    activity,
    sessions,
    performances,
    labelsKind,
    userScore,
    progressInPercentage
  } )
}

