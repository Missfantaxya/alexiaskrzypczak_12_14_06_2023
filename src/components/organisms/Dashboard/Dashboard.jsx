import "./Dashboard.css"
import DashboardHeader from "../../molecules/DashboardHeader/DashboardHeader"
import GraphicBar from "../../molecules/GraphicBar/GraphicBar"
import GraphicsSquares from "../../molecules/GraphicsSquares/GraphicsSquares"
import DailyActivity from "../../atoms/DailyActivity/DailyActivity"
import GraphicSquare from "../../molecules/GraphicSquare/GraphicSquare"
import SessionDuration from "../../atoms/SessionDuration/SessionDuration"
import ResultsNutrition from "../../molecules/ResultsNutrition/ResultsNutrition"
import Performances from "../../atoms/Performances/Performances"
import Score from "../../atoms/Score/Score"

export default function Dashboard ( props )
{
  
  return (
    <div className="dashboard">
      <DashboardHeader firstname={ props.firstname } />
      <div className="dashboard__results">
        <div className="dashboard__graphics">
          <GraphicBar>
            <DailyActivity />
          </GraphicBar>
          <GraphicsSquares>
            <GraphicSquare>
              <SessionDuration />
            </GraphicSquare>
            <GraphicSquare>
              <Performances />
            </GraphicSquare>
            <GraphicSquare>
              <Score />
            </GraphicSquare>
          </GraphicsSquares>
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
