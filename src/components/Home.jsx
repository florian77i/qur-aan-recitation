import { useEffect,useState } from "react";
import Chapters from "./Chapters";
import Player from "./Player";
import Reciter from "./Reciter";
import axios from 'axios'

const Home = () => {
  const [reciters,setReciters] = useState([])
  const [chapters ,setChapters]= useState([]) 
  
  const [chapterDetail ,setChapterDetail] = useState(null)
  const [reciterDetail ,setReciterDetail] = useState(null)

  useEffect (()=> {
    async function  fetchData(){
    const {
      data :{reciters},
    }= await axios.get(`https://mp3quran.net/api/_english.php`)
    setReciters(reciters)
      }
      fetchData()
    })

    useEffect(() =>{
      async function fetchData(){
        const {
          data :chapters}= await axios.get(`https://api.quran.com/api/v4/chapters`)
        setChapters(chapters)
       
           
          }
          reciters&& reciters.length > 0&& fetchData()
        },[reciters])
        

    const reciterHandler  = (reciter) =>{
      console.log(reciter.id)
      setReciterDetail(reciter)
    }
    const chapterHandler  = (chapter) => {
      console.log(chapter)
      setChapterDetail(chapter)
    }
  return (

  <div className="bg-orange-100  max-h-screen shadow-md rounded flex mx-16 my-16 " >
      
    <main  className='w-80 max-h-screen bg-sky-200 shadow-lg shadow-gray-400 max-h-screen mr-2 my-16 rounded-lg overflow-y-scroll  '>
    <Reciter
     reciters ={reciters} 
      reciterHandler={reciterHandler}
      
       />
    </main>
      
     <main className=" grow bg-sky-900 shadow-lg shadow-gray-400 max-h-screen mr-2 my-16 rounded-lg overflow-y-scroll scroll-m-2">
        <Player
          reciterDetail={reciterDetail}
          chapterDetail={chapterDetail}
        />
     </main>  
     
     <main  className='w-56 max-h-screen bg-primary mr-1   shadow-lg shadow-gray-400  my-16 rounded-md  overflow-y-scroll scroll-m-2'>
     <Chapters  chapters={chapters && chapters.chapters}  chapterHandler={chapterHandler}/>
    </main> 
   
     
  </div>
  );
};

export default Home;
