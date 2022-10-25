

const CommonSubmenu = (props) => {


    return (
        <div className="common-navbar-wrapper">
            <ul className="common-navbar">
                {props.menuItems && props.menuItems.map((item, index) =>  {
                    return ( 
                        <div className="single-common-navbar" key={index}>
                            {item.submenu.map((submenu,index) => (

                            <li className="common-navbar-item" key={index}>
                                <span className="common-navbar-link">{submenu.title}</span>
                            </li>))}
                        </div>)
                })}
                
            </ul>
        </div>
    )       

}

export default CommonSubmenu;