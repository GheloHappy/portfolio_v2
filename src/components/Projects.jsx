import '../css/projects.css'
import { projects_details } from './infos/ProjectsInfo'

const Projects = () => {
    return (
        <div className='projects-page' id='projects'>
            <h1>Projects</h1>
            <div className='prj-inner-grid'>
                {projects_details.map((value, index) => (
                    <div className='prj-inner-tiles' key={index}>
                        <div className='prj-inner-tiles-img'>
                            <img src={value.img} alt={value.label} />
                        </div>
                        <div className='prj-inner-tiles-details'>
                            <h2>{value.label}</h2>
                            <p>{value.summary}</p>
                        </div>
                        <div className='prj-inner-tiles-techs'>
                            <h3>Development Stack</h3>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects