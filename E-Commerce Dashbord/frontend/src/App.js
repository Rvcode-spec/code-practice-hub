import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddProduct from './Components/AddProduct'
import FooterUI from './Components/FooterUI';
import Nav from './Components/Nav';
import PrivateRoute from './Components/PrivateRoute';
import ProductsList from './Components/ProductsList';
import UpdateList from './Components/UpdateList';
import Login from './Comp-2/Login';
import SignUp from './Comp-2/SignUp'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element = {<PrivateRoute/>}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateList/>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <FooterUI/>
    </div>
  );
}

export default App;
