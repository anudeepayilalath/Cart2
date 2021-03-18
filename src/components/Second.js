import React from 'react';
import './Header.css';
import Pwoli from '../pwoli.gif';
import Scroll from '../scrolling.jpg'
import Facebook from '../facebook.png';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
import Man from '../man.gif';
import Man2 from '../man2.gif';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';
import Usflag from '../usflag.png';
import {Link} from 'react-router-dom';


const Second = () =>{
    return(
        <div>
            <div>
                <Link to="/"><img className="langchange" src={Usflag}></img></Link>
            </div>
            <div className="imgdiv">
            
                <img className="giffy" src={Giffy}  ></img>
            
            <div className="title">
                <img src={Mypic} className="Mypic"></img>
            <h1 className="myname"> <span className="Annu">ANUDEEP</span> AYILALATH PUTHALATH  <span className="p">
            <p>"Soy un desarrollador front-end entusiasta y trabajador<br></br>
comprometidos con el aprendizaje y el desarrollo de soluciones creativas. <br></br>Considero la confianza y la satisfacción
de mis superiores y colegas para<br></br> ser el activo más valioso de mi carrera profesional. "  </p></span></h1>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            <h1 className="expert">Áreas de Especialización:</h1>
            <div className="iconsdiv">
                <img src={Man} width="80px"></img>
                <div className="iconz">
                        <img src={Jsp} width="60px"></img>
                        <img src={Rp} width="60px"></img>
                        <img src={Np} width="60px"></img>
                        <img src={Htmlp} width="60px"></img>
                        <img src={Cssp} width="60px"></img>
                        <img src={Pp} width="44px"></img>
                 </div>
                 <img src={Man2} width="80px"></img>

            </div>
            
            </div>

            <img className="mario" src={Scroll}></img>
           <div className="footer">
               <img src={Pwoli} className="pwoli" width="120px"></img>
               <div className="forrow">
               <div className="sicons">
                   <img src={Facebook}width="35px"></img>
                   <p>Facebook</p>
                   <img src={Instagram} width="35px"></img>
                   <p>Instagram</p>
                   <img src={Twitter}width="35px"></img>
                   <p>Twitter</p>
                   <img src={Reddit} width="35px"></img>
                   <p>Reddit</p>
                   
               </div>
               <div>
                   <img src={Mypic} className="bottompic"width="100px"></img>
                   <p className="createdby">Created by Anudeep Ayilalath Puthalath</p>
               </div>
           </div>
           </div>
            
        </div>
    )
}

export default Second;