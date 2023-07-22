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
    const firstname = userValues.firstName
    const counterValues = response.data.data.keyData
    const hasTodayScore = response.data.data.hasOwnProperty( "todayScore" )
    const scoreValues = hasTodayScore ? response.data.data.todayScore : response.data.data.score

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
    console.log("activitiesValues : ",activitiesValues) //*
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

    // TODO reformuler pour avoir MockData si pas API voir exemple d'Yves
export default async function fetchData ( userId, onMock )
{
  userId = 12
  const users = await getUserData( userId )
  // const users = USER_MAIN_DATA

  
  const activities = await getActivityData( userId )
  // const activities = USER_ACTIVITY

  // const activities = onMock ? USER_ACTIVITY : await getActivityData( userId )

  const sessions = await getSessionsData( userId )
  // const sessions = USER_AVERAGE_SESSIONS

  const performances = await getPerformanceData( userId )
  // const performances = USER_PERFORMANCE

  return ( {
    users,
    activities,
    sessions,
    performances,
  } )
  }


