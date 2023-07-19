import formatData from "./utils/apiDataFormatter"
import ProfilPage from './components/pages/ProfilPage/ProfilPage'

import './App.css'

const formattedData = await formatData()
console.log( "formattedData 1 : ", formattedData ) //*

export default function App ()
{
  console.log( "formattedData 2 : ", formattedData )//*
  return (
    <div className='App'>
      <ProfilPage
        firstname={ formattedData.firstname }
        calories={ formattedData.calories }
        proteins={ formattedData.proteins }
        carbs={ formattedData.carbs }
        fats={ formattedData.fats }
        activities={formattedData. activity }
        user={ formattedData.user }
        score={formattedData.score}
      />
    </div>
  )
}
