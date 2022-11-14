import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import BookIssue from './Components/BookIssue';
import Startup from './Components/Startup';
import Book from './Components/BookRecords';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/bookissue' element={<BookIssue/>}></Route>
          <Route path='/Startup' element={<Startup/>}></Route>
          <Route path='/book' element={<Book/>}></Route>
          
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
