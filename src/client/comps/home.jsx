import App from '../App.jsx';
import Nintendologo from '../assets/nintendo.png';
import Playstationlogo from '../assets/playstation.png';
import Xboxlogo from '../assets/xbox.png';
import Pclogo from '../assets/pc.png'; 


const Home = () => {
  return (
    <>
   <div classname="title">
    <h1>GAME GURUS</h1>
   </div>
   
   <span>
    <h2 classname="search">search title by console</h2>
    <div>
    <a href=""><img src={Pclogo} alt="pc logo" /></a>        
    </div>
    <div>
    <a href=""><img src={Xboxlogo} alt="xbox logo" /></a>
    </div>
    <div>
    <a href=""><img src={Playstationlogo} alt="playstation logo" /></a>
    </div>
    <div>
    <a href=""><img src={Nintendologo} alt="nintendo logo" /></a>
    </div>
</span>
// code here will have link to  game with highest rating
// code here will have link to with most reviews
// code here will have link to  game with most recent reviews
//code here will have link to  game with most recent release
    </>
  );
}

export default Home;