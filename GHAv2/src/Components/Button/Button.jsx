import "./Button.css"

function Button(props) {
    return(
        <div className="button-container">
            <a href={props.link || "#"}>
                <button className={`button whitespace-nowrap ${props.otherClasses}`}>{props.label}</button>
            </a>
        </div>
    );
}

export default Button;