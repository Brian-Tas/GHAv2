import './App.css';
import Title from "./Components/Title/Title.jsx";
import Transition from './Components/Transition/Transition.jsx';
import Selector from './Components/Selector/Selector.jsx';

function App() {
  return (
    <div className="page-container">
      <Title/>
      <Selector/>
      <Transition source="../public/flowers.jpg"/>
    </div>
  );
}

export default App;