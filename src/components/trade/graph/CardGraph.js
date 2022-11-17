
import "./style/CardGraph.scss";
import { useState, useEffect } from "react";
import Modal from "../../UI/Modal";
import CardGraphContent from './CardGraphContent';
import CardGraphWrapper from './CardGraphWrapper';



const CardGraph = props => {
   
   const [screenSize, setScreenSize] = useState({
      dynamicWidth: window.innerWidth
   });

   const screenSizeHandler = () => {
         setScreenSize({dynamicWidth: window.innerWidth})
   }

   useEffect(() => {
         window.addEventListener("resize", screenSizeHandler);
         
         return () => {
            window.removeEventListener("resize", screenSizeHandler);
         }

   }, [screenSize])

   return (
      <>
      {window.innerWidth < 575 ? (
         
            <Modal onClose={props.onHandleCloseGraph}>
               <div>
                  <CardGraphWrapper>
                     <CardGraphContent onHandleCloseGraph={props.onHandleCloseGraph} />
                     </CardGraphWrapper>
                  </div>
            </Modal>
     

         ) :
         (
            <>
                  <CardGraphWrapper>
                     <CardGraphContent onHandleCloseGraph={props.onHandleCloseGraph} />
                     </CardGraphWrapper>
            </>
         )
      }
      </>
       
      
   )
}

export default CardGraph;
