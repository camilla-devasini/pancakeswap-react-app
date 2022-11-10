import FarmsPools from "../components/farms/FarmsPools";
import AccordionPool from "../components/pools/AccordionPool";
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
        </div>
    )
}
export default Pools;