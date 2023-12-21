import { Link } from 'react-router-dom';
import '../App.css'

const ConsoleList = () => {
  return (
    <div className="column-flex">
      <Link to="/consoles/playstation">PlayStation</Link>
      <Link to="/consoles/xbox">XBOX</Link>
      <Link to="/consoles/nintendo">Nintendo</Link>
      <Link to="/consoles/pc">PC</Link>
    </div>
  );
};

export default ConsoleList;