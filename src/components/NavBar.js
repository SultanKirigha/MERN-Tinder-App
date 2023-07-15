import whitelogo from '../images/tinder_logo_white.png'
import colorlogo from '../images/tinder.png'

const NavBar = ({ minimal, authToken, setShowModal, showModal }) => {

    const handleClick = () => {
        setShowModal(true)
    }
    return (
    <nav>
        <div className="logo-container">
            <img className="logo" src={minimal ? colorlogo : whitelogo}/>
        </div>
        {!authToken && !minimal && <button 
            className='nav-button' 
            onClick={handleClick} 
            disabled={showModal}
        >Log In</button>}
    </nav>

    )
}

export default NavBar