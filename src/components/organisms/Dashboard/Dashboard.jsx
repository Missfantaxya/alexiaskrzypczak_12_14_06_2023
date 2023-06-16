import "./Dashboard.css"
import DashboardHeader from "../../molecules/DashboardHeader/DashboardHeader"
import GraphicBar from "../../molecules/GraphicBar/GraphicBar"
import GraphicsSquares from "../../molecules/GraphicsSquares/GraphicsSquares"
import GraphicSquare from "../../molecules/GraphicSquare/GraphicSquare"
import ResultsNutrition from "../../molecules/ResultsNutrition/ResultsNutrition"

export default function Dashboard ( props )
{
  
  return (
    <div className="dashboard">
      <DashboardHeader firstname={ props.firstname } />
      <div className="dashboard__results">
        <div className="dashboard__graphics">
          <GraphicBar></GraphicBar>
          <GraphicsSquares>
            <GraphicSquare></GraphicSquare>
            <GraphicSquare></GraphicSquare>
            <GraphicSquare></GraphicSquare>
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
