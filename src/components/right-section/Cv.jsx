import PropTypes from 'prop-types';
import '/src/styles/right-section/cv.css';
import { ExperiencePoint } from "./ExpPoint.jsx";
import { PracticalPoint } from './PracticalPoint.jsx';
import  phoneIcon  from "/src/assets/icons/phone.svg"
import emailIcon  from "/src/assets/icons/email.svg"
export default function CvTemplate({ data, expPoints, practicalPoints}) {
    return (
        <div className="cv-template">

            <div className='header'>
              <div className='header-left'>
                    <h1 className='name'>{data.firstName ||"John"} {data.lastName || "Doe"}</h1>
                    <p className='jobTitle'>{data.jobTitle || "Software Engineer"}</p>
                </div>

                <div className='header-right'>

                    <p className='para'>{data.address || "USA, New York, 5th Avenue, 12"}</p>
                    <p className='para'>
                    {data.phoneNumber ? (
                             <>
                               <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                                <img src={phoneIcon} alt="phone icon" />
                             </>
                           ) : (
                             <>
                               <a href="tel:+1-202-555-0104">+1-202-555-0104</a>
                               <img src={phoneIcon} alt="phone icon" />
                             </>
                           )}
                          </p>
    
                          <p className='para'>
                        {data.email ? (

                            <>
                                <a href={`mailto:${data.email}`}>{data.email}</a>
                                <img src={emailIcon} alt="email icon" />
                            </>
                        ) : (
                                <>
                                    <a href="mailto: jhonPersonal@doe.com">
                                    jhonPersonal@doe.com
                                    </a>
                                    <img src={emailIcon} alt="email icon" />
                                </>
                            )}
                          </p>
                </div>
            </div>

            <div className='topic-exp'>
            <h1 className='exp-topic'>Practical</h1>
            <div className='exp-container'>
                    {practicalPoints.map((practicalPoint) => ( 
                    <div className='exps' key={practicalPoint.id}>
                            <PracticalPoint practicalData={practicalPoint.Data} />
                    </div>
                    ))}
                    
                </div>
            </div>
            
            <div className='topic-exp'>
            <h1 className='exp-topic'>Experience</h1>
            <div className='exp-container'>
                    {expPoints.map((exp) => ( 

                            <div className='exps' key={exp.id}>
                                <ExperiencePoint exp={exp.cardData} key={exp.id} />
                            </div>
                    ))}
                    
                </div>
             </div>
        </div>
    );
}
CvTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    expPoints: PropTypes.array.isRequired,
    practicalPoints: PropTypes.array.isRequired
};