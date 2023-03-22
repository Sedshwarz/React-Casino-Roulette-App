import { useContext, memo } from "react";
import { MyContext } from "./Context";

const Board = () => {

    const { buttons, play, playable, rotate, rotate2, hideBall, showItemBall, winnerNumber, gain, animation, winnerEffect } = useContext(MyContext)
    let boardItems = []

    const ellipse = (n, rx, so, wh, cw) => {

        let rotateRatio = 360 / n,
            currentItemRatio = 0;

        const ss = document.styleSheets
        ss[0].insertRule('.innerCircle{  width: ' + String((rx * 2) + wh) + 'px; height: ' + String((rx * 2) + wh) + 'px; }', 1)
        ss[0].insertRule('.board-item{width: ' + wh + 'px;}', 1)

        for (var i = 1; i < n + 1; i++) {
            var newObj = { class: "", number: "", topStyle: "", leftStyle: "", rotStyle: "" }

            let index = i
            const targetBtn = buttons.filter(elm => elm.turn === index.toString())[0]

            newObj.class = `board-item ${targetBtn.class}`
            newObj.number = targetBtn.value
            newObj.topStyle = String(rx + -rx * Math.cos((360 / n / 180) * (i + so) * Math.PI)) + 'px'
            newObj.leftStyle = String(rx + rx * (cw ? Math.sin((360 / n / 180) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (i + so) * Math.PI))) + 'px'

            currentItemRatio += rotateRatio
            newObj.rotStyle = currentItemRatio + 'deg'
            boardItems.push(newObj)
        }
    }

    ellipse(37, 210, 0, 40, true);



    return (
        <div className="board-container">
            <div className={`board ${winnerEffect}`}>
                <div className={animation ? "profitContainer addOpacity": "profitContainer"}>
                    <span id="winnerN">{winnerNumber}</span>
                    <span className="divider"></span>
                    <span id="gained"><font color="#2fe2e1">Gained: </font>{gain}$</span>
                </div>
                <div className="board-middle-vector"></div>
                <div className="board-ball" style={{rotate: rotate + "deg"}}><div className="ball" style={{opacity: hideBall ? "0" : "1"}}></div></div>
                <div className={playable ? "spin-container" : "spin-container disabled-btn"}><button type="button" className="spin" onClick={()=>play()}>PLAY</button></div>
                <div className="outterCircle" style={{rotate: rotate2 + "deg"}}>
                    <div className="innerCircle">
                        {
                            boardItems.map((elm, index) => {
                                return (
                                    <div key={index} className={showItemBall && elm.number === winnerNumber ? elm.class + " activeItem" : elm.class} style={{ top: elm.topStyle, left: elm.leftStyle, rotate: elm.rotStyle }}><span>{elm.number}</span><div className="board-item-top a"></div></div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Board);