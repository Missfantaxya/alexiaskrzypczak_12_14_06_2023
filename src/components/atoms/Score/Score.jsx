import "./Score.css"
import
  {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
} from "recharts"
  
export default function Score (
  {
    user,
    progressInPercentage
  } )
{
  return (
    <div className="graph__score">
      <h3 className="score__title">
        Score
      </h3>
      <ResponsiveContainer>
        <RadialBarChart
          width="100%"
          height="100%"
          data={ user }
          barSize={ 10 }
          startAngle={ 180 }
          endAngle={-180}
          innerRadius="70%"
          outerRadius="90%"
        >
          <RadialBar
            dataKey={ "scoreValue" }
            cornerRadius={ 10 }
            />
        </RadialBarChart>
      </ResponsiveContainer>
        <svg
          className="center__svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="50"
            cy="50"
            r="36%" // Le rayon du cercle blanc
            fill={getComputedStyle( document.documentElement ).getPropertyValue( '--circle-background-kpi' )}
          />
        </svg>
      <span className="barChart__legendScore">
        { `${ progressInPercentage }%` }
        <span className="barChart__legendText">
          <span > de votre </span>
          <span> objectif </span>
        </span>
      </span>
    </div>
  )
}
