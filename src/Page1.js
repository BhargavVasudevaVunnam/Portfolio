import './Page1.css';
import image from './assets/rot.JPG'
import Icons from './Icons';
function Page1(){
    return <div id="Introduction">
                <div id="header">
                  <p id="Title">Bhargav Vasudeva Vunnam<br/><span id="subheading">Full Stack Developer</span></p>
                  <div id="imagecontainer">
                  <img id="cover" src={image} alt="OOPS check internet"></img>
                  </div>
                  <div id="iconsContainer">
                    <Icons></Icons>
                  </div>
                </div>
                <div id="body">
                   <div id="CrossBlackBoard">
                        <p id="BlackText">
                        <span id="chalk">Hi Bhargav Here, 
                        <br/>
                        <br/>
                        I am a Developer with about 2 years of Professional experience in Full Stack Java Development. I like to solve analytical problems and deliver efficient solutions. Passionate towards different fields of Computer Science. Worked on projects with ReinForcement Learning, Machine Learning, Artificial Intelligence, Bio Informatics as well. <br/><br/>
                        Have a myriad of languages and Frameworks in the palette obtained through experience. Would require very little overhead in getting started with new environments.  Personality wise I am an innovative, motivated individual.
                        </span>
                        </p>
                    </div>
                </div>
            </div>
}
export default Page1;