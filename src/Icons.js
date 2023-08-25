import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from './assets/Bhargav_Resume.pdf';
import { FaFileDownload } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import  './Icons.css';
function Icons(){
return <div className="icons">
    <a className="icon" href="https://www.linkedin.com/in/bhargav-chowdary-696a0417a/">
       <FaLinkedin className="icon" size={25}/>
    </a>
    <a className="icon" href='https://github.com/BhargavVasudevaVunnam'>
       <FaGithub className="icon" size={25}/>
    </a>
    <a className="icon" download="Bhargav_Vunnam_Resume.pdf"  href={resume}>
       <FaFileDownload className="icon" size={19}/>
    </a>
    <a href="https://www.google.com/search?q=3167689268" target='_blank' >
        <FaPhone className="icon" size={19} /> {/* Adjust the size as needed */}
    </a>
</div>
}
export default Icons;