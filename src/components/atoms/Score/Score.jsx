import "./Score.css"
import
  {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Legend
} from "recharts"
  
export default function Score ( props )
{
  const dataScore = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
      }
    }
  ]

  const hasTodayScore = dataScore[0].hasOwnProperty( "todayScore" )
  const dataBar = hasTodayScore ? "todayScore" : "score"
  // console.log( "dataBar :", dataBar ) //*
  
  const progress = dataScore[ 0 ].todayScore
  const progressInPercentage = progress * 100

  const progressBar = 180 - (progress * 180)
  // console.log( "progressBar :", progressBar ) //*

  const circleBackgroundKpi = getComputedStyle(document.documentElement)
    .getPropertyValue("--circle-background-kpi")

  return (
    <div className="graph__score">
      <h3 className="score__title">
        Score
      </h3>
      <ResponsiveContainer width="100%" height="100%" >
        <RadialBarChart
          width="100%"
          height="100%"
          data={ dataScore }
          startAngle={ progressBar }
          endAngle={ 180 }
          innerRadius="70%"
          outerRadius="80%"
        >
          <RadialBar
            dataKey={ dataBar }
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
