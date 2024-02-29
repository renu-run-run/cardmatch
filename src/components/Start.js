import { Link, useNavigate } from "react-router-dom"
import image5 from '../Assets/image5.png'
import start from '../Assets/start.png'
import monkey from '../Assets/monkey.png'

const Start = () =>{
    const navigate = useNavigate();
    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <img src={image5} alt="react logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
           
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                <img src={monkey} alt="monkey" style={{ width: "50%", height: "50%" }} />
                <h1 style={{ marginBottom: "20px", color: "green" }}>Hi, I'm Mizo</h1>
                <Link to="/intro"><img src={start} alt="start" style={{ width: "50%", height: "50%" }} /></Link>
            </div>
        </div>
    );
}
export default Start;
