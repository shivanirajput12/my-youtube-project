import "./App.css";
import {Provider} from  "react-redux"
import {createBrowserRouter, RouterProvider} from  "react-router-dom"
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from './utils/store'
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage"

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
