import Navbar from "./components/Navbar";
import Grid from "./screens/Grid";
import Home from "./screens/Home";



function App() {

  let component;
   switch(window.location.pathname)
   {
    case "/":
       component=<Home />;
       break;
    case "/grid":
      component=<Grid />;
      break;
      default:
        component=<Grid />;
   }
   
  return (
    <>
     <Navbar />
      {component}  
    </>
  );
}

export default App;
