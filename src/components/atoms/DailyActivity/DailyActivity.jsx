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

  return (
    <>
      <ResponsiveContainer
      >
        <BarChart
          data= { dataWeight }
          barCategoryGap={ 8 }
          margin={{ top: 95, right: 29, bottom: 23, left: 43 }}
        >
          <CartesianGrid vertical= {false} strokeDasharray= "3 3" />
          <XAxis
            dataKey="id"
            tickCount={ 7 }
            type="number"
            domain={ "dataMin, dataMax" }
            // TODO changer la couleur des étiquettes
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
            // TODO changer la couleur des étiquettes
            tick={{ className: "barChart__label" }} //!
            // tick={ { style: { color: "green" } } } //!
            color="pink" //!
            // fill: `{ getComputedStyle( document.documentElement ).getPropertyValue( '--scale-color-weight' )}` 
          />
          <YAxis
            yAxisId="left"
            hide={ true }
            type= "number"
            domain={ [ 0, 'dataMax + 10' ] }
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            width={277}
            height={24}
            iconType="circle"
            iconSize={ 8 }
            wrapperStyle={ { top: "2.34vh", right:"1.8vw", bottom: 0 } }
            formatter={ ( value, entry ) => (
              <span className="barChart__legend">{entry.dataKey === 'kilogram' ? `Poids (kg)` : `Calories brûlées (kCal)`}</span>
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
