import FarmsHeader from "../components/farms/FarmsHeader";
import FarmsNav from "../components/farms/FarmsNav";
import FarmsAccordion from "../components/farms/FarmsAccordion";
import FinalImg from "../components/farms/FinalImg";
import { farmValue } from "../components/helpers/farmValueObj";

function Farms() {
  return (
    <div>
      <FarmsHeader />

      <FarmsNav />
      <div className="accordion-map">
        {farmValue.map((info) => (
          <FarmsAccordion info={info} />
        ))}
      </div>

      <FinalImg />
    </div>
  );
}
export default Farms;
