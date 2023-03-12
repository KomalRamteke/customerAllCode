import './App.css';
import NavHeader from './modules/NavHeader';
import List from './modules/List';
import Add from './modules/Add';
import Update from './modules/Update';
import Filter from './modules/Filter';
import View from './modules/View';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
   <Router>
       <NavHeader />
     <Routes>
      <Route exact path="/" element={<List/>} />
      <Route exact path="/add" element={<Add/>} />
      <Route exact path="/update/:id" element={<Update/>} />
      <Route exact path="/filter" element={<Filter/>} /> 
      <Route exact path="/one/:id" element={<View/>} /> 
     </Routes>
     </Router>
     
    </div>
    </>
  );
}

export default App;
