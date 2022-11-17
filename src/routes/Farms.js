import FarmsPools from "../components/farms/FarmsPools"
import FarmsHeader from "../components/farms/FarmsHeader"
import FarmsNav from "../components/farms/FarmsNav"
import FarmsAccordion from "../components/farms/FarmsAccordion"
import FinalImg from "../components/farms/FinalImg"

function Farms() {
    return (
        <div>
            <FarmsPools />
            <FarmsHeader />
            <br />
            <FarmsNav />
            <br />
            <FarmsAccordion />
            <br />
            <FinalImg />
            </div>
    )
}
export default Farms;