import "./style/MainButton.scss";

const MainButton = (props) => {
    //default props
    const { theme='primary', label= 'Connect', ...restProps } = props;
    
    return (
        <button onClick={props.onShowWallet}className={`main-btn hover-active-class btn-${theme}`} {...restProps}>
           {props.children}
           <span>{label}</span>
        </button>
    )

}

export default MainButton;


