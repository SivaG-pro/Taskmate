import logo from "../assets/logo.png"
import '../App.css'


export function Header() {
  
 // document.documentElement.classList.add(theme);

   
  return (
    <div>
      <img className="logo" src={logo} alt=""/>
      
      <a href="\" className="nav">Home</a>
      <br />
      {/* <div className="themeselect">
      <span className="light"></span>
      <span className="dark"></span>
      </div> */}
    </div>
  )
}
