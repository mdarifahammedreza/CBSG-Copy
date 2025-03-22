import { createBrowserRouter } from "react-router";
import About from "./Page/About";
import Contacts from "./Page/Contacts";
import Home from "./Page/Home";
import Practice from "./Page/Practice";
import Services from "./Page/Services";
import Team from "./Page/Team";
import Work from "./Page/Work";
import Root from "./Root";
import AssignmentPage from "./Sub-Page/AssignmentPage";
import BlockPage from "./Sub-Page/Home/Blog";
import PracticeChild from "./Sub-Page/Practice/PracticeChild";
import Child_Organization_Development from "./Sub-Page/Services/Child_Organization_Development/Child_Organization_Development";
import Organization_Development from "./Sub-Page/Services/Organization_Development";
import Reacher_Evaluation from "./Sub-Page/Services/Research_Evaluation";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{
        path: "/",
        element: <Home/>,
      //   children: [],
      },
  
  
     
      {
        path: "/About",
        element: <About/>,
      //   children: [],
      },
      {
        path: "/blog/:id",
        element: <BlockPage/>,
      //   children: [],
      },
  
  
      {
        path: "/Services",
        element: <Services/>,
      
      },
      {
        path: "/Services/Research&Evaluation",
        element: <Reacher_Evaluation/>,
        children:[
          {
            path: "/Services/Research&Evaluation/:Subpath",
            loader: ({params}) => {return params.Subpath}, 
            errorElement:<div>Sorry Content Not found</div>,
            element: <Child_Organization_Development />,
          }
        ]
      },
      {
        path: "/Services/Organization-Development",
        element: <Organization_Development/>,
        
      },
      {
        path: "/Services/Organization-Development/:id",
        
        element: <Child_Organization_Development />,
      },

  
      {
          path: "/practice-areas",
          element: <Practice/>,
          
            
          
      },
      {
        path: "/practice-areas/:id",
        element: <PracticeChild/>,
      },
  
  
      {
          path: "/team",
          element: <Team/>,
        //   children: [],
      },
  
  
      {
          path: "/Work&reach",
          element: <Work/>,
        //   children: [],
      },
      {
        path: "assignments/:id",
        element: <AssignmentPage />,
      },
  
      {
          path: "/contacts",
          element: <Contacts/>,
        //   children: [],
      },  ],
    },  
  ]);
  export default router;
  