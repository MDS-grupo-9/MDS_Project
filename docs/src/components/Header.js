import './Header.css';
import logo from '../images/logo.png';
import unb_logo from '../images/unb_logo.jpg';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div className="logo">
                <Link onClick={() => window.location.assign("/MDS_Project/#body")}>
                    <img src={unb_logo} alt="logo UnB" class="unb_logo" width={150}/>
                    <img src={logo} alt="logo observatório de energia" width={45}/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link onClick={() => window.location.assign("/MDS_Project/#body")}>Página Inicial</Link></li>
                    <li><Link onClick={() => window.location.assign("/MDS_Project/#quem_somos")}>Quem somos</Link></li>
                    <li><Link to="/MDS_Project/bancoDados">Banco de dados</Link></li>
                    <li><Link onClick={() => window.location.assign("/MDS_Project/#prof")}>Professores</Link></li>
                </ul>
            </nav>
        </header>
    );
}
<Link to=""></Link>
export default Header;