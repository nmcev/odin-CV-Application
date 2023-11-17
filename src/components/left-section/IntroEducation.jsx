import "/src/styles/left-section/eduCard.css"
import PropTypes from 'prop-types';

export function IntroEdu({ text ,onClick, addPoint}) {

    
    return (
        <div className="eduCard">
            <button onClick={() => {
                onClick();
                addPoint();
            }}  >
                <img src="/src/assets/icons/addCircle.svg" alt="" />
                Add {text || "Experience"}
                
            </button>
            
            
        </div>
    )
}
IntroEdu.propTypes = {
    onClick: PropTypes.func.isRequired,
    addPoint: PropTypes.func.isRequired,
    text: PropTypes.string
};