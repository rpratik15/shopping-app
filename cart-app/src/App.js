/*
Create 2 pages Home and cart

*/
import './App.css';
import NavComponent from './Components/Navbar/NavComponent';
import CustomRoutes from "./CustomRoutes";


function App() {


  return (
    <>
   
    <NavComponent/>
    <div className="App">
   
   <CustomRoutes/>
    </div>
 
    </>
   
  );
}

export default App;
