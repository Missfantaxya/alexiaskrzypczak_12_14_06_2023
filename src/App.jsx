import formatData from "./utils/apiDataFormatter"
import ProfilPage from './components/pages/ProfilPage/ProfilPage'

import './App.css'

const formattedData = await formatData()

export default function App ()
{
  // console.log( "formattedData : ", formattedData )//*
  return (
    <div className='App'>
      <ProfilPage
        firstname={ formattedData.firstname }
        calories={ formattedData.calories }
        proteins={ formattedData.proteins }
        carbs={ formattedData.carbs }
        fats={ formattedData.fats }
        activities={ formattedData.activity }
        sessions={ formattedData.sessions }
        performances={ formattedData.performances }
        kind={formattedData.kind}
        user={ formattedData.user }
        score={formattedData.score}
      />
    </div>
  )
}
