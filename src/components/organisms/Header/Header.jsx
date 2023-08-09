import "./Header.css"
import Logo from "../../atoms/Logo/Logo"
import NavLinks from "../../molecules/NavLinks/NavLinks"

export default function Header( ) {
  return (
    <header className="header">
      <Logo />
      <NavLinks />
    </header>
    )
}
