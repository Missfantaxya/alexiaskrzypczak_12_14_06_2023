// Fichier des appels API
import axios from "axios"

import
  {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from "../data/mockData"

const BASEURL = "http://localhost:3000/user"

async function getUserData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}`)
    // en cas de réussite de la requête
    const userValues = response.data.data.userInfos
    // console.log( "userValues : ", userValues ) //*
    const firstname = userValues.firstName
    console.log("firstname : ",firstname)
    const counterValues = response.data.data.keyData
    // console.log( "counterValues : ", counterValues ) //*
    const hasTodayScore = response.data.data.hasOwnProperty( "todayScore" )
    // console.log("hasTodayScore : ",hasTodayScore) //*
    const scoreValues = hasTodayScore ? response.data.data.todayScore : response.data.data.score
    console.log( "scoreValues : ", scoreValues ) //!
    

    return ( {
      firstname,
      counterValues,
      scoreValues
    } )
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  } finally {
    // dans tous les cas
    // console.log("Demande USER ENVOYEE") //*
  }
}


async function getActivityData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/activity`)
    // en cas de réussite de la requête
    const activitiesValues = response.data.data.sessions
    // console.log( "activitiesValues : ", activitiesValues ) //*
    // FIXME gérer les labels :
    // const labels = activity.map( ( element, index ) => ( { [ element.day ]:
    // index + 1 } ) ) 
    // console.log( "labels : ", labels ) //~ 
    //TODO convertir [labels] en {labels}
  
    const dayLabels = {
      '2020-07-01': '1',
      '2020-07-02': '2',
      '2020-07-03': '3',
      '2020-07-04': '4',
      '2020-07-05': '5',
      '2020-07-06': '6',
      '2020-07-07': '7'
    }
  
    return activitiesValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  } finally {
    // dans tous les cas
    // console.log("Demande ACTIVITY ENVOYEE") //*
  }
}

async function getSessionsData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/average-sessions`)
    // en cas de réussite de la requête
    const sessionsValues = response.data.data.sessions
    // console.log( "sessionsValues : ", sessionsValues ) //*
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return sessionsValues
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  } finally {
    // dans tous les cas
    // console.log("Demande SESSIONS ENVOYEE") //*
  }
}

async function getPerformanceData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/performance`)
    // en cas de réussite de la requête
    const performanceValues = response.data.data.data
    // console.log( "performanceValues : ", performanceValues ) //*
    const kindValues = response.data.data.kind
    // console.log( "kindValues : ", kindValues ) //*
    // TODO construire un nouvel objet à partir de kindValues 
    // TODO avec une propriété order = le number de kind (voir code d'Yves)
    
    return ({performanceValues, kindValues}) 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  } finally {
    // dans tous les cas
    // console.log("Demande PERFORMANCE ENVOYEE") //*
  }
}

export default async function fetchData ( userId, onMock )
{
  userId = 12
  const users = await getUserData( userId )
  // const users = USER_MAIN_DATA
  // console.log( "users : ", users ) //*
  // TODO reformuler pour avoir MockData si pas API voir exemple d'Yves : 
  // const activities = onMock ? USER_ACTIVITY : await getActivityData( userId )
  
  const activities = await getActivityData( userId )
  // console.log( "activities de service : ", activities ) //*
  // const activities = USER_ACTIVITY
  // console.log( "activities : ", activities ) //* 

  const sessions = await getSessionsData( userId )
  // console.log( "sessions de service : ", sessions ) //*
  // const sessions = USER_AVERAGE_SESSIONS
  // console.log( "sessions : ", sessions ) //* 

  const performances = await getPerformanceData( userId )
    // console.log( "performances de service : ", performances ) //*
  // const performances = USER_PERFORMANCE
  // console.log( "performances : ", performances ) //*

  return ( {
    users,
    activities,
    sessions,
    performances,
  } )
  }


