import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import IndexPage from './Components/IndexPage.jsx'
import CreatePage from './Components/CreatePage.jsx'
import HomePage from './Components/HomePage.jsx'
import ShowPage from './Components/ShowPage.jsx'
import NavBar from './Components/NavBar.jsx'
import EditPage from './Components/EditPage.jsx'
import ErrorPage from'./Components/ErrorPage.jsx'
import EditItems from './Components/EditItems.jsx'
import './App.css'

function App() {
  return (
   <div className='App'>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vintages" element={<IndexPage />} />
        <Route path="/vintages/shows/:id" element={<ShowPage />} />
        <Route path="/vintages/create" element={<CreatePage />} />
        <Route path="/vintages/edit/:id" element={<EditPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/vintages/delete/:id" element={<EditItems/>} />

      </Routes>
    </Router>
   </div>
        
  
  )
}

export default App
