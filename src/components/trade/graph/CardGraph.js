
import "./style/CardGraph.scss";
import CardGraphContent from './CardGraphContent';
import CardGraphWrapper from './CardGraphWrapper';


const CardGraph = props => {

   
   return (
      <CardGraphWrapper>
         <CardGraphContent onHandleCloseGraph={props.onHandleCloseGraph} />
      </CardGraphWrapper>
   )
}

export default CardGraph;
