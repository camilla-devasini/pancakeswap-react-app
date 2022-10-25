import "./style/MainButton.scss";

const MainButton = (props) => {
    //default props
    const { theme='primary', label= 'Connect', ...restProps } = props;
    
    return (
        <button className={`main-btn hover-active-class btn-${theme}`} {...restProps}>
           <span>{label}</span>
           {props.children}
        </button>
    )

}

export default MainButton;


