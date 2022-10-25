import Header from "./layouts/header/Header";
import CommonSubmenu from "./components/UI/CommonSubmenu";
import { menuItemsObj } from "./components/helpers/menuItemsObj";
function App () {

  return (
    <div>
      <Header />
      <CommonSubmenu menuItems={menuItemsObj}/>

    </div>
  )
}

export default App;
