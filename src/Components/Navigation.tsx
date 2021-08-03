import { Link } from "react-router-dom"
import Img from '../Images/TrakLabs logo.png'
import '../App.css';

const Navigation = () =>{
    return (
        <div>
            <div className="NavbarDiv">
        <Link to='/'><img src={Img} alt='TrakLabs Logo'></img></Link>
        <Link to='/employee'><button style={{margin:'10px', fontFamily:'sans-serif', textTransform:"uppercase", padding:'0',cursor:'pointer'}}>Employee</button></Link>
        <Link to='/department'><button style={{margin:'10px', fontFamily:'sans-serif', textTransform:"uppercase", padding:'0',cursor:'pointer'}}>Department</button></Link>
        </div>
        </div>
    );
}

export default Navigation;