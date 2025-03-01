import React ,  { useState, useEffect }from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditBooks() {
  const [title,setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publicationYear, setPublishYear] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams();


  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/${id}`)
    .then((response) =>{
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setTitle(response.data.title)
      setLoading(false)
    })
    .catch((error) =>{
      setLoading(false)
      console.log(error)
    })
  },[])



  const handleEditBook = () => {
    const data = {
      title,
      author,
      publicationYear
    };
    setLoading(true);
    axios.put(`http://localhost:5555/${id}`, data)
    .then(() =>{
      setLoading(false);
      navigate('/');
    })
    .catch((err) => {
      console.log(err)
      setLoading(false);
    });
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {
        loading ? <Spinner /> : ""
      }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type="text"
           name="" 
           id=""
           value={title} 
           onChange={(e) => setTitle(e.target.value)}
           className="border-2 border-gray-500 px-4 py-2 w-full" 
           />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type="text"
           name="" 
           id=""
           value={author} 
           onChange={(e) => setAuthor(e.target.value)}
           className="border-2 border-gray-500 px-4 py-2 w-full" 
           />
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type="text"
           name="" 
           id=""
           value={publicationYear} 
           onChange={(e) => setPublishYear(e.target.value)}
           className="border-2 border-gray-500 px-4 py-2 w-full" 
           />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save Changes</button>
      </div>
    </div>
  )
}

export default EditBooks