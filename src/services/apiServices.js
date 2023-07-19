// Fichier des appels API
import axios from "axios"

// // URL du fichier data.js (remplacez le chemin d'accès approprié)
// const dataUrl = 'src/data/mockData.js';

// // Fonction pour récupérer les données avec Axios
// async function fetchData() {
//   try {
//     const response = await axios.get(dataUrl);
//     const data = response.data;
//     console.log("data Services : ", data) //!
//     return data;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des données :', error);
//     return null;
//   }
// }
// export default fetchData;

import
  {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from "../data/mockData"

const BASEURL = "http://localhost:3000/user"

async function getActivityData ( userId )
{
  try {
    const response = await axios.get(`${BASEURL}/${userId}/activity`)
    // en cas de réussite de la requête
    const activitiesValues = response.data.data.sessions
    // console.log( "activitiesValues : ", activitiesValues ) //*
    // Cette valeur sera résolue dans la promesse renvoyée par la fonction
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

export default async function fetchData ( userId, onMock )
{
  userId = 12
  const users = USER_MAIN_DATA
  // console.log( "users : ", users ) //*
  // TODO reformuler pour avoir MockData si pas API voir exemple d'Yves : 
  // const activities = onMock ? USER_ACTIVITY : await getActivityData( userId )
  
  const activities = await getActivityData( userId )
  console.log( "activities de service : ", activities ) //*
  // const activities = USER_ACTIVITY
  // console.log( "activities : ", activities ) //* 
  const sessions = USER_AVERAGE_SESSIONS
  // console.log( "sessions : ", sessions ) //* 
  const performances = USER_PERFORMANCE
  // console.log( "performances : ", performances ) //*

  return(
    {users,
    activities,
      sessions,
      performances
    }
  )
  }


