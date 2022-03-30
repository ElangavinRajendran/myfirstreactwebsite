import { Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import AllMeetups from "./Pages/AllMeetups";
import FavoriteMeetups from "./Pages/FavoriteMeetups";
import RecentMeetups from "./Pages/RecentMeetups";

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
     
    <Route path = '/' element={ <AllMeetups />}/>
     
   
    <Route path = '/favorites' element={ <FavoriteMeetups />} />
      
    
    <Route path ='/recent' element={ <RecentMeetups />} />
     
    
   
    </Routes>
    
    </div>
  );
}

export default App;
