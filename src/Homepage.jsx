import Happy1 from './assets/images/happy1.svg';
import Happy from './assets/images/happy.svg';
import Neutral from './assets/images/neutral.svg';
import Sad from './assets/images/sad.svg';
import Cry from './assets/images/cry.svg';
import './Homepage.css';


function Homepage(){
    return(
        <>
        <div id="mood-trackerr">
            <button className="mood">
                <p style={{backgroundColor:"#4CAF50", height:"60px", width:"80px" }} 
                className='mood-img'>😍</p>
            </button>

            <button className="mood">
                <p  style={{backgroundColor:"#8BC34A", height:"60px", width:"80px" }}
                 className='mood-img'>😊</p>
            </button>

            <button className="mood">
                <p style={{backgroundColor:"#FFC107", height:"60px", width:"80px" }}
                 className='mood-img'>😐</p>
            </button>
            <button className="mood">
                <p style={{backgroundColor:"#FF7043", height:"60px", width:"80px" }} 
                className='mood-img'>😟</p>
            </button>

            <button className="mood">
               <p style={{backgroundColor:"#E53935", height:"60px", width:"80px" }} 
               className='mood-img'>😭</p> 
            </button>

        </div>
        <div id="journal">
            <input className="ip-journal" type="textbox" ></input>
        </div>
        <div id="graph">
        </div>
        <div id="suggestion">
            <input className="ip-suggestion" type="textbox"></input>
        </div>
        
        </>
    )
}
export default Homepage;