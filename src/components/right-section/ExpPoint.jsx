import PropTypes from 'prop-types';
import  dotIcon from "/src/assets/icons/dot.svg"
export function ExperiencePoint({ exp }) {
    return (        
     <div className='exp-info'>
        <div className='topSection'>
          <div className='jobTitle-company'>
            <img src={dotIcon} alt="" />
                    <p className='jobTitle'>{exp.jobTitle|| "Computer Science"}&nbsp;-&nbsp;{exp.schoolName || "Harvard Uni"} / {exp.location || "USA"}</p>
            </div>
                <p className='period'>{exp.start || "2013"} - {exp.end || "2018"}</p>
       </div>
            <div className='bottomSection'>
        </div>
    </div>
    )
}

ExperiencePoint.propTypes = {
    exp: PropTypes.object.isRequired,
};