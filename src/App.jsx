import { useState, useEffect } from "react"

import './App.css'

import formatData from "./utils/apiDataFormatter"
import ProfilPage from './components/pages/ProfilPage/ProfilPage'

export default function App ()
{
  const [ loading, setLoading ] = useState( false )
  const [ formattedData, setFormattedData ] = useState( 12, false )
  
  useEffect( () =>
  {
    async function initialisation ()
    {
      const data = await formatData( 12, false )
      setFormattedData( data )
      setLoading( true )
    }
    initialisation()
  }, [ loading ] )

  return (
    <div className='App'>
      { loading && (
        <ProfilPage
        firstname={ formattedData.firstname }
        nutrition={formattedData.nutritionData}
        activities={ formattedData.activity }
        sessions={ formattedData.sessions }
        performances={ formattedData.performances }
        labelsKind={ formattedData.labelsKind }
        userScore={ formattedData.userScore }
        progressInPercentage={ formattedData.progressInPercentage }
        />
      ) }
    </div>
  )
}
