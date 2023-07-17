import whitelogo from '../images/tinder_logo_white (1).png'
import colorlogo from '../images/color-logo-tinder.png'

const NavBar = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = true

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