import "./Score.css"
import
  {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Legend
} from "recharts"
  
export default function Score (
  {
    user,
    progressInPercentage,
    progressBar
  } )
{
  console.log("user de score : ", user) //*

  // const circleBackgroundKpi = getComputedStyle(document.documentElement)
  //   .getPropertyValue( "--circle-background-kpi" )

  //FIXME voir pour la rond blanc centrale qui cache le trait rouge sur grand format
  return (
    <div className="graph__score">
      <h3 className="score__title">
        Score
      </h3>
      <ResponsiveContainer width="100%" height="100%" >
        <RadialBarChart
          width="100%"
          height="100%"
          data={ user }
          barSize={ 10 }
          barGap={ 0 }
          barCategoryGap="0%"
          startAngle={ 180 } 
          endAngle={ -180 } 
          innerRadius="0%"
          outerRadius="80%"
        >
          <RadialBar
            dataKey={ "scoreValue" }
            cornerRadius={ 10 }
            />
        </RadialBarChart>
      </ResponsiveContainer>
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
