import "./Nav.css"
import Link from "../../atoms/Link/Link"

export default function Nav ( props )
{
  const links = [
    { id: 1, title: "Accueil" },
    { id: 2, title: "Profil" },
    { id: 3, title: "Réglage" },
    {id: 4, title: "Comunauté"}
  ]

  return (
      <nav className="nav">
        { links.map( ( item ) => (
          <Link key={ item.id } textContent={ item.title } href="#" />
        ) ) }
      </nav>
    )
}
