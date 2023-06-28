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
  const dataScore = {
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
  const hasTodayScore = dataScore.hasOwnProperty("todayScore")
  const dataBar = hasTodayScore ? "todayScore" : "score"
// TODO le graph n'est pas proportionelle à la valeur du score donc aattention.
  return (
    <div className="graph__score">
      <h3>
        Score
      </h3>
      <ResponsiveContainer width="100%" height="100%" >
        <RadialBarChart
          width="100%"
          height="100%"
          data={ [dataScore] }
          startAngle={ 210 }
          endAngle={ 30 }
          innerRadius="70%"
          outerRadius="80%"
        >
          <RadialBar
            dataKey={ dataBar }
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-kpi' ) }
            // minAngle={50} //?
          />
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
