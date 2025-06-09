import { createContext,useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
      const [currentUser, setCurrentUser] = useState( () =>{
            try{
                  const storedUser = localStorage.getItem("user");
                  if(!storedUser || storedUser === undefined) return null;
                  return JSON.parse(storedUser);
            } catch(err){
                  console.error("Erros parsing user from localstorage",err);
            }
      });
      const updateUser = (data) =>{
            setCurrentUser(data);
      };
      useEffect(()=>{
            localStorage.setItem("user", JSON.stringify(currentUser))
      },[currentUser]);

      return (
            <AuthContext.Provider value={{currentUser,updateUser}}>
                  {children}
            </AuthContext.Provider>
      );
};