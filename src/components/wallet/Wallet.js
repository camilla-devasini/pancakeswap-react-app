import Modal from "../UI/Modal";
import ConnectWallet from "./ConnectWallet";
import wallets from "./walletObj";

const Wallet = props => {
    

    return (
       <Modal onClose={props.onClose}>
          <div>
            <ConnectWallet wallets={wallets} />
            </div>
    
        </Modal>

    ) 
}

export default Wallet;

