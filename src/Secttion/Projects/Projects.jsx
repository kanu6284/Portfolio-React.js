import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://sage-muffin-567c6d.netlify.app"
          h3="Job Portal Website"
          
        />
        <ProjectCard
          src={freshBurger}
          link="https://resonant-peony-f93a67.netlify.app/"
          h3="Registration Form"
         
        />
        <ProjectCard
          src={hipsster}
          link="https://lively-chimera-a39de7.netlify.app"
          h3=" Ecommerce Home Page"
         
        />
        <ProjectCard
          src={fitLift}
          link="https://fanciful-sawine-079858.netlify.app"
          h3="Image Gallery "
         
        />
      </div>
    </section>
  );
}

export default Projects;