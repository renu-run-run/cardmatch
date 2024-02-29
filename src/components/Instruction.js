import { Link, Navigate, useNavigate } from "react-router-dom"
import image5 from '../Assets/image5.png'
import monkey from '../Assets/monkey.png'
import backarrow from '../Assets/backarrow.png'
import play from '../Assets/play.png'

const Instruction = () =>{
    const Navigate = useNavigate();
    return (
        <>
            <div style={{ width: "100%", height: "100vh", position: "relative" }}>
                <img src={image5} alt="react logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                    <h1 style={{ marginBottom: "20px", color: "Green" }}>Matching Card Game</h1>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "10px" }}>
                        <div>
                            <img src={monkey} alt="monkey" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", color: "Green" }}>How to Play:</p>
                            <p style={{ fontSize: "18px", color: "Green" }}>Match the pairs of cards by flipping them over two at a time. If the images on the cards match, they will stay face up. If they don't match, they will flip back over. Continue until all pairs are matched.</p>
                        </div>
                    </div>
                    
                    <Link to="/intro" style={{  cursor: "pointer", marginTop: "20px" , marginRight:"20px" }}>
                    <img src={backarrow} alt="monkey" style={{ width: "15%", height: "15%" }} /></Link>
                    <Link to="/game" style={{  cursor: "pointer", marginTop: "20px" , marginRight:"20px" }}>
                    <img src={play} alt="monkey" style={{ width: "40%", height: "40%" }} /></Link>
                   
                </div>
            </div>
        </>
    );
    
}
export default Instruction

