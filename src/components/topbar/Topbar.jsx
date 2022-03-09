import "./topbar.scss";
import { LocalPhone, Mail, GitHub, LinkedIn, FileCopy } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#intro" 
            className="logo"
            style={menuOpen?{
              color:"white"
            }: {
              color:"#15023a"
            }}
          >
            AW
          </a>
          <div className="itemContainer">
            <LocalPhone className="icon" />
            <span>(587)-732-0535</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Alvinwu246@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>github.com/AlvinSenWu</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span>www.linkedin.com/in/alvin-wu-/</span>
          </div>
          <div className="itemContainer">
            <FileCopy className="icon" />
            <span>Resume</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
