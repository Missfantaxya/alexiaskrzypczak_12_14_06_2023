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

export default function fetchData() {
  const users = USER_MAIN_DATA
  // console.log( "users : ", users ) //* 
  const activities = getActivityData(12)
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

async function getActivityData ( idUser )
{
  const apiResponse = await axios.get( `${ BASEURL }/${ userId }/activity` )
  const values = await apiResponse.json()
  return values
}
