import './Projects.css';
import Projectinfo from './ProjectInfo';
function Project(){
return <div id="projectcontainer">
            <div id="projectfunc">
           <Projectinfo title="To Do List" content="This website was designed using React Stack to Create a To Do List"
           link="https://github.com/BhargavVasudevaVunnam/ToDoList"
           />
          
           <Projectinfo title="Calculator" content="This website was designed to create a sample responsive calculator UI using raect"
           link="https://github.com/BhargavVasudevaVunnam/Calculator"/>
       
           <Projectinfo title="Viral N Linked Glycosylation" content="N-Linked Glycosylation Sites were identified by using Machine Learning and Transfer Learning from Human Glycosylation Site Data "
           link="https://github.com/BhargavVasudevaVunnam/ViralN-LinkedGlycosylation"/>
           
           <Projectinfo title="N queens" content="The N-Queen Problem was solved using Hill Climbing Approach" 
           link="https://github.com/BhargavVasudevaVunnam/Nqueens" />
           
           <Projectinfo title="3D Maxima" content="This Project aimes to Identify the maximal point among a given set of 3d points. This data is often used to identify the edge  of 3D Irregular services"
           link="https://github.com/BhargavVasudevaVunnam/3DMaxima-for-a-set-of-3-d-Points"/>
           </div>
       </div>
}
export default Project;