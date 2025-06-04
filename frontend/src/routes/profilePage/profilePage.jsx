import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss'
import { Link } from 'react-router-dom';
import apiRequest from './../../../../backend/lib/apiRequest';

function profilePage(){
      const handleLogout = async() =>{
            try{
                  const res = apiRequest.post("/auth/logout");
            }
            catch(err){
                  console.log(err);
            }
      };
      return(
            <div className="profilePage">
                  <div className="details">
                        <div className="wrapper">
                              <div className="title">
                                    <h1>User Information</h1>
                                    <button>Update Profile</button>
                              </div>
                              <div className="info">
                                    <span> Avatar: <img src ="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> </span>
                                    <span>Username :<b>John Doe</b> </span>
                                    <span>E-mail : <b>johndoe@gmail.com</b></span>
                                    <button onClick={handleLogout}>Logout</button>
                              </div>
                              <div className="title">
                                    <h1>My List</h1>
                                    <button>Add New Post</button>
                              </div>
                              <List/>
                              <div className="title">
                                    <h1>Save List</h1>
                              </div>
                              <List/>
                        </div>
                  </div>
                  <div className="chatContainer">
                        <div className="wrapper">
                              <Chat/>
                        </div>
                  </div>
            </div>
      )
}
export default profilePage;