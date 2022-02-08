import Chapters from "./Chapters";
import Player from "./Player";
import Reciter from "./Reciter";
const Home = () => {
  return (

  <div className="bg-orange-100  h-screen shadow-md rounded flex mx-16 my-16  overflow-scroll scroll-smooth" >
      
    <sidebar  className='w-60 h-16 bg-sky-200 shadow-lg shadow-gray-400 mr-8 my-16 rounded-lg '>
    <Reciter/> 
    </sidebar>
      
     <main className=" grow bg-sky-900 shadow-lg shadow-gray-400  mr-8 my-16 rounded-lg">
        <Player/>
     </main>  
     
     <sidebar  className='w-40 h-screen bg-primary   shadow-lg shadow-gray-400  my-16 rounded-lg'>
     <Chapters/>
    </sidebar> 
   
     
  </div>
  );
};

export default Home;
