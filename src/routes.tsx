import { createBrowserRouter } from "react-router-dom";
import AllEvents from './modules/event/pages/AllEvents'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <AllEvents/>
      }
    ]
  }
]);