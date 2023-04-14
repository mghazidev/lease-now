import './navbar.css';
import svg from './images/Screenshot_2023-04-05_171402-removebg-preview (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='nav-component'>
                <div className='component'>
                    <div className='navbar'>
                        <div className='logo'>
                                <img src={svg} alt={svg}></img>
                        </div>
                        <div className='menu'>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/">Projects</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <div className='search-bar'> 
                                <input placeholder='search'></input><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar