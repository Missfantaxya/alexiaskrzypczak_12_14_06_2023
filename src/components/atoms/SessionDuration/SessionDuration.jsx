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

  return (
    <>
      
      <ResponsiveContainer>
        <LineChart
          data={ dataSessions }
          width="100%"
          height="100%"
        >
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke= { getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ) }
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
