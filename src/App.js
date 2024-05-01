import {  BrowserRouter,  Routes,  Route }   
from 'react-router-dom';  
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import VerifyEmailPage from './pages/VerifyEmailPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profilepage' element={<ProfilePage />}/>
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path='/verify-email' element={<VerifyEmailPage />} />

      </Routes>
    </BrowserRouter>
   
    // <div>
    //   <WelcomePage />
    // </div>
    
  );
}

export default App;
