import './Page2.css';
import oracle from './assets/Oracle.png';
function Page2(){
    return <div id="SkillsBrag">
                <div id="skills">
                    <h1>Skills</h1>
                    <p id="skillp">
                    Java<br/>
                    Python<br/>
                    Unix<br/>
                    JavaScript<br/>
                    HTML<br/>
                    CSS<br/>
                    SASS<br/>
                    React JS<br/>
                    BootStrap<br/>
                    SpringBoot<br/>
                    Spring<br/>
                    MicroServices<br/>
                    Spring Cloud Gateway<br/>
                    Hibernate<br/>
                    Oracle SQL<br/>
                    My SQL<br/>
                    Selenium<br/>
                    Kafka MQ<br/>
                    Keras<br/>
                    Git<br/>
                    Maven<br/>
                    </p>
                </div>
                <div id="coreinterests">
                    <h1>Core Interests</h1>
                    <p id="coreinterestsp">
                        Data Structures<br/>
                        Web Development<br/>
                        Web scraping<br/>
                        Full Stack Development<br/>
                        Machine Learning<br/>
                        Reinforcement Learning<br/>
                        Artificial Intelligence<br/>
                    </p>
                    <div id="certis">
                        <h1>Certificates</h1>
                        <div id="oracle1"><img id="certificate" src={oracle}/></div>
                    </div>
                </div>
           </div>
}
export default Page2;