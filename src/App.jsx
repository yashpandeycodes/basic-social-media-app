import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Postlist from './components/Postlist';
import Create from './components/create';
import Postcardsstore from './components/store/Postcardsstore';
function App() {
  let [Page,setPage]=useState("");
const handleclick=(x)=>{
 setPage(x);
    
}
  return (
    
    <Postcardsstore>
    <div className='Main-container'>
    <Sidebar Page={Page} handleclick={handleclick}></Sidebar>
    <div className='main-content'>
      <Header></Header>
     {Page==="Home"?(<Postlist></Postlist>):(<Create></Create>)};
    <Footer></Footer>
    </div>
    </div>
    </Postcardsstore>
   
  );
}

export default App
