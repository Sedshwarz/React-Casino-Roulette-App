import React, { useContext, memo } from "react";
import { MyContext } from "./Context";

const BetBoard = () => {

    const {buttons, bet, bConState, clearBet, doubleBet, reBet , fadeBtn , fadeBtn2 , fadeBtn3} = useContext(MyContext)

    return(
        <React.Fragment>
            <div className={!bConState ? "bet-container" : "bet-container disabled-container"}>
                {
                    buttons.map((elm)=>{
                        return(
                            <div key={elm.id} className={elm.class} style={{gridArea: elm.ga}} onClick={(e)=>bet(e,elm.id,"add")} onContextMenu={(e)=>bet(e,elm.id,"del")}>{elm.value}<div className="bet-chip">{elm.betAmount}</div></div>
                        )
                    })
                }

                <button type="button" title="Clear Bet" className={fadeBtn ? "subBtn delBtn disabled-container" : "subBtn delBtn"} onClick={()=>clearBet()}><i className="fa-solid fa-x"></i></button>
                <button type="button" title="Double Bet" className={fadeBtn2 ? "subBtn x2Btn disabled-container" : "subBtn x2Btn"} onClick={()=>doubleBet()}>2x</button>
                <button type="button" className="subBtn" style={{opacity: "0", pointerEvents: "none"}}></button>
                <button type="button" title="Replay" className={fadeBtn3 ? "subBtn agnBtn disabled-container" : "subBtn agnBtn"} onClick={()=>reBet()}><i className="fa-solid fa-rotate-right"></i></button>
            </div>
        </React.Fragment>
    )
}
export default memo(BetBoard);