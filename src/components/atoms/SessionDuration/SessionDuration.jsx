import "./SessionDuration.css"
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip
} from "recharts"

//FIXME ajouter un écart au labels des absisses avec les bords du graph
//FIXME faire aller la courbe jusqu'aux bords du graph
export default function SessionDuration ( props )
{
  // const dayLabels = props.labels
  
  // const CustomAxisTick = ({ x, y, payload }) => {
  //   const label = dayLabels[ payload.value ]
  //   // TODO mettre ce que je peux dans le fichier css
  //   return (
  //     <text x={x} y={y + 16} textAnchor="middle" fill="#FFF" fontSize="12" opacity= "0.5039569735527039">
  //       {label}
  //     </text>
  //   )
  // }

  const CustomTooltip = ( { active, payload, label } ) =>
  {
    if ( active && payload && payload.length )
    {
      // Données du point survolé
      const data = payload[ 0 ].payload 
      
      return (
        <div className="lenght__customTooltip" >
          <p className="lenght__tooltipValue">
            { `${ data.sessionLength } min` }
          </p>
        </div>
      )
    }
    return null
  }

  const CustomDot = (props) => {
  const { cx, cy } = props

  return (
    <svg x={cx - 9} y={cy - 9} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z" fill="white"/>
      <path d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z" stroke="white" strokeOpacity="0.198345" strokeWidth="5"/>
    </svg>
  )
}
// FIXME ajouter la partie droite après l'activeDot en foncé
  // FIXME les labels des abcisses
  return (
    <div className="graph__lenght">
      <h3 className="lenght__title">
        Durrée emoyenne des sessions
      </h3>
      <ResponsiveContainer
        width="100%"
        height="70%"
      >
        <LineChart
          data={ props.sessions }
          width="100%"
          height="100%"
        >
          <XAxis
            dataKey="dayOfWeek"
            axisLine= { false }
            tickLine= { false }
            // tick={ <CustomAxisTick /> }
            // tick={ {
            //   fill: getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ),
            //   fontSize: 12
            // } }
            padding={{right:13, left:13}}
          />
          <Tooltip
            content={ <CustomTooltip /> }
            cursor={ false }
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="sessionLength"
            stroke={ getComputedStyle( document.documentElement ).getPropertyValue( '--light-color-objectif' ) }
            opacity= "0.5039569735527039"
            activeDot={ <CustomDot /> }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
