import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Policy from './components/Policy'
import Home from './components/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';





function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          <Header/>

         <Routes>
          <Route path='/' element={<Home/>} />


          <Route path='About' element={<About/>} />
          <Route path='policy' element={<Policy/>} />





         </Routes> 
        </header>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;