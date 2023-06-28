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

export default function DailyActivity ( props )
{
  // TODO voir pour enlever les id rajouter dans la data
  // TODO raccourcir l'axe des absysses (ne doit pas dépasser des labels)
  const dataWeight = [
    {
      "id":1,
      "day": '2020-07-01',
      "kilogram": 80,
      "calories": 240
    },
    {
      "id":2,
      "day": '2020-07-02',
      "kilogram": 80,
      "calories": 220
    },
    {
      "id":3,
      "day": '2020-07-03',
      "kilogram": 81,
      "calories": 280
    },
    {
      "id":4,
      "day": '2020-07-04',
      "kilogram": 81,
      "calories": 290
    },
    {
      "id":5,
      "day": '2020-07-05',
      "kilogram": 80,
      "calories": 160
    },
    {
      "id":6,
      "day": '2020-07-06',
      "kilogram": 78,
      "calories": 162
    },
    {
      "id":7,
      "day": '2020-07-07',
      "kilogram": 76,
      "calories": 390
    }
  ]
  
  const dayLabels = {
    '2020-07-01': '1',
    '2020-07-02': '2',
    '2020-07-03': '3',
    '2020-07-04': '4',
    '2020-07-05': '5',
    '2020-07-06': '6',
    '2020-07-07': '7'
  }

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
            data= { dataWeight }
            barCategoryGap={ 8 }
            margin={{ top: 95, right: 29, bottom: 23, left: 43 }}
          >
            <CartesianGrid vertical= {false} strokeDasharray= "3 3" />
            <XAxis
              dataKey="day"
              tickCount={ 7 }
              tickLine= { false }
              domain={ "dataMin, dataMax" }
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
