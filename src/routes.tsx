import { createBrowserRouter } from "react-router-dom";
import AllEvents from './modules/event/pages/AllEvents'
import App from './App'
import AllUsers from "./modules/user/pages/AllUsers";
import CreateEvent from "./modules/event/pages/CreateEvent";
import CreateUser from "./modules/user/pages/CreateUser";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <AllEvents/>
      },
      {
        path: '/usuarios',
        element: <AllUsers/>
      },
      {
        path:"criar-evento",
        element: <CreateEvent/>
      },
      {
        path:"criar-usuario",
        element: <CreateUser/>
      },
    ]
  }
]);