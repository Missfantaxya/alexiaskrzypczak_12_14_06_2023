import formatData from "./utils/apiDataFormatter"
import ProfilPage from './components/pages/ProfilPage/ProfilPage'

import './App.css'

function App ()
{
  const formattedData = formatData()
  console.log( "formattedData: ", formattedData ) //* 


  return (
    <div className='App'>
      <ProfilPage
        firstname={ formattedData.firstname }
        calories={ formattedData.calories }
        proteins={ formattedData.proteins }
        carbs={ formattedData.carbs }
        fats={ formattedData.fats }
        // activities={formattedData. dayActivities }
        activities={formattedData. activity }
        user={ formattedData.user }
        score={formattedData.score}
      />
    </div>
  )
}

export default App
