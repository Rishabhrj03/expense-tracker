import Col from 'react-bootstrap/Col';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import React from 'react';
import InvestmentGraph from './InvestmentGraph';
import SimplePie from './SimplePie';

const RightSidebar = () => {
  const [valueEnd, setValueEnd] = React.useState(66);

  return (
    <Col xs={12} md={3} className='text-left my-3'>
      <div className='d-flex text-center'>
        <div>
          <h6>Investment</h6>
          <InvestmentGraph />
        </div>
        {/* <div>
          <h6>Investment</h6>
          <SimplePie />
        </div> */}
      </div>
      <hr />
      <h6>Goals</h6>
      <div className='d-flex justify-content-around py-2 theme-bg-primary align-items-center mb-2 rounded'>
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {(value) => (
            <CircularProgressbar
              strokeWidth={15}
              value={value}
              text={`${value}%`}
              styles={{
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${66 / 100})`,
                },
              }}
            />
          )}
        </ProgressProvider>
        <div>
          <span className='font-size-small theme-text-primary font-weight-700'>
            Travel
          </span>
          <div className='font-size-medium font-weight-700'>₹100000</div>
        </div>
        <div>47%</div>
      </div>
      {/* SECONDDDDDD */}
      <div className='d-flex justify-content-around py-2 theme-bg-primary align-items-center mb-2 rounded'>
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {(value) => (
            <CircularProgressbar
              strokeWidth={15}
              value={value}
              text={`${value}%`}
              styles={{
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${66 / 100})`,
                },
              }}
            />
          )}
        </ProgressProvider>
        <div>
          <span className='font-size-small theme-text-primary font-weight-700'>
            Apartmant
          </span>
          <div className='font-size-medium font-weight-700'>₹50,00,000</div>
        </div>
        <div>47%</div>
      </div>
    </Col>
  );
};

export default RightSidebar;
