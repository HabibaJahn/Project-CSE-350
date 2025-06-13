import { useContext } from 'react';
import './profileUpdatePage.scss'
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import apiRequest from './../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../../components/uploadWidget/UploadWidget';

function ProfileUpdatePage(){
      const {currentUser,updateUser} = useContext(AuthContext);
      const [error,setError] = useState("");
      const [avatar,setAvatar] = useState(currentUser.avatar);
     

      const navigate = useNavigate();

      const handleSubmit = async (e) =>{
            e.preventDefault()
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const email = formData.get("email");
            const password = formData.get("password");
            // const avatar = formData.get("avatar");
            try{
                  const res = await apiRequest.put(`/users/${currentUser.id}`,{
                        username,
                        email,
                        password,
                        avatar,
                  });
                  updateUser(res.data);
                  navigate("/profile");
                  // console.log(res.data); 

            }catch(err){
                  console.log(err);
                  setError(err.response.data.message);
            }
      }
      return(
            

            <div className="profileUpdatePage">
                  <div className="formContainer">
                        <form onSubmit={handleSubmit}>
                              <h1>Update Profile</h1>
                              <div className="item">
                                    <label htmlFor="username">Username</label>
                                    <input 
                                          id = "username"
                                          name = "username"
                                          type = "text"
                                          defaultValue={currentUser.username}
                                    />
                              </div>
                              <div className="item">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                          id ="email"
                                          name = "email"
                                          type = "email"
                                          defaultValue={currentUser.email}
                                    />
                              </div>
                              <div className="item">
                                    <label htmlFor="password">Password</label>
                                    <input id = "password" name = "password" type = "password" />

                              </div>
                              <button>Update</button>
                              {error && <span>{error}</span>}
                        </form>
                  </div>
                  <div className="sideContainer">
                        <img src =  {avatar || "/noavatar.png"}  alt = "" className="avatar"/>
                        <UploadWidget uwConfig={{
                              cloudName: "dopgdbfyt",
                              uploadPreset: "HomeHunt",
                              multiple:false,
                              maxImageFileSize: 2000000,
                              folder: "avatars",
                        }}
                        setAvatar = {setAvatar}
                        />
                  </div>
            </div>
      )
}
export default ProfileUpdatePage;