import { Link, useNavigate } from "react-router-dom"
import image5 from '../Assets/image5.png'
import monkey from '../Assets/monkey.png'
import backarrow from '../Assets/backarrow.png'
import next from '../Assets/next.png'
const Intro = () =>{
    const Navigate = useNavigate();
    return (
        <>
            <div style={{ width: "100%", height: "100vh", position: "relative" }}>
                <img src={image5} alt="react logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                  
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "10px" }}>
                        <div>
                            <img src={monkey} alt="monkey" style={{ width: "50%", height: "50%" }} />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px",color:"Green" }}>I like bananas</p>
                            <p style={{ fontSize: "18px",color:"Green" }}>Bananas are my favorite fruit. They're delicious and nutritious!</p>
                        </div>
                    </div>
                    <Link to="/" style={{  cursor: "pointer", marginTop: "20px" , marginRight:"20px" }}>
                    <img src={backarrow} alt="monkey" style={{ width: "20%", height: "20%" }} /></Link>
                    <Link to="/instruction" style={{  cursor: "pointer", marginTop: "20px" , marginRight:"20px" }}>
                    <img src={next} alt="monkey" style={{ width: "50%", height: "50%" }} /></Link>
                   
                    
                    </div>
            </div>
        </>
    );
};
export default Intro