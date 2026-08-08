import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreatePost from './CreatePost'
import Feed from './Feed'




const App = () => {
  return (
   <Router>
    <Routes>
      < Route path='/create-post' element= {<CreatePost/>}/>
      < Route path='/feed' element= {<Feed/>}/>
    </Routes>
   </Router>
  )
}

export default App
