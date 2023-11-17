import "/src/styles/left-section/eduCard.css"
import PropTypes from 'prop-types';
import addCircle from "/src/assets/icons/addCircle.svg"
export function IntroEdu({ text ,onClick, addPoint}) {

    
    return (
        <div className="eduCard">
            <button onClick={() => {
                onClick();
                addPoint();
            }}  >
                <img src={addCircle} alt="" />
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