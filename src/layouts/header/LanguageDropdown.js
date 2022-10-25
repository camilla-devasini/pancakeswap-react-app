import "./style/LanguageDropdown.scss";

const LanguageDropdown = (props) => {

   return ( 
       //props.languages will be the state controlling if the dropdown needs to be visible/hidden.
        <ul className={`lang-list ${props.languages ? "show-lang" : "" }`}> 
            {props.langList && props.langList.map((item, index)=> (
                <li key={index}>{item.language}</li>))
            }
        </ul>

    )
}

export default LanguageDropdown;