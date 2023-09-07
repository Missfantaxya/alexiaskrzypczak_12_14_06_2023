import "./SessionDuration.css"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip
} from "recharts"

export default function SessionDuration ( props )
{
  const CustomTooltip = ( {
    active,
    payload,
    label
  } ) =>
  { 
    if ( active && payload && payload.length )
    {
      // Données du point survolé
      const data = payload[ 0 ].payload
      
      return (
        <>
          <div className="lenght__tooltipWrapper">
            <div className="lenght__customTooltip" >
              <p className="lenght__tooltipValue">
                { `${ data.sessionLength } min` }
              </p>
            </div>
          </div>
        </>
      )
    }
    return null
  }

  const CustomDot = (props) => {
  const { cx, cy } = props

  return (
    <svg
      x={ cx - 9 }
      y={ cy - 9 }
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
        fill="white" />
      <path
        d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
        stroke="white"
        strokeOpacity="0.198345"
        strokeWidth="5"
      />
    </svg>
  )
}
  return (
    <div className="graph__lenght">
      <h3 className="lenght__title">
        Durrée emoyenne des sessions
      </h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart
          data={ props.sessions }
          width="100%"
          height="100%"
        >
          <XAxis
            dataKey="dayWeek"
            type="category" //?
            axisLine= { false }
            tickLine= { false }
            tick={ {
              fill: getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ),
              fontSize: 12,
              fontWeight: 500,
              opacity: "0.5039569735527039"
            } }
            padding={ {
              right: 13,
              left: 14
            } }
          />
          <YAxis
            datakey="sessionLength"
            hide={ true }
            type="number"
            domain={[0, "dataMax + 35"]}
          />
          <Tooltip
            content={ <CustomTooltip /> }
            cursor={ false }
            offset={ 0 }
            wrapperStyle={ {width:"17.917vw"} }
            allowEscapeViewBox={{x: true}}
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="sessionLength"
            stroke={ getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ) }
            opacity= "0.403191"
            activeDot={ <CustomDot /> }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
