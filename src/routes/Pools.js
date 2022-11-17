import FarmsPools from "../components/farms/FarmsPools";
import AccordionPool from "../components/pools/AccordionPool";
import FinalImgPool from "../components/pools/FinalImgPool";
import PoolsHeader from "../components/pools/PoolsHeader";
import PoolsNav from "../components/pools/PoolsNav";

function Pools() {
    return (
        <div>
            <FarmsPools />
            <PoolsHeader />
            <br />
            <PoolsNav />
            <br />
            <AccordionPool />
            <FinalImgPool />
        </div>
    )
}
export default Pools;