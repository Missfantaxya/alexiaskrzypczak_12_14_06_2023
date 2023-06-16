import "./ProfilPage.css"
import ProfilTemplate from "../../templates/ProfilTemplate/ProfilTemplate"

export default function ProfilPage ( props )
{
  const firstname = "Thomas"
  const calories = "850"
  const proteins = "40"
  const carbs = "60"
  const fats = "50"

  return (
    <>
      <ProfilTemplate
        firstname = { firstname}
        calories = { calories }
        proteins = { proteins }
        carbs = { carbs }
        fats={ fats }
      />
    </>
    )
}
