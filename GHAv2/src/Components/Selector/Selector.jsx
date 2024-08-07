import "./Selector.css";
import Button from "../Button/Button.jsx";

function Selector() {
    return (
        <div className="selector-container">
            <Button label="• Home" otherClasses="selector"/>
            <Button label="• Thermometry" otherClasses="selector"/>
            <Button label="• Other Tests" otherClasses="selector"/>
            <Button label="• Contact" otherClasses="selector"/>
        </div>
    );
}

export default Selector;