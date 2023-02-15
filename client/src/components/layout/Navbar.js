import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';


function Navbar() {

    return (

        <header className={classes.header}>
            <div className={classes.logo}>Burning Money</div>
            <nav>
                <ul>

                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <a href="#about-us">About Us</a>
                    </li>

                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                    <li>
                        <Link to='/dashboard'>My Profile</Link>
                    </li>

                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>

                    <li>
                        <Link to='/signup'>Sign up</Link>
                    </li>

                </ul>
            </nav>
        </header>

    );

}

export default Navbar;



