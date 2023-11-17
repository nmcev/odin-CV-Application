import '/src/styles/left-section/personalDetails.css' 
import PropTypes from 'prop-types';

export function PersonalDetails({data, setData}) {

    return (
        <div className='main'>
                <div className='form-container'>
        <form>
            <div className="input-group job-section">
                <label htmlFor="jobTitle">Job Title</label>
                        <input type="text"
                            id="jobTitle"
                            placeholder="Your job title"
                            value={data.jobTitle}
                        onChange={(e) => setData({ ...data,jobTitle: e.target.value })}/>
            </div>

          <div className='name'>

            <div className="input-group-name">
                <label htmlFor="firstName">First Name</label>
                     <input type="text"
                            id="firstName"
                            placeholder="Your name"
                            value={data.firstName}
                            onChange={(e) => setData({ ...data,firstName: e.target.value })}
                            />
            </div>


            <div className='input-group-name'>
                <label htmlFor="lastName">Last Name</label>
                       <input type="text"
                              id="lastName"
                              placeholder="Your last name"
                              value={data.lastName}
                              onChange={(e) => setData({ ...data,lastName: e.target.value })}
                            />
            </div>

        </div>

        <div className='name'>

           <div className=" input-group-name input-group-email input-group ">
                <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               placeholder="Your email"
                               value={data.email}
                               onChange={(e) => setData({ ...data,email: e.target.value })}
                            />
            </div>
            
            <div className="input-group-name input-group" >
                <label htmlFor="phoneNumber">Phone Number</label>
                         <input type="number"
                                id="phoneNumber"
                                placeholder="Your name"
                                value={data.phoneNumber}
                                onChange={(e) => setData({ ...data,phoneNumber: e.target.value })}
                            />
                        </div>
                    </div>
                    
                    <div className='address'>
                        <label htmlFor="address">Address</label>
                          <input type="text"
                                id="address"
                                placeholder="Your Address"
                                value={data.address}
                                onChange={(e) => setData({ ...data,address: e.target.value })}
                            />
                     </div>
    </form>
    </div>  
       
             
   </div>
  )
    
}
PersonalDetails.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}