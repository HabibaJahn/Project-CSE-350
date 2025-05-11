import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage(){
      return(
            <div className="homePage">
                  <div className="textContainer">
                        <div className="wrapper">
                        <h1 className="title">HomeHunt – Your Trusted Partner</h1>
                        <p>
                              Discover affordable, comfortable, and verified rental homes near you with ease and confidence.
                        </p>
                        <SearchBar/>
                         <div className="boxes">
                              <div className="box">
                                    <h1>16+</h1>
                                    <h2>Years of experience</h2>
                              </div>
                              <div className="box">
                                    <h1>200</h1>
                                    <h2>Award gained</h2>
                              </div>
                              <div className="box">
                                    <h1>2000</h1>
                                    <h2>Property ready</h2>
                              </div>
                         </div>

                        </div>
                  </div>
                  <div className="imgContainer">
                        <img src="/bg.png" alt=""/>
                  </div>
            </div>
      )
}
export default HomePage;