import "./SessionDuration.css"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip
} from "recharts"
  
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
    
    return (
      <text x={x} y={y + 16} textAnchor="middle" fill="#FFF" fontSize="12">
        {label}
      </text>
    )
  }

  return (
    <div className="graph__weight">
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
            tick={<CustomAxisTick />}
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
