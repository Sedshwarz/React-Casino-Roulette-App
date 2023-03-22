import { useContext, useState, memo } from "react";
import { MyContext } from "./Context";

const Faucet = () => {

    const { balance, setBalance, faucetModal, setFaucetModal } = useContext(MyContext)
    const [inpValue, setValue] = useState(100)
    const [addingState, setAddingState] = useState(false)
    let newBalance = parseInt(balance) + parseInt(inpValue);

    const updateBalance = () => {
        setAddingState(true)
        setBalance(newBalance)
        setTimeout(() => {
            setAddingState(false)
            setFaucetModal(false)
        }, 1500)
    }

    return (
        <>
            {
                faucetModal === true ? (

                    <div className="faucet">
                        <div className="faucet-background" onClick={() => setFaucetModal(false)}></div>
                        <div className="faucet-content">
                            <div className="faucet-content-top">
                                <div></div>
                                <span>Chip Faucet</span>
                                <div></div>
                            </div>
                            <div className="faucet-content-middle">
                                <div className="fcm-part1">
                                    <div className="adding-balance">{inpValue}</div>
                                    <div className="new-balance">{newBalance}</div>
                                </div>
                                <div className="faucet-content-shape">
                                    <div className="fcs1"></div>
                                    <div className="fcs2"></div>
                                </div>
                                <div className="faucet-content-range">
                                    <input onChange={e => setValue(e.target.value)} type="range" min="0" max="500" step="50" id="range" value={inpValue} />
                                </div>
                            </div>
                            <div className="faucet-content-bottom">
                                <button type="button" className={!addingState ? "add-balance-button" : "add-balance-button adb-done"} onClick={() => updateBalance()}>
                                    {!addingState ? "ADD BALANCE" : "UPDATED ✓"}
                                </button>
                            </div>
                        </div>
                    </div>

                ) : null
            }
        </>
    )
}
export default memo(Faucet);