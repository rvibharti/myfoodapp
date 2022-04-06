import { Link } from 'react-router-dom';
import '../App.css'





function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Login'>LogIn</Link>
        </nav>
    )


}

export default Navbar;
