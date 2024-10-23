import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CreateBook from './Pages/CreateBooks'
import EditBook from './Pages/EditBooks'
import DeleteBook from './Pages/DeleteBooks'
import ShowBook from './Pages/ShowBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/books/create' element={ <CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
