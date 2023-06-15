import "./Dashboard.css"
import DashboardHeader from "../../molecules/DashboardHeader/DashboardHeader"

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <DashboardHeader firstname={ props.firstname } />
      <div className="dashboard__results">
        <div className="dashboard__graphics">
          <div className="graphics__squares"></div>
        </div>
        <div className="results__nutrition"></div>
      </div>
    </div>
  )
}
