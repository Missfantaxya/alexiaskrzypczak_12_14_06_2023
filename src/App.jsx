import formatData from "./utils/apiDataFormatter"
import ProfilPage from './components/pages/ProfilPage/ProfilPage'

import './App.css'

const formattedData = await formatData()

export default function App ()
{
  return (
    <div className='App'>
      <ProfilPage
        firstname={ formattedData.firstname }
        calories={ formattedData.calories }
        proteins={ formattedData.proteins }
        carbs={ formattedData.carbs }
        fats={ formattedData.fats }
        activities={ formattedData.activity }
        labelsActivity={formattedData.labelsActivity}
        sessions={ formattedData.sessions }
        labelsSession={formattedData.labelsSession}
        performances={ formattedData.performances }
        labelsKind={ formattedData.labelsKind }
        userScore={ formattedData.userScore }
        progressInPercentage={ formattedData.progressInPercentage }
        progressBar={ formattedData.progressBar }
      />
    </div>
  )
}
