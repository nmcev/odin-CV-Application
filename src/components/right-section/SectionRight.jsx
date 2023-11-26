import PropTypes from 'prop-types';
import CvTemplate from "./Cv"
import '/src/styles/right-section/sectionRight.css'

export function RightSection({data, expPoints, practicalPoints, toggleLinkedin}) {
    return ( 
        <div className="resume-container">
            <CvTemplate
                data={data}
                expPoints={expPoints}
                practicalPoints={practicalPoints}
                toggleLinkedin={toggleLinkedin}
            />
        </div>
    )
}


RightSection.propTypes = {
    data: PropTypes.object.isRequired,
    expPoints: PropTypes.array.isRequired,
    practicalPoints: PropTypes.array.isRequired,
    toggleLinkedin: PropTypes.bool,
};