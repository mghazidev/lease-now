import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Skills(props) {

const [isHovering, Update] = useState(false);

    function Hover() {
        Update(true);
    }

    function Leave() {
        Update(false);
    }
 
    return (
        <>
            <div className='skills-component'>
                <div className='skills'>
                    <div className='category' 
                    onMouseEnter={Hover}
                    onMouseLeave={Leave}
                    >
                        <div className='dropdown'>
                            <div className='content'>
                                <h4>
                                    {props.heading}
                                </h4>
                            </div>
                            <div className='name'>
                                <p>{props.para}</p>
                                <FontAwesomeIcon icon={faAngleDown} className="icon"></FontAwesomeIcon>
                            </div>
                        </div>
                        {isHovering && <span>{props.line}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills