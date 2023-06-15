import "./ProfilTemplate.css"
import Header from "../../organisms/Header/Header"
import NavVertical from "../../organisms/NavVertical/NavVertical"

export default function ProfileTemplate(props) {
  return (
    <div className="profilTemplate">
      <Header />
      <main className="main">
        <NavVertical />
      </main>
    </div>
    )
}
