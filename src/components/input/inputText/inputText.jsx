import "./styles.css";

export default function InputText(props){
    return (

        <input input className={`inputText inputText--${props.variant}`} type="text" placeholder={`${props.placeholder}`} >{props.children}</input>
    );
}