import Title from "../Components/Title/Title.jsx";
import Transition from '../Components/Transition/Transition.jsx';
import Selector from '../Components/Selector/Selector.jsx';
import SeparaterLine from "../Components/Separater Line/SeparaterLine.jsx";

function Homepage() {
  return (
    <div className="page-container">
      <Title/>
      <Selector/>
      <Transition source="../public/flowers.jpg"/>

      {/*Welcome message*/}
      <SeparaterLine/>
      <h1 className="heading">
        Welcome to Gentle Health Assessments
      </h1>
    </div>
  );
}

export default Homepage;