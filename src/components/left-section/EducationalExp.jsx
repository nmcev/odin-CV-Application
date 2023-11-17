import { useState } from 'react';
import PropTypes from 'prop-types';
import "/src/styles/left-section/educational.css"

export function EducationalExp({expPoints, index, updateCardData}) {

  const [eduData, setEduData] = useState({
    jobTitle: "" ,
    schoolName: "",
    start: "",
    end: "",
    location: "",
  });

  const handleChange = (e) => {
    setEduData({ ...eduData, [e.target.name]: e.target.value });
    updateCardData(expPoints[index].id, { ...eduData, [e.target.name]: e.target.value });
    /* line updateCardData(expPoints[index].id, { ...eduData, [e.target.name]: e.target.value }):  
    - we are updating the cardData property of the expPoints object.
    - the first argument is the id of the expPoint object we want to update.
    - the second argument is the new value of the cardData property, instead of sending the object.
    */
  }
  
  return (
    <div className="educational-container">
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="job-company">
            <div className="job">
              <label htmlFor="jobTitle">Title of study</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="Your Study title"
                value={eduData.jobTitle}
                onChange={handleChange}

              />
            </div>

            <div className="company">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                placeholder="Enter School name"
                value={eduData.schoolName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="period-location">
            <div className="leftSection">
              <input
                type="text"
                name="start"
                placeholder="start"
                className="start"
                id="period"
                value={eduData.start}
                onChange={handleChange}


              />
              <img className='rightArrow' src="/src/assets/icons/rightArrow.svg" alt="" />
              <input
                type="text"
                name="end"
                placeholder="end"
                className="end"
                onChange={handleChange}
                value={eduData.end}
              />
            </div>

            <div className="rightSection">
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="location"
                onChange={handleChange}
                value={eduData.location}
              />
            </div>
          </div>

          {/* <div className="description">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Write your professional overview here."
              onChange={handleChange}
              value={eduData.description}
            ></textarea>
          </div> */}
        </form>
      </div>
    </div>
  );
}

EducationalExp.propTypes = {
  expPoints: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  updateCardData: PropTypes.func.isRequired,
};
