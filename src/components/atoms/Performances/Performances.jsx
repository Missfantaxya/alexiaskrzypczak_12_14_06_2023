import "./Performances.css"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts"

export default function Performances ( {
  performances,
  kind
} )
{

  // TODO reconstruire le [] de data (dans le formatage) pour avoir le bon sens des étiquettes.

  function reverseKindOrder(kind) {
    const kindOrderChanged = {}
    const keys = Object.keys(kind)
    for (let i = keys.length - 1; i >= 0; i--) {
      kindOrderChanged[ keys.length - i ] = kind[ keys[ i ] ]
    }
    return kindOrderChanged
  }
  
  const kindOrderChanged = reverseKindOrder( kind )

  const kindLabels = {}

  for (let key in kindOrderChanged) {
    const translatedLabel = translateToFrench(kindOrderChanged[key])
    kindLabels[key] = translatedLabel
  }


  function translateToFrench(label) {
    const translations = {
      cardio: 'Cardio',
      energy: 'Énergie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité'
    };

    return translations[label] || label;
  }

  const renderPolarAngleAxis = ( { payload, x, y, cx, cy, ...rest } ) =>
  {
    const kindLabel = kindLabels[ payload.value ]
    
    return (
      <text
        {...rest}
        className="performances__kindTicks"
        y={ y + ( y - cy ) / 11 }
        x={ x + ( x - cx ) / 25 }
        textAnchor="middle"
      >
        {kindLabel}
      </text>
    )
  }

  const screenWidth = window.innerWidth
  const polarRadius = [0, 11.25, 22.5, 45, 67.5, 90]
  const pixelValues = polarRadius.map( radius => ( radius * screenWidth ) / 1440 )

  return (
    <div className="graph__performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performances} >
          <PolarGrid
            radialLines={ false }
            polarRadius={ pixelValues }
          />
          <PolarAngleAxis
            dataKey="kind"
            tick={ renderPolarAngleAxis } 
          />
          <PolarRadiusAxis
            tick={ false }
            axisLine={ false }
            tickCount={ 6 }
            domain={[0, "dataMax"]}
          />
          <Radar
            dataKey="value"
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-radar' ) }
            fillOpacity={ 0.7 }
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
