import "./NavLinks.css"
import Link from "../../atoms/Link/Link"

export default function NavLink ( props )
{
  const links = [
    {
      id: 1,
      title: "Accueil"
    },
    {
      id: 2,
      title: "Profil"
    },
    {
      id: 3,
      title: "Réglage"
    },
    {
      id: 4,
      title: "Comunauté"
    }
  ]

  return (
      <nav >
        <ul className="navlist">
          { links.map( ( item ) => (
            <li key={ item.id }>
              <Link
                textContent={ item.title }
                href="#"
              />
            </li>
          ) ) }
        </ul>
      </nav>
    )
}
