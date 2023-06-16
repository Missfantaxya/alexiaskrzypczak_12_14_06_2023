import "./DailyActivity"
import
  {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
  } from "recharts"

export default function DailyActivity ( props )
{
  const dataSessions = [
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
      <ResponsiveContainer>
        <BarChart data={dataSessions} width="100%" height="100%" >
          <XAxis dataKey="id" />
          <YAxis yAxisId="right" orientation="right" />
          <YAxis yAxisId="left" hide={ true } />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--dark-color-weight' ) }
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill={ getComputedStyle( document.documentElement ).getPropertyValue( '--main-color-weight' ) }
          />
        </BarChart>
      </ResponsiveContainer>
    </>
    )
}
