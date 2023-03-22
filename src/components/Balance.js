import { useContext, memo } from "react";
import { MyContext } from "./Context";

const Balance = () => {
    
    const {balance,setFaucetModal} = useContext(MyContext)
    
    return(
        <div className="balance">
            <div className="icon-balance"><i className="fa-sharp fa-solid fa-coins"></i> <span>{balance}</span></div>
            <div className="add-balance" onClick={()=>setFaucetModal(true)}><i className="fa-solid fa-plus"></i></div>
        </div>
    )
}
export default memo(Balance);