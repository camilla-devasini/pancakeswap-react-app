import CommonSubmenu from "./components/UI/CommonSubmenu";
import { menuItemsObj } from "./components/helpers/menuItemsObj";
function App () {

  return (
    <div>
        <CommonSubmenu menuItems={menuItemsObj}/>

    </div>
  )
}

export default App;
