import './Header.css';
import logo from '../images/logo.png';
import unb_logo from '../images/unb_logo.jpg';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div class="logo">
                <Link onClick={() => window.location.assign("/#body")}>
                    <img src={unb_logo} alt="logo UnB" class="unb_logo" width={150}/>
                    <img src={logo} alt="logo observatório de energia" width={50}/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link onClick={() => window.location.assign("/#body")}>Página Inicial</Link></li>
                    <li><Link onClick={() => window.location.assign("/#quem_somos")}>Quem somos</Link></li>
                    <li><Link to="/bancoDados">Banco de dados</Link></li>
                    <li><Link onClick={() => window.location.assign("/#prof")}>Professores</Link></li>
                </ul>
            </nav>
        </header>
    );
}
<Link to=""></Link>
export default Header;