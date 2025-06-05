import "./Homepage.scss";
import hotel1 from "../../assets/hostel1.jpeg";
import hotel2 from "../../assets/hostel4.jpeg";
import hotel3 from "../../assets/hostel5.jpeg";
import hotel4 from "../../assets/hostel2.jpeg";
import Searchbar from "../../components/Searchbar/Searchbar";

function Homepage(){
    return (
        <div className="homepage">
            <div className="txtcontainer">
                <div className="wrapper">
                    <h1 className="title">
                        Welcome to Lodgify!
                    </h1>
                    <p>Find Your Perfect Mess — Safe, Affordable, Trusted</p>
                    <Searchbar/>
                </div>      
            </div>
            <div className="imgcontainer">
                <div className="image-grid">
                    <img src={hotel1} alt="Hotel 1" />
                    <img src={hotel2} alt="Hotel 2" />
                    <img src={hotel3} alt="Hotel 3" />
                    <img src={hotel4} alt="Hotel 4" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;