import NavBar from "../components/NavBar"
import AuthModal from "../components/AuthModal"
import {useState} from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
    }

    const authToken = false
    
    
    return (
        <div className="overlay">
        <NavBar minimal={false} authToken={authToken} setShowModal={setShowModal}/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="PrimaryButton" onClick={handleClick}>
                {authToken ? 'Signout': 'Create Account'}
            </button>

            {showModal && <AuthModal setShowModal={setShowModal} />}


        </div>
        </div>
    )
}

export default Home