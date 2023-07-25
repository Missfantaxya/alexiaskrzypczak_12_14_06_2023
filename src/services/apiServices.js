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

async function getUserData( idUSer )
{
  try {
    const response = await axios.get(`${BASEURL}/${idUSer}`)
    // en cas de réussite de la requête
    const userValues = response.data.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return userValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

async function getActivityData( idUSer )
{
  try {
    const response = await axios.get(`${BASEURL}/${idUSer}/activity`)
    // en cas de réussite de la requête
    const activitiesValues = response.data.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return activitiesValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

async function getSessionsData( idUSer )
{
  try {
    const response = await axios.get(`${BASEURL}/${idUSer}/average-sessions`)
    // en cas de réussite de la requête
    const sessionsValues = response.data.data
    // const sessionsValues = response.data.data
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
    return sessionsValues
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

async function getPerformanceData( idUSer )
{
  try {
    const response = await axios.get(`${BASEURL}/${idUSer}/performance`)
    // en cas de réussite de la requête
    // const performanceValues = response.data
    const performanceValues = response.data.data
    return performanceValues 
  } catch (error) {
    // en cas d'échec de la requête
    console.log("error : ", error)
    throw error
  }
}

function idChoice( idUSer, array )
{
  const elementValueisIdUSer = ( element ) => element.userId === idUSer
  const arrayId = array.findIndex( elementValueisIdUSer )
  return arrayId
}

function getUserOnMock ( idUSer )
{
  const elementId = ( element ) => element.id === idUSer
  const idUserOfMock = USER_MAIN_DATA.findIndex( elementId ) 
  const userValuesOnMock = USER_MAIN_DATA[ idUserOfMock ]
  return userValuesOnMock
}

function getActivityOnMock ( idUSer )
{
  const idActivityOfMock = idChoice( idUSer, USER_ACTIVITY )
  const activityValuesOnMock = USER_ACTIVITY[ idActivityOfMock ]
  return activityValuesOnMock
}

function getSessionOnMock ( idUSer )
{
  const idSessionOfMock = idChoice( idUSer, USER_AVERAGE_SESSIONS )
  const sessionValuesOnMock = USER_AVERAGE_SESSIONS[ idSessionOfMock ]
  return sessionValuesOnMock
}

function getPerformanceOnMock ( idUSer )
{
  const idPerformanceOfMock = idChoice( idUSer, USER_PERFORMANCE )
  const performanceValuesOnMock = USER_PERFORMANCE[ idPerformanceOfMock ]
  return performanceValuesOnMock
}

export default async function fetchData ( idUSer, onMock )
{
  onMock = false //sert pour les présentations si API cassé ou en travaux
  idUSer = 12
  
  const users = onMock ? getUserOnMock( idUSer ) : await getUserData( idUSer )
  
  const activities = onMock ?  getActivityOnMock( idUSer ) : await getActivityData( idUSer )
  
  const sessions = onMock ? getSessionOnMock( idUSer ) : await getSessionsData( idUSer )

  const performances = onMock ? getPerformanceOnMock( idUSer ) : await getPerformanceData( idUSer )

  return ( {
    users,
    activities,
    sessions,
    performances,
  } )
  }


