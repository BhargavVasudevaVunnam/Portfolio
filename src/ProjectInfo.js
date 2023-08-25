import './ProjectInfo.css'
import { FaGithub} from 'react-icons/fa';
function Projectinfo(props){
    return <div class="projectcards">
            <div id="titlecontainer">
            <p id="title">
                {props.title}
            </p>
            </div>
            <div id="descriptioncontainer">
            <p id="description">
                {props.content}
            </p>
            </div>
            
            <div id="gitcontain">
            <a id="gitcontainl" href={props.link}>
               <FaGithub id="gitlink" className="icon" size={25}/>
            </a>
            </div>
           </div>
}
export default Projectinfo;