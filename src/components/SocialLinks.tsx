import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { info } from '../constants'
import { Link } from './Link'

export default function SocialLinks() {
  return (
    <ul className="flex flex-row justify-center">
      <li>
        <Link href={`${info.github}`} target="_blank" label="GitHub">
          <FiGithub className="text-2xl"></FiGithub>
        </Link>
      </li>
      <li>
        <Link href={`${info.linkedin}`} target="_blank" label="LinkedIn">
          <FiLinkedin className="text-2xl"></FiLinkedin>
        </Link>
      </li>
      <li>
        <Link href={`mailto:${info.email}`} label="Email">
          <FiMail className="text-2xl"></FiMail>
        </Link>
      </li>
    </ul>
  )
}
