import "/src/styles/left-section/eduPanel.css"
import PropTypes from 'prop-types';
export function EduCard({ onClick, expPoints, index, handleDeleteItem, eduCard}) {
    const { jobTitle, start, end, location } = expPoints[index].cardData;
    const expPointID = expPoints[index].id
    const eduCardID = eduCard[index].id
    return (
        
        <div className="cardParent">
       <div className="file-title" onClick={onClick}>    
                <div className="fileIcon">
                    <img src="/src/assets/icons/fileIcon.svg" alt="Education file" />
                </div>
                
                <div className="title-period">
                    <h3 className="exp">{jobTitle || "Computer Science"}</h3>
                    <p className="period">{start || "2013"} - {end || "2018"} / {location || "USA"}</p>
            </div>
        </div>
            <button onClick={() => handleDeleteItem(expPointID, eduCardID)} className="delButton">
                <img className="delete" src="src/assets/icons/delete.svg" alt="deleteIcon" />
            </button>
        </div>        
    )
}

EduCard.propTypes = {
    onClick: PropTypes.func.isRequired, 
    expPoints: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    eduCard: PropTypes.array.isRequired,

};

EduCard.defaultProps = {
    onClick: () => {},
    expPoints: [],
    index: 0, 
    handleDeleteItem: () => {}, // Default empty function for handleDeleteItem
    eduCard: [], 
};