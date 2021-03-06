import { CMS_NAME } from '../lib/constants'
import ProfileIcon from './ProfileIcon';

export default function Intro() {
  return (
    <div>
      <ProfileIcon></ProfileIcon>
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Adriano Informations
      </h1>
      {<h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Um blog para informações diversas de tecnologia
      </h4>}
    </section>
    </div>
  )
}
