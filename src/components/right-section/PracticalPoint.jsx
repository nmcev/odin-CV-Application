import PropTypes from 'prop-types';

export function PracticalPoint({ practicalData }) {
    return (        
     <div className='exp-info'>
        <div className='topSection'>
          <div className='jobTitle-company'>
            <img src="/src/assets/icons/dot.svg" alt="" />
                    <p className='jobTitle'>{practicalData.jobTitle || "Software Engineer"} &nbsp;-&nbsp;{
                        practicalData.companyName || "Google"} / {practicalData.location || "USA"}
                    </p>
            </div>
                <p className='period'>
                    {practicalData.start || "2019"} - {practicalData.end || "2022"}
                </p>
       </div>
            <div className='bottomSection'>
                <p className="jobDescription">
                    {practicalData.description || "Lorem ipsum dolor sit amet consectetur adipisicing."}
                </p>
        </div>
    </div>
    )
}


PracticalPoint.propTypes = {
    practicalData: PropTypes.object.isRequired,
};
