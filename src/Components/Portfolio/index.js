import './portfolio.css';
import Skills from './Skills';
import Common from './Skills/Common';

function Portfolio() {
    return (
        <>
        <div className='portfolio-component'>
            <div className='portfolio'>
                <div className='headings'>
                    <h3 className='active'>My Skills</h3>
                    <h3>Experience</h3>
                    <h3>Education</h3>
                </div>
                <div className='wrapper'>
                    {
                        Common.map((val, ind) => {
                            return <Skills 
                            key = {ind}
                            heading = {val.heading}
                            para = {val.para}
                            line = {val.line}
                            />
                        })
                    }
                </div>
            </div>
        </div> 
        </>
    )
}

export default Portfolio