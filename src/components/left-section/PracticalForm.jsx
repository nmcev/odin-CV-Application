import { useState } from "react"
import PropTypes from 'prop-types';

export function PracticalForm({practicalPoints, index, updatePracticalData}) {
  const [practicalData, setPracticalData] = useState({
    jobTitle: "" ,
    companyName: "",
    start: "",
    end: "",
    location: "",
    description: "", 
  })

  const handleChange = (e) => {
    setPracticalData({ ...practicalData, [e.target.name]: e.target.value });
    updatePracticalData(practicalPoints[index].id, {...practicalData,[e.target.name]: e.target.value })
  }
    return (
            <div className="educational-container">
              <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="job-company">
                    <div className="job">
                      <label htmlFor="jobTitle">Job Title</label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Your job title"
                        onChange={handleChange}
                        value={practicalData.jobTitle}
                      />
                    </div>
        
                    <div className="company">
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Enter Company name"
                       onChange={handleChange}
                        value={practicalData.companyName}
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
                        onChange={handleChange}
                        value={practicalData.start}
                        
                      />
                      <img className='rightArrow' src="/src/assets/icons/rightArrow.svg" alt="" />
                      <input
                        type="text"
                        name="end"
                        placeholder="end"
                        className="end" 
                        onChange={handleChange}
                        value={practicalData.end}
                      />
                    </div>
        
                    <div className="rightSection">
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="location"
                        onChange={handleChange}
                        value={practicalData.location}
                      />
                    </div>
                    </div>
                    
                  <div className="description">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Write your professional overview here."
                      onChange={handleChange}
                      value={practicalData.description}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
        
    )
}


PracticalForm.propTypes = {
  practicalPoints: PropTypes.array,
  index: PropTypes.number.isRequired,
  updatePracticalData: PropTypes.func.isRequired,
}
