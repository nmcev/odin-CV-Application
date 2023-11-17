import { EducationalExp } from "./EducationalExp";
import { PersonalDetails } from "./PersonalDetails"
import { IntroEdu } from "./IntroEducation";
import { EduCard } from "./EduCard";
import { PracticalForm } from "./PracticalForm.jsx";
import { PracticalCard } from "./PracticalCard";
import "/src/styles/left-section/sectionLeft.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import arrow from "/src/assets/icons/arrow.svg"

export function SectionLeft({
    data, setData,
    addExpPoint, expPoints,
    updateCardData, handleDeleteItem,
    eduCard, setEduCard,
    practicalPoints,
    addPracticalPoint,
    practicalCards, setPracticalCards,
    handleDeletePracticalItem,
    updatePracticalData
}) {
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isPracticalExpOpen, setIsPracticalExpOpen] = useState(false);
    const [selectedEduCardIds, setSelectedEduCardIds] = useState([]);
    const [selectedPracticalCard, setSelectedPracticalCard] = useState([])

    const addIntroEdu = () => { eduCard.length < 5 && setEduCard([...eduCard, { id: uuidv4() }]) }

    const toggleEduCard = (cardId) => {
        if (selectedEduCardIds.includes(cardId)) { // IDs that already selected
            // Deselect
            setSelectedEduCardIds(selectedEduCardIds.filter(id => id !== cardId));// filter the selected id and return the rest of the ids 
        } else {
            // Select new id
            setSelectedEduCardIds([...selectedEduCardIds, cardId]);
        }
    };


    const addPracticalCard = () => practicalCards.length < 5 && setPracticalCards([...practicalCards, { id: uuidv4(), Data: {} }]);

    const togglePracticalCard = (cardID) => {
    const updatedSelectedPracticalCard = selectedPracticalCard.includes(cardID) ? selectedPracticalCard.filter(id => id !== cardID): [...selectedPracticalCard, cardID];
      setSelectedPracticalCard(updatedSelectedPracticalCard);
    }
    return (       
        <div className='parent'>

            <div className="line"  >
                <h1
                    style={{ fontSize: '30px', color: "#424242"}}
                >
                    {data.firstName || "John Doe"}&apos;s Resume
                </h1>
            </div>

            {/* Personal Details */}
          <div className="line">
            <div className='closeAndOpen' >
                <h2 className='title'>Personal Details</h2>
                <button className={isPersonalOpen ? 'arrow-down' : 'arrow-up'} onClick={() => setIsPersonalOpen(!isPersonalOpen)}>
                    <img src={arrow} alt="closing icon" />
                </button>
            </div>
   
                
            { isPersonalOpen && <PersonalDetails data={data} setData={setData}/>}
            </div>

            {/* Practical Experience */}
       <div className="line">
           <div className="closeAndOpen">
                   <h2 className="title">Practical Experience</h2>
                   <button className={isPracticalExpOpen ? 'arrow-down': 'arrow-up'} onClick={() => setIsPracticalExpOpen(!isPracticalExpOpen) }>
                       <img src={arrow} alt="closing icon" />
                    </button>
                </div>
                {isPracticalExpOpen && (
                    <>
                    <p className="exp-para">include your last 10 years of  of relevant experience and dates in this section. List your most recent position first.</p>
                        <IntroEdu text={'Practical'} onClick={addPracticalCard} addPoint={addPracticalPoint} />

                        <div className="eduCards">
                            {practicalCards.map((practicalCard, index) => (
                                <div className="eduPanel" key={practicalCard.id}>
                                    <PracticalCard
                                        key={practicalCard.id}
                                        practicalCards={practicalCards}
                                        practicalPoints={practicalPoints}
                                        onClick={() => togglePracticalCard(practicalCard.id)}
                                        handleDeletePracticalItem={handleDeletePracticalItem}
                                        index={index}
                                    />

                                    {selectedPracticalCard.includes(practicalCard.id) && (
                                    
                                        <PracticalForm
                                            practicalPoints={practicalPoints}
                                            index={index}
                                            updatePracticalData={updatePracticalData} />
                                    )
                                    }
                                </div>
                        )
                        )}
                        </div>
                    </>
                    )}  
       </div>

            {/* Educational Experience */}
        <div className="line">
            <div className='closeAndOpen' >
                <h2 className="title">Educational Experience</h2>
                <button className={isOpen ? 'arrow-down' : 'arrow-up'} onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrow} alt="" />
                </button>
                
            </div>
         
                {isOpen && (
                <>
                 <IntroEdu text={null} onClick={addIntroEdu} addPoint={addExpPoint} />

                    <div className="eduCards">            
                         {eduCard.map((card, index) => (
                                <div className="eduPanel" key={card.id}>
                                    <EduCard
                                        key={card.id}
                                        eduCard={eduCard}
                                        expPoints={expPoints}
                                        index={index}
                                        onClick={() => toggleEduCard(card.id)}
                                        handleDeleteItem={handleDeleteItem}
                                    />
                                    {selectedEduCardIds.includes(card.id) && (
                                        <EducationalExp
                                            expPoints={expPoints}
                                            index={index}
                                            updateCardData={updateCardData}
                                        />
                                    )}
                                </div>
                            ))}
                    </div>        
                </>
                )}
                

        </div>
    </div>     
    );
}

SectionLeft.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    addExpPoint: PropTypes.func.isRequired,
    expPoints: PropTypes.array.isRequired,
    updateCardData: PropTypes.func.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    eduCard: PropTypes.array.isRequired,
    setEduCard: PropTypes.func.isRequired,
    practicalPoints: PropTypes.array.isRequired,
    addPracticalPoint: PropTypes.func.isRequired,
    practicalCards: PropTypes.array.isRequired,
    setPracticalCards: PropTypes.func.isRequired,
    handleDeletePracticalItem: PropTypes.func.isRequired,
    updatePracticalData:PropTypes.func.isRequired,
};

