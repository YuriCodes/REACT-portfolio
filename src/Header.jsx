import { Fragment } from "react";

function Header(){
    return(
        <Fragment>
    <section className="header-txt">
    <div>
        <h1 className="big-headers deep-blue">YR</h1>
    </div>
    <div className="nav-links">
    <a href="#Work" className="deep-blue"> 0.1 Work </a>
    <a href="#Contact" className="deep-blue"> 0.2 Contact </a>
    </div>
    </section>
    </Fragment>
    )   
}

export default Header;