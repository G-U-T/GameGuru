import { Link } from 'react-router-dom';
import '../App.css'

const ConsoleList = () => {
  return (
    <div className="gallery">
      <Link to="/consoles/playstation">PlayStation
      <img src='/playstation.jpg' alt="PlayStation Logo" />
      </Link>
      
      <Link to="/consoles/xbox">Xbox
      <img src='/xbox.jpg' alt="Xbox Logo" />
      </Link>
      
      <Link to="/consoles/nintendo">Nintendo
      <img src='/nintendo.png' alt="Nintendo Logo" />
      </Link>
      
      <Link to="/consoles/pc">PC
      <img src='/pcgames2.png' alt="PC games Logo" />
      </Link>
    </div>
  );
};

export default ConsoleList;