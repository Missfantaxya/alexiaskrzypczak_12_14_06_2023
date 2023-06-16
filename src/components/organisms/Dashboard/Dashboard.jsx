import "./Dashboard.css"
import DashboardHeader from "../../molecules/DashboardHeader/DashboardHeader"
import ResultsNutrition from "../../molecules/ResultsNutrition/ResultsNutrition"

export default function Dashboard ( props )
{
  
  return (
    <div className="dashboard">
      <DashboardHeader firstname={ props.firstname } />
      <div className="dashboard__results">
        <div className="dashboard__graphics">
          <div className="graphic__bar"></div>
          <div className="graphics__squares">
            <div className="graphic__square"></div>
            <div className="graphic__square"></div>
            <div className="graphic__square"></div>
          </div>
        </div>
        <ResultsNutrition
          calories={ props.calories }
          proteins={ props.proteins }
          carbs={ props.carbs }
          fats={ props.fats }
        />
      </div>
    </div>
  )
}
