import './Navbar.css';
import Home from './assets/images/home.svg';
import History from './assets/images/history.svg';
import Settings from './assets/images/settings.svg';
import User from './assets/images/user.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate= useNavigate();
    return (
        <>
            <div id='navbar'>
                <h3 id='title' >Mental Health Tracker</h3>

                <button className='nav-button' onClick={()=>navigate('/') } >
                    <img className='nav-img' src={Home}></img>
                    <p className='para'>Home</p>
                </button>

                <button className='nav-button' onClick={()=>navigate('/history')}>
                    <img className='nav-img' src={History}></img>
                    <p className='para'>History</p>                </button>

                <button className='nav-button' onClick={()=>navigate('/settings')}>
                    <img className='nav-img' src={Settings}></img>
                    <p className='para'>Settings</p>
                </button>

                <button id='user'>
                    <img className='user-img' src={User}></img>
                    <p className='para'>User</p>
                </button>
            </div>
        </>
    )
}
export default Navbar;