import React,{ useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import MenuRoutes from './MenuRoutes';
import MenuIcon from './img/icons/menu.png';
import './App.css';
import Language from './languages/Language';
function App() {
  const [showMenu,setShowMenu] = useState(true);
  const openClose = ()=>{
    const menu = document.getElementById('menu');
    if(showMenu){
      
        menu.style="display:flex";
        setShowMenu(false);
    }else{
        menu.style="display:none";
        setShowMenu(true);
    }
  };
  return (
    <div className="App">
      <div className="menu-button" onClick={openClose}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
      <Router >
        <MenuRoutes lang={Language}/>
        <Routes lang={Language}/>
      </Router>
    </div>
  );
}

export default App;
