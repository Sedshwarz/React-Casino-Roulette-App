import { useContext, memo } from "react";
import { MyContext } from "./Context";

const Confetti = () => {
    
    const {animation,svgContainer} = useContext(MyContext)
    
    return(
        <div className="svgContainer" style={{opacity: animation ? "1" : "0"}} ref={svgContainer}></div>
    )
}
export default memo(Confetti);