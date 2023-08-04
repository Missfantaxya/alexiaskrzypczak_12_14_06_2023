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
    .getPropertyValue( "--circle-background-kpi" )
  
  const wrapperScore = document.querySelectorAll( '.recharts-legend-wrapper' )
  // console.log( "wrapperScore[1] : ", wrapperScore[ 1 ] ) //?
  // console.log( "Type de wrapperScore[1] : ",typeof wrapperScore[ 1 ] ) //?
  const wrapperWidth = wrapperScore
  // console.log( "wrapperWidth : ", wrapperWidth ) //?
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
          // startAngle={ progressBar }
          // startAngle={ 0 } // pour le style de legend
          // endAngle={ 180 }
          innerRadius="70%"
          outerRadius="80%"
        >
          <RadialBar
            dataKey={ "scoreValue" }
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-kpi' ) }
            cornerRadius={ 10 }
          />
          <Legend
            verticalAlign="middle"
            align="center"
            wrapperStyle={ {
              backgroundColor: circleBackgroundKpi,
              backgroundColor: "blue",
              // width: "70%",
              width: "11.335vw",
              height: "11.335vw", // idem width
              borderRadius: "50%",
              left: "50%",
              transform:"translateX(-50%)",
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
