
import './App.css';

import Grid from './components/Grid';
import { Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Intro from './components/Intro';
import Instruction from './components/Instruction';

function App() {
  return (
    <div className="App">
   
    <Routes>
     
       <Route path='/' element={<Start/>}/>
       <Route path='/intro' element={<Intro/>}/>
       <Route path='/instruction' element={<Instruction/>}/>
       <Route path='/game' element={<> <Grid/></>}/>
    </Routes>
  
    
    </div>
  );
}

export default App;
