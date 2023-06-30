import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './App.css'
import ExperienceCard from './components/ExperienceCard'
import experience from './experience.json'
import { Link } from 'react-scroll'

function App() {
  return (
    <div className="mx-auto container max-w-screen-lg px-10 pt-5 monokai-white">
      <div className="flex justify-end">
        <div>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            className="cursor-pointer transition duration-300 ease-in-out monokai-orange hover:monokai-bg-orange hover:monokai-white py-2 px-4 rounded me-2"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            className="cursor-pointer transition duration-300 ease-in-out monokai-green hover:monokai-bg-green hover:monokai-white py-2 px-4 rounded me-2"
          >
            Contact
          </Link>
          <a href="/lenlester_resume.pdf" target="_blank" rel="noopener noreferrer" className="py-2 px-4">
            Resume
          </a>
        </div>
      </div>
      <h1 className="text-center text-7xl sm:text-9xl font-bold mb-2 name-header">Len Lester</h1>
      <h3 className="text-center text-2xl mb-2 monokai-yellow">Software Engineer</h3>
      <p className="text-center mb-20 monokai-white">Glendale, CA</p>
      <p className="mb-40 text-center text-xl monokai-white">
        I'm a passionate software developer with a focus on building web tools.
      </p>

      <h1 className="monokai-orange text-4xl text-center text-bold mb-10" id="projects">
        Projects
      </h1>
      <div className="mb-20">
        {experience.map((project, index) => (
          <ExperienceCard key={index} project={project}></ExperienceCard>
        ))}
      </div>
      <h1 className="monokai-green text-4xl text-center text-bold mb-10" id="contact">
        Contact
      </h1>
      <div className="mb-40 text-center">
        <a
          className="inline-block transition duration-300 ease-in-out monokai-blue hover:monokai-white hover:monokai-bg-blue py-2 px-4 rounded"
          href="https://www.github.com/slowshi"
          target="_blank"
        >
          <div className="flex items-center justify-center">
            <FiGithub className="text-2xl"></FiGithub>
          </div>
        </a>
        <a
          className="inline-block transition duration-300 ease-in-out monokai-blue hover:monokai-white hover:monokai-bg-blue py-2 px-4 rounded"
          href="https://www.linkedin.com/in/len-lester/"
          target="_blank"
        >
          <div className="flex items-center justify-center">
            <FiLinkedin className="text-2xl"></FiLinkedin>
          </div>
        </a>
        <a
          className="inline-block transition duration-300 ease-in-out monokai-blue hover:monokai-white hover:monokai-bg-blue py-2 px-4 rounded"
          href="mailto:lenster921@gmail.com"
        >
          <div className="flex items-center justify-center">
            <FiMail className="text-2xl"></FiMail>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
