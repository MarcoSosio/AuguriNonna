import s from "./Auguri.module.scss"
import two_candle from "../../assets/two_candle.svg"
import eight_candle from '../../assets/eight_candle.svg';
import b_icon from "../../assets/birthday_icon1.png"

export default function Auguri(){
    return (
        <div className={s.container}>
            <div className={s.auguriContainer}>
                <img src={b_icon} className={s.b_icon}></img>
                <img src={b_icon} className={s.b_icon}></img>
                <div className={`${s.auguri} nabla-f`}>
                    <div className={s.text}>
                        TANTI<br></br> AUGURI
                    </div>
                    <div className={s.numImgContainer}>
                        <img className={s.numImg} src={eight_candle}></img>
                        <img className={s.numImg} src={two_candle}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}