import { useEffect,useState } from "react";
import Chapters from "./Chapters";
import Player from "./Player";
import Reciter from "./Reciter";
import axios from 'axios'

const Home = () => {
  const [reciters,setReciters] = useState([100])

  useEffect (()=> {
    async function  fetchData(){
    const {
      data :{reciters},
    }= await axios.get(`https://mp3Quran.net/api/_english.php`)
        setReciters(reciters)
      }
      fetchData()
    })
    console.log(reciters);
  return (

  <div className="bg-orange-100  max-h-screen shadow-md rounded flex mx-16 my-16 " >
      
    <main  className='w-80 max-h-60 bg-sky-200 shadow-lg shadow-gray-400 max-h-screen mr-2 my-16 rounded-lg overflow-y-scroll  '>
    <Reciter/> 
    </main>
      
     <main className=" grow bg-sky-900 shadow-lg shadow-gray-400 max-h-screen mr-2 my-16 rounded-lg overflow-y-scroll scroll-m-2">
        <Player/>
     </main>  
     
     <main  className='w-56 max-h-screen bg-primary mr-1   shadow-lg shadow-gray-400  my-16 rounded-md  overflow-y-scroll scroll-m-2'>
     <Chapters/>
    </main> 
   
     
  </div>
  );
};

export default Home;
