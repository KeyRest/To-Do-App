import "./styles.css";

export default function Button(props){
    return (
        <button onClick={props.onClickCustom}
        className={`button button--${props.variant}`}>
            {props.children}
        </button>
    );
}
