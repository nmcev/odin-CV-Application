import { SectionLeft } from './left-section/SectionLeft';
import { RightSection } from './right-section/SectionRight';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '/src/styles/mainView.css'
function App() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [eduCard, setEduCard] = useState([{ id: uuidv4() }]);
  const [expPoints, setExpPoint] = useState([
    {
      id: uuidv4(),
      cardData: {}
    }
  ]);

  const [practicalCards, setPracticalCards] = useState([{ id: uuidv4(), }]);
  const [practicalPoints, setPracticalPoints] = useState([
    {
      id: uuidv4(),
      Data:{}
    }
  ])

  
  const addPracticalPoint = () => practicalPoints.length < 5 && setPracticalPoints([...practicalPoints, {id: uuidv4(), Data:{}}])
  const addExpPoint = () => {
    expPoints.length < 5 && setExpPoint([...expPoints, { id: uuidv4(), cardData: {} }]);
  };

  const updateCardData = (id, cardData) => {
    setExpPoint(
      expPoints.map((expPoint) =>
        expPoint.id === id ? { ...expPoint, cardData } : expPoint
      )
    );
  }

  const handleDeleteItem = (expPointID, eduCardID) => {
    setEduCard(eduCard.filter((card) => card.id !== eduCardID)); // delete eduCard: filter returns a new updated array without the deleted item 
    setExpPoint(expPoints.filter((expPoint) => expPoint.id !== expPointID)); // delete expPoint: filter returns a new updated array without the deleted item
}

  const handleDeletePracticalItem = (practicalPointID, practicalCardID) => {
    setPracticalPoints(practicalPoints.filter((practicalPoint) => practicalPoint.id !== practicalPointID))
    setPracticalCards(practicalCards.filter((practicalCard) => practicalCard.id !== practicalCardID))
  }

  const updatePracticalData = (id, Data) => {
    setPracticalPoints(practicalPoints.map((practicalPoint) =>
      practicalPoint.id === id ? { ...practicalPoint, Data } : practicalPoint
    )
    )
  }
  
  return (
    <div className='mainView'>
      <SectionLeft
        data={data}
        setData={setData}
        addExpPoint={addExpPoint}
        expPoints={expPoints}
        updateCardData={updateCardData}
        handleDeleteItem={handleDeleteItem}
        eduCard={eduCard}
        setEduCard={setEduCard}
        practicalPoints={practicalPoints}
        addPracticalPoint={addPracticalPoint}
        practicalCards={practicalCards}
        setPracticalCards={setPracticalCards}
        handleDeletePracticalItem={handleDeletePracticalItem}
        updatePracticalData={updatePracticalData}

      />
    
      <RightSection
        data={data}
        expPoints={expPoints}
        practicalPoints={practicalPoints}
      />
   </div>
  )
}

export default App
