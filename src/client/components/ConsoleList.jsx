import { Routes, Route, Link } from 'react-router-dom';
import '../App.css'

const ConsoleList = () => {
  return (
    <div className="column-flex">
      <Link to="/consoles/playstation">PlayStation</Link>
      <Link to="/consoles/playstation">XBOX</Link>
      <Link to="/consoles/playstation">Nintendo</Link>
      <Link to="/consoles/playstation">PC</Link>
    </div>
  );
};

export default ConsoleList;