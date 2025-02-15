import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import * as ackeeTracker from 'ackee-tracker'
import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'

const handleEggs= (instance, type) => {
  instance.action('65c815be-5800-4eda-a266-a21143f4cc6f', { key: type, value: 1 })
}

export default function Education ({ name }) {
  let instance
  if (typeof window !== 'undefined') {
    instance = ackeeTracker.create('https://stats.anthony-adam.fr', {
      detailed: false,
      ignoreLocalhost: false,
      ignoreOwnVisits: false
    })
  }

  return (
    <div>
      <ChannelDefaultMessage name={ name } description="ça fait long dis donc !"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">En autodidacte :</p>
          <br/>
          <ul>
            <Tippy onMouseOver={() => handleEggs(instance, 'education')} content="Wow, c'était il y'a si longtemps" placement="top-start"><li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2014</span> - HTML / CSS</li></Tippy>
            <li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2015</span> - "Concevez votre site web avec PHP et MySQL"</li>
            <li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2016</span> - "Démarrez votre projet avec python"</li>
          </ul>
          <br/>
          <ul>
            <li><img src="/img/emoji/udemy.svg" className="emoji-s" alt="logo Udemy"/> <span className="italic">2018-2019</span> - Formation "Développeur web"</li>
            <li><img src="/img/emoji/udemy.svg" className="emoji-s" alt="logo Udemy"/> <span className="italic">2020</span> - Formation "JS : le guide Ultime (ES6/ES7)</li>
          </ul>
          <br/>
          <ul>
            <li>👨‍💻<span className="italic">2020</span> - MOOC ANSSI sur la cybersécurité et les enjeux des outils numériques</li>
            <li><img src="/img/emoji/panda_cool.png" className="emoji-s" alt="emoji Panda"/> <span className="italic">2014 - aujourd'hui</span> - En perpétuel apprentissage...</li>
          </ul>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Scolaire :</p>
          <br/>
          <ul>
            <li><img src="/img/emoji/plane.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2015</span> - Brevet d'initiation à l'aéronautique</li>
            <li><img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2015</span> - Brevet des collèges - mention "assez bien"</li>
            <li><img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2019</span> - Baccalauréat Économique & Social - Mention "Bien"</li>
            <li><img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2021</span> - DUT MMI (Métier du multimédia et de l'internet)</li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
