import trade1 from '../../../assets/images/homepage/CAKE@2x.webp';
import trade2 from '../../../assets/images/homepage/BTC@2x.webp';
import trade3 from '../../../assets/images/homepage/BNB@2x.webp';



export function Trade() {

    return(
        <>

    <div className="background-content-2">
    <div className="container-2">

            <div className="container-text">

                <h2><span>Trade</span> anything. No</h2>
                <h2>registration, no hassle.</h2>
                <h4>Trade any token on BNB Smart Chain in seconds, just by <br/> connecting your wallet.</h4>
                

                        <div className="buttons-home">

                            <button>Trade Now</button>

                            <a href="">Learn</a>

                        </div>
                 
            </div>

            <div className="img-container">
                    

                <img src={trade1} className="trade-1"  alt="trade-1"/>
                <img src={trade2} className="trade-2"  alt="trade-2"/>
                <img src={trade3} className="trade-3"  alt="trade-3"/>
                
            </div>

    </div>
    </div>
        </>
    )
}