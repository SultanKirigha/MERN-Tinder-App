import NavBar from "../components/NavBar"
const Home = () => {
    const authToken = false
    
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div className="overlay">
        <NavBar minimal={false} authToken={authToken}/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="PrimaryButton" onClick={handleClick}>
                {authToken ? 'SignUP': 'Create Account'}
            </button>
        </div>
        </div>
    )
}

export default Home