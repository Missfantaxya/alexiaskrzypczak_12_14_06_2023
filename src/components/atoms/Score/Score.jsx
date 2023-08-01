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
  const circleBackgroundKpi = getComputedStyle(document.documentElement)
    .getPropertyValue("--circle-background-kpi")

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
          startAngle={ progressBar }
          endAngle={ 180 }
          innerRadius="70%"
          outerRadius="80%"
        >
          <RadialBar
            dataKey={ "scoreValue" }
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-kpi' ) }
            cornerRadius={10}
          />
          <Legend
            verticalAlign="middle"
            align="center"
            wrapperStyle={ {
              backgroundColor: circleBackgroundKpi,
              width: "11.335vw",
              height: "11.335vw",
              borderRadius: "50%",
              left: "3.3VW",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            } }
            formatter={ ( value, entry ) => (
              <span className="barChart__legendScore">
                { `${ progressInPercentage }%` }
                <span className="barChart__legendText">
                  <span >
                    de votre
                  </span>
                  <span>
                    objectif
                  </span>
                </span>
              </span>
            ) }
            iconSize={ 0 }
            layout="horizontal"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
