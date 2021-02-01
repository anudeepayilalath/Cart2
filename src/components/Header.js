import React from 'react';
import './Header.css';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Cv from '../cv.png';
import Mygif from '../source.gif';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';

const Header = () =>{
    return(
        <div>
            <div className="imgdiv">
            
                <img className="giffy" src={Giffy} width="250px" ></img>
            
            <div className="title">
            <img src={Mypic} className="Mypic"></img>
            <h1 className="myname"> ANUDEEP AYILALATH PUTHALATH  <span className="p">
            <p>"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."
            </p></span></h1>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            <h1 className="expert">Areas Of Expertise:</h1>
                <div className="iconz">
                    <img src={Jsp} width="100px"></img>
                    <img src={Rp} width="100px"></img>
                    <img src={Np} width="100px"></img>
                    <img src={Htmlp} width="100px"></img>
                        <img src={Cssp} width="100px"></img>
                        <img src={Pp} width="88px"></img>
                  
                </div>
            
            
            
            
            
            
            
            </div>
        </div>
    )
}

export default Header;