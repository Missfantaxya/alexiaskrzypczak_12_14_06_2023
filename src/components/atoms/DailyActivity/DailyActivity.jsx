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

export default function DailyActivity ( {activity,labels} )
{
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
            dataKey="dayDate"
            tickCount={ 7 }
            type="number"
            domain={ [ "dataMin", "dataMax" ] }
            tickLine={ false }
            stroke={getComputedStyle( document.documentElement).getPropertyValue( '--scale-color-weight' )}
            tick={ {
              fill: getComputedStyle( document.documentElement ).getPropertyValue( '--scale-color-weight' ),
              fontSize: 14
            } }
            
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
