import "./styles.css";

export default function Button(props){
    return (
        <button
        className={`button button--${props.variant}`}>
            {props.children}
        </button>
    );
}
