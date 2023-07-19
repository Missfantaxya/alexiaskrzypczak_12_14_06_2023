import "./DailyActivity.css"

import
  {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
  } from "recharts"

export default function DailyActivity ( {activity} )
{ 
  console.log("activity : ",activity) //!
  const labels = activity.map( ( element, index ) => ( { [ element.day ]: index + 1 } ) );
  console.log( "labels : ", labels ) //~
  //TODO convertir [labels] en {labels}
  
  const dayLabels = {
    '2020-07-01': '1',
    '2020-07-02': '2',
    '2020-07-03': '3',
    '2020-07-04': '4',
    '2020-07-05': '5',
    '2020-07-06': '6',
    '2020-07-07': '7'
  }

  // FIXME RECHARTS raccourcir l'axe des abcisses (ne doit pas dépasser des labels)
  // FIXME RECHARTS il n'y a que 3 label au lieu de 7 sur les abcisses.
  
  const CustomAxisTick = ({ x, y, payload }) => {
    const label = dayLabels[ payload.value ];
    
    return (
      <text
        x={ x }
        y={ y + 16 }
        textAnchor="middle"
        fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--scale-color-weight' ) }
        fontSize="14"
      >
        {label}
      </text>
    )
  }

  const CustomYAxisTick = ( { x, y, payload } ) =>
  {
    const { value } = payload
    
    return(
      <text
        x={ x }
        y={ y }
        fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--scale-color-weight' ) }
        fontSize={ 14 }
        textAnchor="end"
      >
        {value}
      </text>
    )
  }

  const CustomTooltip = ( { active, payload, label } ) =>
  {
    if (active && payload && payload.length){
      const data = payload[ 0 ].payload // Données du point survolé
      
      return (
        <div className="weight__customTooltip" >
          <p className="weight__tooltipValue">{`${data.kilogram}kg`}</p>
          <p className="weight__tooltipValue">{`${data.calories}Kcal`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <>
      <h3 className="bar__title">
        Activité quotidienne
      </h3>
      <ResponsiveContainer>
        <BarChart
          data= { activity }
          barCategoryGap={ 8 }
          margin={{ top: 95, right: 29, bottom: 23, left: 43 }}
        >
          <CartesianGrid vertical= {false} strokeDasharray= "3 3" />
          <XAxis
            dataKey="day"
            tickCount={ 7 }
            tickLine={ false }
            // domain={['dataMin', 'dataMax']} //TODO ?
            tick={<CustomAxisTick />}
            axisLine={ getComputedStyle( document.documentElement ).getPropertyValue( '--scale-color-weight' ) }
          />
          <YAxis
            yAxisId="right"
            orientation= "right"
            axisLine= { false }
            tickLine= { false }
            tickCount={ 3 }
            type= "number"
            domain={ [ "dataMin - 2", "dataMax + 1" ] }
            tickMargin={ 31.64 } 
            tick={<CustomYAxisTick />}
          />
          <YAxis
            yAxisId="left"
            hide={ true }
            type= "number"
            domain={ [ 0, 'dataMax + 10' ] }
          />
        <Tooltip content={ <CustomTooltip /> } />
          <Legend
            verticalAlign="top"
            align="right"
            width={277}
            height={24}
            iconType="circle"
            iconSize={ 8 }
            wrapperStyle={ { top: "2.34vh", right:"1.8vw", bottom: 0 } }
            formatter={ ( value, entry ) => (
              <span className="barChart__legend">
                { entry.dataKey === 'kilogram' ? `Poids (kg)` : `Calories brûlées (kCal)` }
              </span>
            ) }
          />
          <Bar
            dataKey= "kilogram"
            yAxisId= "right"
            barSize= { 7 }
            radius= {[3, 3, 0, 0]}
            fill= { getComputedStyle( document.documentElement ).getPropertyValue( '--dark-color-weight' ) }
          />
          <Bar
            dataKey= "calories"
            yAxisId= "left"
            barSize= { 7 }
            radius= {[3, 3, 0, 0]}
            fill= { getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-weight' ) }
          />
        </BarChart>
      </ResponsiveContainer>
    </>
    )
}
