import Modal from "../UI/Modal";
import ConnectYourWallet from "./ConnectYourWallet";
import { wallets } from "./walletObj";

const Wallet = props => {
    

    return (
       <Modal onClose={props.onClose}>
          <div>
            <ConnectYourWallet wallets={wallets} />
          </div>
        </Modal>

    ) 
}

export default Wallet;

