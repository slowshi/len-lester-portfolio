import './App.css'
import ProjectCard from './components/ProjectCard'
import { Link as ReactScrollLink } from 'react-scroll'
import ExperienceAccordion from './components/ExperienceAccordion'
import { info, projects } from './constants'
import SocialLinks from './components/SocialLinks'
function App() {
  return (
    <main className="mx-auto container max-w-screen-lg px-10 pt-5 monokai-white">
      {/* Nav */}
      <header>
        <nav className="flex justify-end">
          <div className="flex justify-between w-full md:w-fit">
            <ReactScrollLink
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-20}
              className="cursor-pointer transition duration-300 ease-in-out monokai-green hover:monokai-bg-green hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
            >
              Experience
            </ReactScrollLink>
            <ReactScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-20}
              className="cursor-pointer transition duration-300 ease-in-out monokai-orange hover:monokai-bg-orange hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
            >
              Projects
            </ReactScrollLink>
            <a
              href={info.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out monokai-red hover:monokai-bg-red hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* About */}
      <section>
        <h1 className="text-center text-7xl sm:text-9xl font-bold mb-2 name-header">{info.name}</h1>
        <h2 className="text-center text-2xl mb-2 monokai-yellow">{info.title}</h2>
        <p className="text-center mb-2 monokai-white">{info.location}</p>
        <section className="mb-20">
          <SocialLinks />
        </section>
        <p className="mb-40 text-center text-xl monokai-white">{info.description}</p>
      </section>

      {/* Experience */}
      <section>
        <h1 className="monokai-green text-4xl text-center text-bold mb-10" id="experience">
          Experience
        </h1>
        <div className="mb-20">
          <ExperienceAccordion />
        </div>
      </section>

      {/* Projects */}
      <section>
        <h1 className="monokai-orange text-4xl text-center text-bold mb-10" id="projects">
          Projects
        </h1>
        <ul className="mb-20">
          {projects.map((project, index) => (
            <li>
              <ProjectCard key={index} project={project}></ProjectCard>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer>
        <h1 className="monokai-red text-4xl text-center text-bold mb-10" id="contact">
          Contact
        </h1>
        <section className="mb-40">
          <SocialLinks />
        </section>
      </footer>
    </main>
  )
}

export default App
