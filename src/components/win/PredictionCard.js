function Prediction(props) {

    return (
    //  expired-card = classe per opacity 0.65 per le cards expired (diventa 1 con hover)
        <div clasName="prediction-card expired-card"> 
        <header clasName="prediction-header">
            <div>
                <img clasName="prediction-icons" src="../../../svg/prohibition.svg" alt="prohibition sign"/>
                <span>{props.title}</span>
            </div>
            <span>{props.orderNumber}</span>
        </header>

        <div clasName="prediction-content">
            <div clasName="prediction-label">
                <div clasName="prediction-shape">
                    <img src="../../../svg/gray-shape-up.svg" alt=""/>
                </div>
                <div clasName="prediction-text">
                    <span>{props.upOrDown}</span>
                    <div>
                        <span></span>
                        <span>Payout</span>
                    </div>  
                </div>
            </div>

            <div clasName="prediction-info">
                <span>closed price</span>
                
                <div clasName="prediction-grid">
                    <div clasName="info-grid1"><span>&dollar;245.9685</span></div>
                    <div clasName="info-grid2">
                         <img src="../../../svg/arrow-up.svg" alt="arrow up"/>
                         <img src="../../../svg/arrow-down.svg" alt="arrow down"/>
                         <span>&dollar;-0.87</span>

                    </div>
                    <div clasName="info-grid3"><span>Locked Price:</span></div>
                    <div clasName="info-grid4"><span>268.9837</span></div>
                    <div clasName="info-grid5"><span>Prize Pool:</span></div>
                    <div clasName="info-grid6"><span>34.987 BNB</span></div>   
                </div>
            </div>

            <div clasName="prediction-label">
                <div clasName="prediction-shape">
                    <img src="../../../svg/grey-shape-down.svg" alt=""/>
                </div>
                <div clasName="prediction-text pred-reverse">
                    <span>DOWN</span>
                    <div>
                        <span>1.78x</span>
                        <span>Payout</span>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    )
}
export default Prediction;