
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Register from "./pages/admin/Register"
import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard";
import Otp from "./pages/admin/Otp";
import Resetpassword from "./pages/admin/Resetpassword";
import Passwordchange from "./pages/admin/Passwordchange";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
 import ProtectedRoute from "./middleware/ProtectedRoute";
 import Users from "./pages/admin/Users";
 import Home from "./pages/client/Home";
 import About from "./pages/client/About";
 import Contact from "./pages/client/Contact";
 import Shop from "./pages/client/Shop";
 import Blog from "./pages/client/Blog";
import Addproduct from "./pages/admin/product/Addproduct";
import Brand from "./pages/admin/brand/Brand";
import Category from "./pages/admin/category/Category";
import Size from "./pages/admin/size/Size";
function App() {
  return (
    
   <>
           <BrowserRouter>
            <Routes>
                       
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/reset" element={<Resetpassword />} />
              <Route path="/password_reset/:id/:expire" element={<Passwordchange/>} />

          <Route element={<ProtectedRoute/>}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-product" element={<Addproduct />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/category" element={<Category />} />
            <Route path="/size" element={<Size />} />
        
        </Route>

            </Routes>
           </BrowserRouter>
     
   </>
  )
}

export default App
