import "./Performances.css"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts"

export default function Performances ( props )
{

  // TODO reconstruire le [] de data (dans le formatage ) pour avoir le bon sens des étiquettes.
  // TODO retirer les data des composants.

  const dataPerformances = [
      {
          "value": 80,
          "kind": 1
      },
      {
          "value": 120,
          "kind": 2
      },
      {
          "value": 140,
          "kind": 3
      },
      {
          "value": 50,
          "kind": 4
      },
      {
          "value": 200,
          "kind": 5
      },
      {
          "value": 90,
          "kind": 6
      }
  ]

  const kind = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
  }
  // TODO construir un nouvel objet à partir de kind
  // TODO avec une propriété order = le  number de kind (voir code d'Yves)

  function reverseKindOrder(kind) {
  const kindOrderChanged = {};
  const keys = Object.keys(kind);
  for (let i = keys.length - 1; i >= 0; i--) {
    kindOrderChanged[keys.length - i] = kind[keys[i]];
  }
  return kindOrderChanged;
  }
  
  const kindOrderChanged = reverseKindOrder( kind );

  const kindLabels = {};

  for (let key in kindOrderChanged) {
    const translatedLabel = translateToFrench(kindOrderChanged[key]);
    kindLabels[key] = translatedLabel;
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
  // console.log( "pixelValues : ", pixelValues ) //*
  
  //TODO adapter le layout à 1024px de large

  return (
    <div className="graph__performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={dataPerformances} >
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
