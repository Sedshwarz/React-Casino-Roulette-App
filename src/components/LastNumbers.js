import { useContext, memo } from "react";
import { MyContext } from "./Context";

const LastNumbers = ()=> {
    
    const {lastNums, buttons} = useContext(MyContext)
    
    return(
        <div className="last-numbers">
            {
                lastNums.reverse().map((elm,index)=>{
                    return(
                        index < 5 ? <div key={index} className={buttons.filter(elm2=>elm2.value === elm)[0].class}>{elm}</div> : null
                    )
                })
            }
        </div>
    )
}
export default memo(LastNumbers);