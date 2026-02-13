
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Modules from "./pages/modules"
import Community from "./pages/community"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import routes from './utils/routes'

function App() {
  return (
    <>
   <div className='App'>
   
    <Navigation/>
      <Routes>
        <Route path = {routes.Home} element = {<Home/>}></Route>
        <Route path = {routes.About} element = {<About/>}></Route>
        <Route path = {routes.Modules} element = {<Modules/>}></Route>
        <Route path = {routes.Community} element = {<Community/>}></Route>
      </Routes>
    <Footer/>
  
   </div>
   </>
  )
}

export default App
