import PropTypes from 'prop-types';
import CvTemplate from "./Cv"
import '/src/styles/right-section/sectionRight.css'

export function RightSection({data, expPoints, practicalPoints}) {
    return ( 
        <div className="resume-container">
            <CvTemplate
                data={data}
                expPoints={expPoints}
                practicalPoints={practicalPoints}
            />
        </div>
    )
}


RightSection.propTypes = {
    data: PropTypes.object.isRequired,
    expPoints: PropTypes.array.isRequired,
    practicalPoints: PropTypes.array.isRequired
};