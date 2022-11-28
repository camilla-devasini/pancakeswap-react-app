import Modal from "../UI/Modal";
import ConnectYourWallet from "./ConnectYourWallet";
import { wallets } from "./walletObj";
import { ThemeProvider } from "../../context/ColorThemeContext";

const Wallet = (props) => {
  return (
    <ThemeProvider>
      <Modal onClose={props.onClose}>
        <div>
          <ConnectYourWallet wallets={wallets} />
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default Wallet;
