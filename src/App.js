import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import NewsList from './components/NewsList/NewsList';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleNews from './components/SingleNews'
import { axios } from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact';
import NotFound from './components/NotFound';


const App = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const fetchNews = async() => {
      try{
      const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c19ce1efc664d64aa051402a419c774")
      setNewsList(res.data.articles)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchNews()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<NewsList newsList={newsList}/>} />
          <Route path='/news/:id' element={<SingleNews newsList={newsList}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
