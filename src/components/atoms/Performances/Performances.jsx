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
  labels
} )
{
  const renderPolarAngleAxis = ( { payload, x, y, cx, cy, ...rest } ) =>
  {
    const label = labels[ payload.value ]
    
    return (
      <text
        {...rest}
        className="performances__kindTicks"
        y={ y + ( y - cy ) / 11 }
        x={ x + ( x - cx ) / 25 }
        textAnchor="middle"
      >
        {label}
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
