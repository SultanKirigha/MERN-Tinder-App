import Header from "../components/Header";
import TinderCards from "../components/TinderCards";
import SwipeButton from "../components/SwipeButton";

const Dashboard = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Swipe Section */}
      <TinderCards />
      {/* action */}
      <SwipeButton/>
    </div>
  );
};

export default Dashboard;