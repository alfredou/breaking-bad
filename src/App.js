import './App.css';
import {useState, useEffect} from 'react'; 
import { Consulta } from './services/peticion';
import Episodes from './components/episodes'  

function App() {   

 const [search, setSearch] = useState('');  
 const [cast, setCast] = useState([]); 
 
 const handleChange=(e)=>{
    setSearch(e.target.value.toLowerCase()); 
  }
  
  useEffect(()=>{ 
   Consulta(search).then(res=> {
     setCast(res)
    }); 
  }
  ,[search])

  return (
    <div className="App">
      <h1 className='title'>Breaking Bad Cast</h1>
      <input onChange={(e)=>handleChange(e)} className='input' type="text" placeholder='insert the name'/>
      {(cast.length > 0) ? (cast.map(ep=>{
        return <Episodes key={ep.char_id}{...ep}/>
      }))
      : <span className='notFound'>actor/actress not exist</span>}
    </div>)    
}
export default App;
