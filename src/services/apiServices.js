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
    const userValues = response.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return userValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}


async function getActivityData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/activity`)
    // en cas de réussite de la requête
    const activitiesValues = response.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return activitiesValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

async function getSessionsData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/average-sessions`)
    // en cas de réussite de la requête
    const sessionsValues = response.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return sessionsValues
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

async function getPerformanceData( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/performance`)
    // en cas de réussite de la requête
    const performanceValues = response.data
    return performanceValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

    // TODO reformuler pour avoir MockData si pas API voir exemple d'Yves
export default async function fetchData ( userId, onMock )
{
  onMock = false //sert pour les présentation si API cassé ou en travaux
  userId = 12
  //TODO const activities = onMock ? USER_ACTIVITY : await getActivityData( userId )

  const users = await getUserData( userId )
  // const users = USER_MAIN_DATA
  
  const activities = await getActivityData( userId )
  // const activities = USER_ACTIVITY
  
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


