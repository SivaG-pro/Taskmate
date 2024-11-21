import logo from "../assets/logo.png"
import '../App.css'

export function Header() {
  return (
    <div>
      <img className="logo" src={logo}/>
      <a href="\" className="nav">Home</a>
    </div>
  )
}
