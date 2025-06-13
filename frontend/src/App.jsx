import Homepage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import {Layout,  RequireAuth } from  "./routes/layout/layout";
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';
import Register from './routes/register/register';
import Login from './routes/login/login';
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";



function App() {
  


const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: < Homepage />,
          },
          {
            path: "/list",
            element: <ListPage />,
            
          },
          {
            path: "/:id",
            element: <SinglePage />,
            
          },
          {
            path: "/register",
            element: <Register/>
          },{
            path: "/login",
            element: <Login/>
          }
        ]
      },
      {
            path:"/",
            element:<RequireAuth/>,
            children: [
            
                  {
                        path: "/profile",
                        element: <ProfilePage />,
                  },
                  {
                        path: "/profile/update",
                        element: <ProfileUpdatePage />,
                  }
            
          
            ],
      }
      
    ]);

    return <RouterProvider router={router} />;
}

export default App