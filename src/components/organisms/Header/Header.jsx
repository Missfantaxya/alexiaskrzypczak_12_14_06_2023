import "./Header.css"
import Logo from "../../atoms/Logo/Logo"
import Nav from "../../molecules/Nav/Nav"

export default function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
    )
}
