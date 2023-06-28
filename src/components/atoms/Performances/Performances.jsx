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

  const kindLabels = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
  }

  const renderPolarAngleAxis = ( { payload, x, y, cx, cy, ...rest } ) =>
  {
    const kindLabel = kindLabels[ payload.value ];
    
    return (
      <text
        {...rest}
        className="performances__kindTicks"
        y={ y + ( y - cy ) / 5 }
        x={ x + ( x - cx ) / 4 }
        textAnchor="middle"
      >
        {kindLabel}
      </text>
    )
  }

  return (
    <div className="graph__performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={dataPerformances}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={props => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis
            angle={ 30 }
            domaine={ ['auto', 'auto' ] }
            tick={ false }
            axisLine={ false }
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={ 0.7 }
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
