import "./App.css";
import {Provider} from  "react-redux"
import {createBrowserRouter, RouterProvider} from  "react-router-dom"
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from './utils/store'
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage"
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/demo",
      element:<><Demo/> <Demo2/></>
    }
  ]
}])
function App() {
  return (
     <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
