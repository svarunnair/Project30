
import './App.css';
import Dashboard from './Pages/DashBoard';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';

let token=localStorage.getItem('token')

let main=token?<Dashboard/>:<PublicRoutes/>
function App() {
  return (
    <div className="App">
      
    {/* <PublicRoutes/>
    <PrivateRoutes/> */}
    {main}
    </div>
  );
}

export default App;
