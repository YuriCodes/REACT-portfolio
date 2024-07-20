import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiJavascript} from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {GrReactjs} from 'react-icons/gr';
import {DiNodejsSmall, DiPostgresql} from 'react-icons/di';
import {SiJquery} from 'react-icons/si';
import {BiMobileVibration} from 'react-icons/bi';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {DiSass} from 'react-icons/di';
import {DiMongodb} from 'react-icons/di';

function Intro(){
    return(
        <div>
        <h1 className="big-intro-header">I'm <a href="https://linktr.ee/YuriCodesBot" target="_blank" rel="noreferrer">Yuri</a> </h1>
    <p className="intro-text"> A <span className="deep-blue">Full-Stack Developer with focus a on Front-End, Developer Relations Advocate and Technical Writer.</span> I'm a tireless seeker of the <span className="italics"> why</span> of things, and finding both a good and efficient way of solving problems. <br />
    <br />
    I'm very passionate about <a href="https://yuricodesbot.hashnode.dev/the-ultimate-contribution-guide-to-open-source" target="_blank" rel="noreferrer"> Open Source</a>, Accessibility and all things web. 
    <br />
    <br />
    I'm currently working at <a href="https://supabase.com" target="_blank" rel="noreferrer"> Supabase</a> as a DevRel - 
    <br />
    </p>


    <h1 class="intro-icons">
    <AiFillHtml5 title="HTML5" className="icon" />
    <IoLogoCss3 title="CSS3" className="icon"/>
    <SiJavascript title="JavaScript" className="icon"/>
    <BsBootstrap title="Bootstrap" className="icon"/>
    <FiGithub title="GitHub" className="icon"/>
    <GrReactjs title="React" className="icon" />
    <DiNodejsSmall title="Node.js" className="icon"/>
    <DiSass title="Sass" className="icon"/>
    <DiMongodb title="Mongodb" className="icon"/>
    <AiOutlineConsoleSql title="SQL" className="icon"/>
    <DiPostgresql title="postgresql" className="icon"/>

    <BiMobileVibration title="Responsive Design"/>
    </h1>
    </div>
    )
}

export default Intro;