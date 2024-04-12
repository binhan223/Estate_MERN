import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
// import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/search' element={<Search/>}/>

      </Routes>
    </BrowserRouter>
  )
}
