import "/src/styles/left-section/eduPanel.css"
import PropTypes from 'prop-types'
import  fileIcon  from "/src/assets/icons/fileIcon.svg";
import  deleteIcon  from "/src/assets/icons/delete.svg"

export function PracticalCard({onClick = ()=> {}, handleDeletePracticalItem,practicalCards, practicalPoints, index}) {
    const practicalCardID = practicalCards[index].id;
    const practicalPointID = practicalPoints[index].id;
    const practicalData = practicalPoints[index].Data;
    return (
    <div className="cardParent">
       <div className="file-title" onClick={onClick}>    
                <div className="fileIcon">
                    <img src={fileIcon} alt="Education file" />
                </div>
                
                <div className="title-period">
                    <h3 className="exp">{
                        practicalData.jobTitle || "Software Engineer"}
                    </h3>
                    <p className="period">{practicalData.start || "2019"} - {practicalData.end || "2022"}</p>
            </div>
        </div>
            <button className="delButton" onClick={() => handleDeletePracticalItem(practicalPointID, practicalCardID )}>
                <img className="delete" src={deleteIcon} alt="deleteIcon" />
            </button>
        </div>        
    )
}

PracticalCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    handleDeletePracticalItem: PropTypes.func.isRequired,
    practicalPoints: PropTypes.array.isRequired,
    practicalCards: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
}

