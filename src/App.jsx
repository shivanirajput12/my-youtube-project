import "./App.css";
import {Provider} from  "react-redux"
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from './utils/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header/>
      <Body/>

      {/* 
       head
       body
        --sidebar
            --menuItems
        --maincontainer
            buttonList
            videoContainer
               --videoCard
    

      
      */}
      </Provider>
    </div>
  );
}

export default App;
