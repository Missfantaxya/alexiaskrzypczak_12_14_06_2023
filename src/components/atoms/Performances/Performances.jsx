import "./Performances.css"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts"

export default function Performances ( props )
{

  const dataPerformances = [
      {
          "value": 80,
          "kind": 1
      },
      {
          "value": 120,
          "kind": 2
      },
      {
          "value": 140,
          "kind": 3
      },
      {
          "value": 50,
          "kind": 4
      },
      {
          "value": 200,
          "kind": 5
      },
      {
          "value": 90,
          "kind": 6
      }
  ]

  const kind = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
  }

  // const kindLabels = dataPerformances.map((item) => ({
  //   kind: item.kind,
  //   label: getKindLabel(item.kind)
  // } ) )
  
  // function getKindLabel(kind) {
  //   // Faites le formatage nécessaire pour obtenir l'étiquette correspondante à la valeur de kind
  //   switch (kind) {
  //     case 1:
  //       return 'cardio';
  //     case 2:
  //       return 'energy';
  //     case 3:
  //       return 'endurance';
  //     case 4:
  //       return 'strength';
  //     case 5:
  //       return 'speed';
  //     case 6:
  //       return 'intensity';
  //     default:
  //       return '';
  //   }
  // }

  // const CustomAxisTick = ({ x, y, payload }) => {
  //   const label = kindLabels[ payload.value ]
  //   // TODO mettre ce que je peux dans le fichier css
  //   return (
  //     <text x={x} y={y} textAnchor="middle" fill="#FFF" fontSize="12">
  //       {label}
  //     </text>
  //   )
  // }

  return (
    <div className="graph__performances">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={dataPerformances}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            datakey="kind"
            // tick={<CustomAxisTick/>}
          />
          <PolarRadiusAxis
            angle={ 30 }
            domaine={ ['auto', 'auto' ] }
            tick={ false }
            axisLine={ false }
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={ 0.7 }
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
