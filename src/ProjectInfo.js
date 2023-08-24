import './ProjectInfo.css'
import { FaGithub} from 'react-icons/fa';
function Projectinfo(props){
    return <div class="projectcards">
            <p id="title">
                {props.title}
            </p>

            <p id="description">
                {props.content}
            </p>
            <div id="gitcontain">
            <a id="gitcontainl" href='https://github.com/BhargavVasudevaVunnam'>
               <FaGithub id="gitlink" className="icon" size={25}/>
            </a>
            </div>
           </div>
}
export default Projectinfo;