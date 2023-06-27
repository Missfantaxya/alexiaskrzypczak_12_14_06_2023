import "./SessionDuration.css"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip
} from "recharts"
  
//TODO ajouter un écart au labels des absisses avec les bords du graph
//TODO faire aller la courbe jusqu'aux bords du graph
export default function SessionDuration ( props )
{
  const dataSessions= [
    {
      "day": 1,
      "sessionLength": 30
    },
    {
      "day": 2,
      "sessionLength": 23
    },
    {
      "day": 3,
      "sessionLength": 45
    },
    {
      "day": 4,
      "sessionLength": 50
    },
    {
      "day": 5,
      "sessionLength": 0
    },
    {
      "day": 6,
      "sessionLength": 0
    },
    {
      "day": 7,
      "sessionLength": 60
    }
  ]

  const dayLabels = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
  }
  
  const CustomAxisTick = ({ x, y, payload }) => {
    const label = dayLabels[ payload.value ]
    // TODO mettre ce que je peux dans le fichier css
    return (
      <text x={x} y={y + 16} textAnchor="middle" fill="#FFF" fontSize="12">
        {label}
      </text>
    )
  }

  const CustomTooltip = ( { active, payload, label } ) =>
  {
    if ( active && payload && payload.length )
    {
      // Données du point survolé
      const data = payload[ 0 ].payload 
      
      return (
        <div className="lenght__customTooltip" >
          <p className="lenght__tooltipValue">{`${data.sessionLength} min`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="graph__lenght">
      <h3 className="lenght__title">
        Durrée emoyenne des sessions
      </h3>
      <ResponsiveContainer
        width="100%"
        height="80%"
      >
        <LineChart
          data={ dataSessions }
          width="100%"
          height="100%"
        >
          <XAxis
            dataKey="day"
            axisLine= { false }
            tickLine= { false }
            tick={ <CustomAxisTick /> }
          />
          <Tooltip
            content={ <CustomTooltip /> }
            cursor={ false }
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="sessionLength"
            stroke= { getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ) }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
