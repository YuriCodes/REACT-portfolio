import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiJavascript} from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {GrReactjs} from 'react-icons/gr';
import {DiNodejsSmall} from 'react-icons/di';
import {SiJquery} from 'react-icons/si';
import {BiMobileVibration} from 'react-icons/bi';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {DiSass} from 'react-icons/di';
import {DiMongodb} from 'react-icons/di';

function Intro(){
    return(
        <div>
        <h1 className="big-headers">Hi! I'm Yuri</h1>
    <p className="intro-text"> I'm Full-Stack Developer with focus on <span className="deep-blue"> Front-End.</span> I'm a tireless seeker of the <span className="italics"> why</span> of things, and finding both a good and efficient way of solving problems. <br />
    <br />
    I'm very passionate about writing and helping people grasp difficult concepts in an easy way. I also enjoy painting and design. I can also occasionally bake an amazing flan.
    <br />
    <br />
    I'm open for <span className="deep-blue remote"> remote oportunities. </span>
    </p>


    <h1 class="intro-icons">
    <AiFillHtml5 title="HTML5" className="icon" />
    <IoLogoCss3 title="CSS3" className="icon"/>
    <SiJavascript title="JavaScript" className="icon"/>
    <BsBootstrap title="Bootstrap" className="icon"/>
    <FiGithub title="GitHub" className="icon"/>
    <GrReactjs title="React" className="icon" />
    <DiNodejsSmall title="Node.js" className="icon"/>
    <SiJquery title="jQuery" className="icon"/>
    <DiSass title="Sass" className="icon"/>
    <DiMongodb title="Mongodb" className="icon"/>
    <AiOutlineConsoleSql title="SQL" className="icon"/>

    <BiMobileVibration title="Responsive Design"/>
    </h1>
    </div>
    )
}

export default Intro;