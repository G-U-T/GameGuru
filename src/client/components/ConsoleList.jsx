import { Link } from 'react-router-dom';
import '../App.css'

const ConsoleList = () => {
  return (
    <div className="column-flex">
      <Link to="/api/consoles/playstation">PlayStation</Link>
      <Link to="/api/consoles/xbox">XBOX</Link>
      <Link to="/api/consoles/nintendo">Nintendo</Link>
      <Link to="/api/consoles/pc">PC</Link>
    </div>
  );
};

export default ConsoleList;